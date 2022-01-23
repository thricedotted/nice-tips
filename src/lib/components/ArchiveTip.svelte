<script>
  import { wikihowUrlToTitle, tsToLocaleString } from '$lib/util'

  export let ref
  export let ts
  export let text, url 

  $: wikihowTitle = wikihowUrlToTitle(url)
  $: savedAt = tsToLocaleString(ts)
</script>

<div class="tip">
  <p>
    <a 
      href="/tips/{ref}"
      title="Permalink to this Tip"
      data-emoji-after="🔗"
      >      
      {text} 
    </a>
  </p>

  <div class="meta">
    <div 
      class="source"
      data-emoji-before="📖"
      >
      <span>
        <a 
          href="{url}"
          title="Open the source article &ldquo;{wikihowTitle}&rdquo; on wikiHow"
          target="_blank"
          >{wikihowTitle}
        </a>
      </span>
    </div>

    <time 
      data-emoji-before="📆"
      datetime={new Date(ts / 1000).toISOString()}
      >
      {savedAt}
    </time>
  </div>
</div>

<style>
  .tip {
    padding: var(--big-gap) 0 var(--bigger-gap) 0;
    border-bottom: 0.1rem solid var(--fg-color-lighter);

    position: relative;
    margin: auto;
    max-width: 80ch;

    display: grid;
    align-items: baseline;
    gap: var(--gap);

  }

  .tip p {
    margin: 0;
    line-height: 1.6;
    max-width: 48ch;
    font-size: var(--font-m);
  }

  .tip a {
    box-shadow: none;
  }

  .tip a[data-emoji-after]::after {
    visibility: hidden;
  }

  .tip a[data-emoji-after]:hover::after,
  .tip a[data-emoji-after]:focus::after {
    visibility: visible;
  }

  .meta {
    font-size: var(--font-s);
    font-style: italic;
    color: var(--fg-color-light);
  }

  time {
    display: block;
    margin-top: var(--gap);
    cursor: default;
    font-size: var(--font-xs);
  }

  .source {
    display: flex;
    align-items: baseline;
  }

  .source a {
    box-shadow: inset 0 0 var(--fg-color-lighter);
    transition: none;
  }

  .source a:hover {
    box-shadow: inset 0 -0.15em var(--fg-color-lighter);
  }

  @media (min-width: 80ch) {
    .tip {
      grid-template-columns: 2fr 1fr;
      gap: var(--bigger-gap);
    }

    .meta {
      font-size: var(--font-xs);
    }
  }

</style>