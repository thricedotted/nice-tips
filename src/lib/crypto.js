import { createHmac } from 'crypto'

import { HASH_SECRET } from '$lib/env'

function generateHash(text, url) {
  const hmac = createHmac('sha256', HASH_SECRET)
  hmac.update(`${text}+${url}`)
  return hmac.digest('hex')
}

function verifyHash(text, url, hash) {
  return generateHash(text, url) === hash
}

export {
  generateHash,
  verifyHash
}