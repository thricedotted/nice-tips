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
        maxage: 86400 // one day
      }
    }

    return {
      status: 500
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
