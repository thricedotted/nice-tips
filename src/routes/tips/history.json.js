import { getDocumentsByMonthYear } from '$lib/db'

export async function get({ url }) {
  const { searchParams } = url

  const docs = await getDocumentsByMonthYear({
    month: parseInt(searchParams.get('month')),
    year: parseInt(searchParams.get('year')),
  })

  return {
    body: docs
  }
}