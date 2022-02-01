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

  let ascending = true

  $: dateString = date.toLocaleString([], { month: 'short', year: 'numeric' })
  $: orderedTips = ascending ? tips : [...tips].reverse()
</script>

<svelte:head>
  <title>
    Nice Tips Archive 
    &mdash; 
    {dateString}
  </title>
</svelte:head>

<div class="archive">
  {#if tips.length > 0}
  <p class="sort">
    Sort from
    <button
      on:click={() => ascending = !ascending}
      >
      {#if ascending}
      oldest &rarr; newest
      {:else}
      newest &rarr; oldest
      {/if}
    </button>
  </p>
  {/if}

  {#each orderedTips as { text, ts, url, ref } (ref)}
    <ArchiveTip
      {text}
      {ts}
      {url}
      {ref}
    />
  {:else}
    <p class="no-tips">
      Ope! Looks like there are no tips saved for {dateString}. <br>
      But you can <a href="/" data-emoji-before="⚡">generate a new Tip</a>...
    </p>
  {/each}

  {#if tips.length > 0}
    <p 
      class="end"
      data-emoji-before="🔚"
      data-emoji-after="🆒"
      >
      That's all for {dateString}!
    </p>
  {/if}
</div>

<style>
  .archive {
    border-bottom: 0.1rem solid var(--fg-color-lighter);
  }

  .sort {
    font-size: var(--font-s);
    --link-accent-color: var(--fg-color-lighter);
  }

  .end, .no-tips {
    background: var(--bg-color-dark);

    font-size: var(--font-s);
    font-style: italic;
    line-height: 1.8;
    text-align:  center;

    padding: var(--gap-l);
    margin-top: var(--gap-l);
  }

  .no-tips a {
    font-weight: bold;
    font-style: normal;
  }
</style>
