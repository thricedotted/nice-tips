<script context="module">
  import { normalizeParams } from './_util'

  export async function load() {
    const { month, year } = normalizeParams(new Date())

    return {
      status: 302,
      redirect: `/archive/${year}/${month}`
    }
  }
</script>
