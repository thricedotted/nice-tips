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

  export let text, url, hash
</script>

<svelte:head>
  <title>&ldquo;{text}&rdquo; &mdash; Nice Tips Bot</title>

  <meta property="og:title" content="Nice Tips Bot">
  <meta property="og:description" content="The nice robot has some advice for you...">
</svelte:head>

<Tip 
  {text}
  {url}
  {hash}
/>
