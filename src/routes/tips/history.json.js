import { getAllDocuments } from '$lib/db'

export async function get({ url }) {
  const { searchParams } = url
  const docs = await getAllDocuments({
    queryBefore: searchParams.get('before'),
    queryAfter: searchParams.get('after'),
  })
  return {
    body: docs
  }
}