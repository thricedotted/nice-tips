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

function wikihowUrlToTitle(url) {
  return `How to ${decodeURI(url).split('/').pop().replace(/-/g, ' ')}`
}

function tsToLocaleString(ts) {
  return new Date(ts / 1000).toLocaleString([], {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  })
}

export {
  choice,
  getHeaderVerb,
  wikihowUrlToTitle,
  tsToLocaleString
}