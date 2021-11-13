import { Client } from 'faunadb'
import { 
  Create, 
  Get, 
  Ref, 
  Collection,
  Paginate,
  Documents,
  Var,
  Map,
  Lambda,
  Reverse,
  Index,
  Filter,
  GT,
  Match,
} from 'faunadb/src/query'

import { FAUNA_SECRET } from '$lib/env'

const db = new Client({
  secret: FAUNA_SECRET,
  domain: 'db.us.fauna.com'
})

async function getDocument(id) {
  const { ref, data, ts } = await db.query(
    Get(Ref(Collection('tips'), id))
  )

  return {
    ts,
    ref: ref.id,
    ...data
  }
}

async function createDocument({ text, url }) {
  const { ref, data, ts } = await db.query(
    Create(
      Collection('tips'),
      { data: { text, url, random: Math.random() } }
    )
  )

  return {
    ts,
    ref: ref.id,
    ...data
  }
}

async function getAllDocuments({ 
  queryBefore,
  queryAfter,
} = {}) {

  const { before, after, data } = await db.query(
    Map(
      Paginate(
        Reverse(Documents(Collection('tips'))),
        { 
          before: queryBefore ? Ref(Collection('tips'), queryBefore) : undefined,
          after: queryAfter ? Ref(Collection('tips'), queryAfter) : undefined,
          size: 100,
        }
      ),
      Lambda("tip", Get(Var("tip")))
    )
  )

  return {
    after: after ? after[0].id : undefined,
    before: before ? before[0].id : undefined,
    docs: data.map(({ ts, ref, data }) => {
      return { 
        ts,
        ref: ref.id,
        ...data
      }
    })
  }
}

async function getRandomDocumentId() {
  const { ref } = await db.query(
    Get(Filter(
      Match(Index('random-ref')),
      Lambda(
        ["random", "ref"],
        GT(Var("random"), Math.random())
      )
    )
  ))
  return ref.id
}

export {
  getDocument,
  createDocument,
  getAllDocuments,
  getRandomDocumentId
}