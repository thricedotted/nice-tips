<script context="module">
  export async function load({ fetch, session }) {
    // Q: WHY r u destructuring session and not using it
    //
    // A: Well uhhh it is My Little Hack(tm) for getting
    // the SvelteKit router to run this function again (i.e. 
    // fetch a new generated tip) and hydrate the homepage with
    // it even when you're already on the homepage. Otherwise,
    // the router is like, "You are already here" and does not
    // do anything if you click "Get new Tip". 
    // 
    // The way I got around it before was by using `rel="external"` 
    // on the "Get new Tip" link and then routing to an endpoint
    // that redirected back here... it's just kinda silly.
    //
    // Anyway, the other half of the dirty trick is in Nav.svelte.

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

<Layout>
  <Tip 
    {text}
    {url}
    {hash}
  />
</Layout>
