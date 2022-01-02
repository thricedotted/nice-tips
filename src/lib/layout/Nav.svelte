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
        >Get new Tip
      </a>
    </li>

    <li>
      <a 
        class="emoji-before random"
        href="/random"
        >Jump to random Tip
      </a>
    </li>

    {#if $page.path !== '/tips'}
    <li>
      <a 
        class="emoji-before all"
        href="/tips"
        >See all Tips
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

  .emoji-before.generate {
    font-weight: bold;
    --emoji: '⚡';
    --link-accent-color: gold;
  }

  .emoji-before.random {
    --emoji: '🔀';
    --link-accent-color: skyblue;
  }

  .emoji-before.all {
    --emoji: '📜';
    --link-accent-color: burlywood;
  }
</style>