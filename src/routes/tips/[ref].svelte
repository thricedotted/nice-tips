<script context="module">
  export async function load({ fetch, page }) {
    const { params } = page
    const { ref } = params

    const res = await fetch(`/tips/${ref}.json`)

    if (res.ok) {
      const data = await res.json()

      return {
        props: {
          ...data
        },
        maxage: 60 * 60 * 24 * 30
      }
    }
  }
</script>

<script>
  import Tip from '$lib/components/Tip.svelte'

  export let ref, text, ts, url
</script>

<svelte:head>
  <title>&ldquo;{text}&rdquo; &mdash; Nice Tips Bot</title>
</svelte:head>

<Tip 
  {ref}
  {text}
  {ts}
  {url}
/>