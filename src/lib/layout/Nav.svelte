<script>
  import { invalidate } from '$app/navigation'
  import { page } from '$app/stores'
</script>

<nav>
  <ul>
    <li>
      <a 
        class="generate"
        href="/"
        data-emoji-before="⚡"
        on:click={() => invalidate('/api/generate')}
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

    <li>
      <a 
        class="all"
        href="/archive"
        data-emoji-before="📜"
        >Browse Tip archive
      </a>
    </li>

  </ul>
</nav>

<style>
  nav ul {
    font-size: var(--font-s);
    list-style: none;
    margin: var(--gap-xl) 0;
    padding: 0;
  }

  nav ul li {
    margin-bottom: var(--gap-l);
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