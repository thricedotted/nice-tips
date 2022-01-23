import { getDocument } from '$lib/db'

export async function get({ params }) {
  const { ref } = params

  const { text, ts, url } = await getDocument(ref)

  return {
    headers: {
      'Cache-Control': 'max-age=86400, s-maxage=604800'
    },

    body: {
      ref,
      text,
      ts,
      url
    }
  }
}