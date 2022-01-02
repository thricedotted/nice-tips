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
  import Tip from '$lib/components/Tip.svelte'

  export let text, url, hash
</script>

<svelte:head>
  <title>&ldquo;{text}&rdquo; &mdash; Nice Tips Bot</title>
</svelte:head>

<Tip 
  {text}
  {url}
  >
  <form 
    method="POST"
    action="/tips/save"
    >

    <input
      type="hidden"
      name="text"
      value={text}
    />

    <input
      type="hidden"
      name="url"
      value={url}
    />

    <input
      type="hidden"
      name="hash"
      value={hash}
    />

    <button 
      class="emoji-before"
      type="submit"
      >
      Save this Tip
    </button>
  </form>
</Tip>