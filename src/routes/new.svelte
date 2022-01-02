<script context="module">
  export async function load({ fetch }) {
    return {
      status: 302,
      redirect: '/'
    }
  }
</script>