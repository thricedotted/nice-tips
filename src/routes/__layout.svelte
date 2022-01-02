<script context="module">
  export async function load() {

    const headerChoices = [
      'says',
      'advises',
      'offers',
      'suggests',
      'proposes',
      'recommends',
      'urges',
      'insists'
    ]

    const headerVerb = headerChoices[Math.floor(Math.random() * headerChoices.length)]

    return {
      props: { headerVerb }
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