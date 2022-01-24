<script context="module">
  export async function load({ fetch, stuff }) {
    const { date } = stuff

    const searchParams = new URLSearchParams({ 
      year: date.getFullYear(), 
      month: date.getMonth()
    })

    const res = await fetch(`/api/history?${searchParams}`)
    const data = await res.json()

    return {
      props: {
        pages: [data],
        date
      }
    }
  }
</script>

<script>
  import TipPage from '$lib/components/TipPage.svelte'

  export let pages = []
  export let date = new Date()
</script>

<svelte:head>
  <title>
    Nice Tips Archive 
    &mdash; 
    {date.toLocaleString([], { month: 'short', year: 'numeric' })}
  </title>
</svelte:head>

<div class="archive">
  {#each pages as { tips }}
    <TipPage
      {tips}
    />
  {/each}
</div>
