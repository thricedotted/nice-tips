<script>
  import Header from '$lib/layout/Header.svelte'
  import Nav from '$lib/layout/Nav.svelte'
  import Footer from '$lib/layout/Footer.svelte'

  export let wide = false
</script>

<div class="page" class:wide>
  <Header on:generate />

  <main>
    <slot></slot>
  </main>

  <Nav on:generate />

  <Footer />
</div>

<style>
  .page {
    position: relative;
    margin: auto;

    font-size: var(--font-l);
    max-width: 40ch;
  }

  .wide {
    max-width: 60ch;
  }
</style>
