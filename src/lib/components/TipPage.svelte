<script>
  import ArchiveTip from '$lib/components/ArchiveTip.svelte'

  export let docs
</script>

{#each docs as { text, ts, url, ref } (ref)}
  <ArchiveTip
    {text}
    {ts}
    {url}
    {ref}
  />
{/each}