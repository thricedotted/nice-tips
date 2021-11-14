<script context="module">
  export async function load({ fetch }) {
    const res = await fetch('/tips/header')

    return {
      props: { headerVerb: await res.text() }
    }
  }
</script>

<script>
  import Header from '$lib/layout/Header.svelte'
  import Nav from '$lib/layout/Nav.svelte'
  import Footer from '$lib/layout/Footer.svelte'

  export let headerVerb
</script>

<div class="page">
  <Header {headerVerb} />

  <main>
    <slot></slot>
  </main>

  <Nav />

  <Footer />
</div>

<style>
  .page {
    position: relative;
    margin: auto;

    font-size: var(--font-l);
    max-width: 40ch;
  }

</style>