<script>
  import '$lib/css/global.css'

  import { Header, Nav, Footer } from '$lib/layout'
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
