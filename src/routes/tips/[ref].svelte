<script context="module">
  export async function load({ fetch, params }) {
    const { ref } = params

    const res = await fetch(`/api/${ref}`)

    if (res.ok) {
      const data = await res.json()

      return {
        props: {
          ...data
        },
        cache: {
          maxage: 604800
        }
      }
    }

    return {
      status: 500
    }
  }
</script>

<script>
  import Tip from '$lib/components/Tip.svelte'
  import SEO from '$lib/components/SEO.svelte'

  export let ref, text, ts, url
</script>

<svelte:head>
  <title>&ldquo;{text}&rdquo; &mdash; Nice Tips Bot</title>
</svelte:head>

<SEO 
  title="Nice Tips Bot"
  description={text}
/>

<Tip 
  {ref}
  {text}
  {ts}
  {url}
/>
