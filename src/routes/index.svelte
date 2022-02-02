<script context="module">
  export async function load({ fetch }) {
    const res = await fetch('/api/generate')
    const data = await res.json()

    return {
      props: {
        ...data
      }
    }
  }
</script>

<script>
  import Tip from '$lib/components/Tip.svelte'
  import SEO from '$lib/components/SEO.svelte'

  export let text, url, hash
</script>

<svelte:head>
  <title>&ldquo;{text}&rdquo; &mdash; Nice Tips Bot</title>
</svelte:head>

<SEO 
  title="Nice Tips Bot"
  description="The nice robot has some advice for you..."
/>

<Tip 
  {text}
  {url}
  {hash}
/>
