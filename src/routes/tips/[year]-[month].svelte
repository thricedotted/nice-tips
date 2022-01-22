<script context="module">
  export async function load({ fetch, params }) {
    const { year, month } = params
    const searchParams = new URLSearchParams({ year, month })
    console.log(`/tips/history.json?${searchParams}`)

    const res = await fetch(`/tips/history.json?${searchParams}`)

    const data = await res.json()

    return {
      props: {
        pages: [data]
      }
    }
  }
</script>

<script>
  import Layout from '$lib/layout/Layout.svelte'
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

<svelte:head>
  <title>Nice Tips Archive</title>
</svelte:head>

<Layout wide={true}>
  <div class="welcome">
    <p>
      Welcome to the Tip archive!
      Whenever somebody <span class="saves">saves</span> a Tip, I bring it here for safekeeping.
    </p>
  </div>

  <div class="archive">
    {#each pages as { tips }}
      <TipPage
        {tips}
      />
    {/each}
  </div>

  {#if after}
  <button
    on:click={loadNextPage}
    data-emoji-before='➕'
    >
    Load more Tips
  </button>
  {/if}
</Layout>

<style>
  .welcome {
    position: relative;
    font-size: var(--font-s);
    background: #eee;
    padding: var(--big-gap);
    margin-top: var(--big-gap);
  }

  .welcome p {
    margin: 0;
  }

  .welcome::before {
    content: ' ';
    position: absolute;
    top: -0.4rem;
    left: 1px;
    background: inherit;
    width: 1rem;
    height: 1rem;
    clip-path: polygon(50% 0, 0 50%, 100% 50%);
  }

  .saves::before, .saves::after {
    content: "💖";
  }

  button {
    --link-accent-color: burlywood;
    font-weight: bold;
    font-size: var(--font-s);
  }
</style>

