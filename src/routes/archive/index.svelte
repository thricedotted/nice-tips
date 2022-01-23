<script context="module">
  export async function load({ fetch }) {
    const searchParams = new URLSearchParams({
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear()
    })

    const res = await fetch(`/api/history?${searchParams}`)
    const data = await res.json()

    return {
      props: {
        pages: [data]
      }
    }
  }
</script>

<script>
  import TipPage from '$lib/components/TipPage.svelte'

  export let pages = []

</script>

<svelte:head>
  <title>Nice Tips Archive</title>
</svelte:head>

<div class="archive">
  {#each pages as { tips }}
    <TipPage
      {tips}
    />
  {/each}
</div>
