<script>
  import Tip from '$lib/components/Tip.svelte'

  export let docs
</script>

{#each docs as { text, ts, url, ref } (ref)}
  <Tip
    {text}
    {ts}
    {url}
    {ref}
  />
{/each}