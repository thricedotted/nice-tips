<script>
  import { invalidate } from '$app/navigation'
  import { session } from '$app/stores'
</script>

<h1>
  <a 
    href="/" 
    on:click={() => invalidate('/api/generate')}
    >
    The nice robot {$session.headerVerb}...
  </a>
</h1>

<style>
  h1 {
    margin: var(--gap-xl) 0 0 0;
    font-size: var(--font-s);
    color: var(--fg-color-light);
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  h1::before {
    content: '🤖';
    padding-right: var(--gap);
  }

  a, a:hover, a:focus {
    box-shadow: inset 0 0 var(--fg-color-lighter);
    transition: none;
  }

  a:hover, a:focus {
    box-shadow: inset 0 -0.15em var(--fg-color-lighter);
  }
</style>