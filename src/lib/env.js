import dotenv from 'dotenv'
dotenv.config()

const FAUNA_SECRET = process.env['FAUNA_SECRET']
const HASH_SECRET = process.env['HASH_SECRET']

export {
  FAUNA_SECRET,
  HASH_SECRET
}