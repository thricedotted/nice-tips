import { createDocument } from '$lib/db'
import { verifyHash } from '$lib/util'

export async function post({ body }) {
  const { text, url, hash } = Object.fromEntries(body)

  if (verifyHash(text, url, hash)) {
    const { ref } = await createDocument({ 
      text, 
      url 
    })

    return {
      status: 302,
      headers: {
        Location: `/tips/${ref}`
      }
    }
  }

  return {
    status: 403,
    body: {
      status: 403,
      message: 'Signature not verified'
    }
  }
}