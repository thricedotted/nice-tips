<script context="module">
  export async function load({ params }) {
    const { year } = params
    return {
      status: 301,
      redirect: `/archive/${year}/01`
    }
  }
</script>