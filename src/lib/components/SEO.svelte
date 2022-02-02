<script>
  import { page } from '$app/stores'

  export let title
  export let description
</script>

<svelte:head>
  <meta property="og:title" content={title}>
  <meta property="og:description" content={description}>

  <meta name="twitter:card" content="summary">
  <meta name="twitter:image" content="{$page.url.origin}/twitter-summary.png">
</svelte:head>