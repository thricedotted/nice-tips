import { getRandomDocumentId } from '$lib/db'

export async function get() {
  const id = await getRandomDocumentId()
  return {
    body: {
      id
    }
  }
}