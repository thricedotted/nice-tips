export function getSession() {
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
    headerVerb: headerChoices[Math.floor(Math.random() * headerChoices.length)]
  } 
}