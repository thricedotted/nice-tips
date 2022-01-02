<script context="module">
  export async function load({ fetch }) {
    const { id } = await fetch('/tips/random').then(x => x.json())

    return {
      status: 302,
      redirect: `/tips/${id}`
    }
  }
</script>