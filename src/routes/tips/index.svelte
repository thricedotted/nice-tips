<script context="module">
  export async function load({ fetch }) {
    const res = await fetch('/tips/history.json')
    const data = await res.json()

    return {
      props: {
        pages: [data]
      }
    }
  }
</script>

<svelte:head>
  <title>Nice Tips Bot</title>
</svelte:head>

<script>
  import TipPage from '$lib/components/TipPage.svelte'

  export let pages = []

  $: after = pages.length > 0 
             ? pages[pages.length - 1].after 
             : undefined

  async function loadNextPage() {
    const params = new URLSearchParams({ after })
    const res = await fetch(`/tips/history.json?${params}`)
    const data = await res.json()
    pages = [...pages, data]
  }
</script>

{#each pages as { docs }}
  <TipPage
    {docs}
  />
{/each}

{#if after}
<button
  on:click={loadNextPage}
  data-emoji-before='➕'
  >
  Load more Tips
</button>
{/if}

<style>
  button {
    --link-accent-color: burlywood;
    font-weight: bold;
    font-size: var(--font-s);
  }

</style>

