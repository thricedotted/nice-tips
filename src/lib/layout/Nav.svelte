<script>
  import { createEventDispatcher } from 'svelte'

  import { page } from '$app/stores'

  const dispatch = createEventDispatcher()
</script>

<nav>
  <ul>
    <li>
      <!-- see src/routes/index.svelte for why this click handler is here -->
      <a 
        class="generate"
        href="/"
        data-emoji-before="⚡"
        on:click={() => dispatch('generate')}
        >Get new Tip
      </a>
    </li>

    <li>
      <a 
        class="random"
        href="/random"
        data-emoji-before="🔀"
        >Jump to random Tip
      </a>
    </li>

    {#if $page.url.pathname !== '/tips'}
    <li>
      <a 
        class="all"
        href="/tips"
        data-emoji-before="📜"
        >Browse Tip archive
      </a>
    </li>
    {/if}

  </ul>
</nav>

<style>
  nav ul {
    font-size: var(--font-s);
    list-style: none;
    margin: var(--bigger-gap) 0;
    padding: 0;
  }

  nav ul li {
    margin-bottom: var(--big-gap);
  }

  .generate {
    font-weight: bold;
    --link-accent-color: gold;
  }

  .random {
    --link-accent-color: skyblue;
  }

  .all {
    --link-accent-color: burlywood;
  }
</style>