<script context="module">
  import { validateMonthYear } from '$lib/components/Calendar.svelte'

  export async function load({ fetch, params }) {
    try {
      const { month, year } = validateMonthYear(params)

      // normalize month and year in URL
      const normalized = {
        month: `${month + 1}`.padStart(2, '0'),
        year: `${year}`
      }

      if (params.month !== normalized.month || params.year !== normalized.year) {
        return {
          status: 301,
          redirect: `/archive/${normalized.year}/${normalized.month}`
        }
      }

      const searchParams = new URLSearchParams({ year, month })

      const res = await fetch(`/api/history?${searchParams}`)
      const data = await res.json()

      return {
        props: {
          pages: [data],
          year,
          month
        }
      }
    }

    catch (error) {
      return {
        status: 400,
        error
      }
    }
  }
</script>

<script>
  import TipPage from '$lib/components/TipPage.svelte'

  export let pages = []
  export let year, month
</script>

<svelte:head>
  <title>Nice Tips Archive &mdash; 
    {new Date(year, month).toLocaleString([], { month: 'short', year: 'numeric' })}
  </title>
</svelte:head>

<div class="archive">
  {#each pages as { tips }}
    <TipPage
      {tips}
    />
  {/each}
</div>
