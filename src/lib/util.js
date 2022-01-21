function choice(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function getHeaderVerb() {
  return choice([
    'says',
    'advises',
    'offers',
    'suggests',
    'proposes',
    'recommends',
    'urges',
    'insists'
  ])
}

export {
  choice,
  getHeaderVerb
}