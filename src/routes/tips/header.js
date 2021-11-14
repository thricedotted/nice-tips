export async function get() {
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

  return {
    body: headerChoices[Math.floor(Math.random() * headerChoices.length)]
  }
}