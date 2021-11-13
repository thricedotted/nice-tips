import { getRandomDocumentId } from '$lib/db'

export async function get() {
  const id = await getRandomDocumentId()
  return {
    status: 302,
    headers: {
      Location: `/tips/${id}`
    }
  }
}