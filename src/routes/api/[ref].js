import { getDocument } from '$lib/db'

export async function get({ params }) {
  const { ref } = params

  const { text, ts, url } = await getDocument(ref)

  return {
    headers: {
      'Cache-Control': 's-maxage=604800, immutable'
    },

    body: {
      ref,
      text,
      ts,
      url
    }
  }
}