<script>
  import { page } from '$app/stores'
</script>

<nav>
  <ul>
    <li>
      <a 
        class="emoji-before generate"
        href="/new"
        rel="external"
        data-emoji-before="⚡"
        >Get new Tip
      </a>
    </li>

    <li>
      <a 
        class="emoji-before random"
        href="/random"
        data-emoji-before="🔀"
        >Jump to random Tip
      </a>
    </li>

    {#if $page.url.pathname !== '/tips'}
    <li>
      <a 
        class="emoji-before all"
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