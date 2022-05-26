import { getDocumentsByMonthYear } from '$lib/db'

export async function get({ url }) {
  const { searchParams } = url

  const month = parseInt(searchParams.get('month'))
  const year = parseInt(searchParams.get('year'))

  const docs = await getDocumentsByMonthYear({ month, year })

  const currentMonth = (new Date()).getMonth() + 1

  const headers = month !== currentMonth
                  ? { 'Cache-Control': 's-maxage=604800, immutable' }
                  : {}

  return {
    headers,
    body: docs
  }
}