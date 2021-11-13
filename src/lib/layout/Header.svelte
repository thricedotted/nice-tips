<script>
  const headerChoices = [
    'says',
    'advises',
    'offers',
    'suggests',
    'proposes',
    'recommends',
    'urges',
    'insists'
  ]

  const headerVerb = headerChoices[Math.floor(Math.random() * headerChoices.length)]
</script>

<h1>The nice robot {headerVerb}...</h1>

<style>
  h1 {
    margin: var(--bigger-gap) 0 0 0;
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
</style>