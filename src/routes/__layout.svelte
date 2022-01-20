<script>
  import '$lib/css/global.css'

  import Header from '$lib/layout/Header.svelte'
  import Nav from '$lib/layout/Nav.svelte'
  import Footer from '$lib/layout/Footer.svelte'
</script>

<div class="page">
  <Header />

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
