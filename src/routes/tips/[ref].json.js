import { getDocument } from '$lib/db'

export async function get({ params }) {
  const { ref } = params

  const { text, ts, url } = await getDocument(ref)

  return {
    body: {
      ref,
      text,
      ts,
      url
    }
  }
}