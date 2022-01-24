<script context="module">
  export async function load({ fetch }) {
    const searchParams = new URLSearchParams({
      month: new Date().getMonth(),
      year: new Date().getFullYear()
    })

    console.log(searchParams)

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
