<script context="module">
  export async function load({ fetch, stuff }) {
    const { date } = stuff

    const searchParams = new URLSearchParams({ 
      year: date.getFullYear(), 
      month: date.getMonth()
    })

    const res = await fetch(`/api/history?${searchParams}`)
    const { tips } = await res.json()

    return {
      props: {
        tips,
        date
      }
    }
  }
</script>

<script>
  import ArchiveTip from '$lib/components/ArchiveTip.svelte'

  export let tips = []
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
  {#each tips as { text, ts, url, ref } (ref)}
    <ArchiveTip
      {text}
      {ts}
      {url}
      {ref}
    />
  {:else}
    <p class="no-tips">
      Ope! Looks like there are no tips saved for this month. <br>
      But you can <a href="/" data-emoji-before="⚡">generate a new Tip</a>...
    </p>
  {/each}
</div>

<style>
  .archive {
    border-bottom: 0.1rem solid var(--fg-color-lighter);
  }

  .no-tips {
    font-size: var(--font-m);
    margin: var(--gap-xl) 0;
    line-height: 1.8;
  }

  .no-tips a {
    font-weight: bold;
  }
</style>