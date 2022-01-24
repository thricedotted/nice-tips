<footer>
  <details>
    <summary class="link-button" data-emoji-before="ℹ️">About the nice robot</summary>

    <dl>
      <dt>What's this now?</dt>
      <dd>Nice Tips Bot is a web app rewrite of <a href="https://twitter.com/nice_tips_bot">@nice_tips_bot</a>. When you visit the bot, it... 
        <ul>
          <li>scrapes a "tip" or "warning" from a <a href="https://www.wikihow.com/Special:Randomizer">random wikiHow article</a>,</li>
          <li>slots it into a randomized template, and</li>
          <li>presents the tip for your consideration!</li>
        </ul>
      </dd>

      <dt>What's the tech?</dt>
      <dd>This site is built with <a href="https://kit.svelte.dev">SvelteKit</a> and deployed on <a href="https://vercel.com">Vercel</a>. Saved tips are stored in <a href="https://fauna.com">Fauna DB</a>. If you're interested, you can take a look at the code on <a href="https://github.com/thricedotted/nice-tips">GitHub</a>.</dd>

      <dt>Who made this?</dt>
      <dd>
        Me! I'm li zi, aka <a href="https://twitter.com/thricedotted">@thricedotted</a>. 
        <!-- If you like Nice Tips Bot, check out some of my other generative text toys. -->
      </dd>
    </dl>

  </details>
</footer>

<style>
  footer {
    border-top: 0.1rem solid var(--fg-color-lighter);

    font-size: var(--font-xs);
    /* color: var(--fg-color-light); */
  }

  details {
    margin: var(--bigger-gap) 0;
  }

  summary {
    --link-accent-color: #ccc;
  }

  dt {
    font-weight: bold;
    margin-top: var(--big-gap);
    margin-bottom: var(--shim);
  }

  dd {
    margin-left: 0;
    line-height: 1.6;
  }

  ul {
    padding-left: 0;
    list-style-position: inside;
  }

  a {
    box-shadow: none;
    text-decoration: underline;
  }
</style>