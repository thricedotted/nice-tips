<script>
  export let ref = undefined
  export let hash = undefined
  export let ts = Date.now() * 1000
  export let text, url 

  $: wikihowTitle = `How to ${decodeURI(url).split('/').pop().replace(/-/g, ' ')}`
</script>

<div class="tip">
  <p>{text}</p>

  <div class="source">
    <a 
      href="{url}"
      title="Open the source article &ldquo;{wikihowTitle}&rdquo; on wikiHow"
      target="_blank"
      data-emoji-before="📖"
      >{wikihowTitle}
    </a>
  </div>

  <div class="ref">
    {#if ref}
    <a 
      href="/tips/{ref}"
      title="Saved on {new Date(ts / 1000).toLocaleString()}"
      data-emoji-before="🔗"
      >Link to this Tip
    </a>
    {:else}
      <form 
        method="POST"
        action="/tips/save"
        >

        <input
          type="hidden"
          name="text"
          value={text}
        />

        <input
          type="hidden"
          name="url"
          value={url}
        />

        <input
          type="hidden"
          name="hash"
          value={hash}
        />

        <button 
          type="submit"
          data-emoji-before="💖"
          >
          Save this Tip
        </button>
      </form>
    {/if}
  </div>
</div>

<style>
  .tip {
    padding: var(--big-gap) 0 var(--bigger-gap) 0;
    border-bottom: 0.1rem solid var(--fg-color-lighter);
  }

  .tip p {
    margin: 0;
    line-height: 1.6;
    letter-spacing: -0.03em;
  }

  .source {
    margin-top: calc(var(--gap) + var(--shim));
    font-size: var(--font-s);
    font-style: italic;
    color: var(--fg-color-light);
    --emoji: ;
  }

  .source a {
    box-shadow: inset 0 0 var(--fg-color-lighter);
    transition: none;
  }

  .source a:hover {
    box-shadow: inset 0 -0.15em var(--fg-color-lighter);
  }

  .ref {
    margin-top: var(--bigger-gap);
    font-size: var(--font-s);
    font-weight: bold;
    color: var(--fg-color);
  }

  .ref button {
    --link-accent-color: pink;
  }

  .ref a {
    --link-accent-color: gainsboro;
  }
</style>