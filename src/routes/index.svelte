<script context="module">
  export async function load({ fetch }) {
    const res = await fetch('/tips/generate')
    const data = await res.json()

    return {
      props: {
        ...data
      }
    }
  }
</script>

<script>
  import Layout from '$lib/layout/Layout.svelte'
  import Tip from '$lib/components/Tip.svelte'

  export let text, url, hash
</script>

<svelte:head>
  <title>&ldquo;{text}&rdquo; &mdash; Nice Tips Bot</title>
</svelte:head>

<Layout
  on:generate={async () => ({ props: { text, url, hash }} = await load({ fetch }))}
  >
  <div
    >
    <Tip 
      {text}
      {url}
      {hash}
    />
  </div>
</Layout>
