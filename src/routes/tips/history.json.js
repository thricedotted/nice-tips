import { getAllDocuments } from '$lib/db'

export async function get({ query }) {
  const docs = await getAllDocuments({
    queryBefore: query.get('before'),
    queryAfter: query.get('after'),
  })
  return {
    body: docs
  }
}