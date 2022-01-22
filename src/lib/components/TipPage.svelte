<script>
  import ArchiveTip from '$lib/components/ArchiveTip.svelte'

  export let tips
</script>

{#each tips as { text, ts, url, ref } (ref)}
  <ArchiveTip
    {text}
    {ts}
    {url}
    {ref}
  />
{/each}