import { createDocument } from '$lib/db'
import { verifyHash } from '$lib/crypto'

export async function post({ request }) {
  const formData = await request.formData()

  const { text, url, hash } = Object.fromEntries(formData)

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