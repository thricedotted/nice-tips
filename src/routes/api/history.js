import { getDocumentsByMonthYear } from '$lib/db'

export async function get({ url }) {
  const { searchParams } = url

  const docs = await getDocumentsByMonthYear({
    month: parseInt(searchParams.get('month')),
    year: parseInt(searchParams.get('year')),
  })

  const currentMonth = (new Date()).getMonth() + 1

  const headers = month !== currentMonth
                  ? { 'Cache-Control': 's-maxage=604800, immutable' }
                  : {}

  return {
    headers,
    body: docs
  }
}