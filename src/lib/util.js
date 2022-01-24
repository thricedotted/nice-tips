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

function monthYearToDate({ month = 1, year }) {
  let intMonth = parseInt(month)
  let intYear = parseInt(year)

  if (isNaN(intYear)) {
    throw Error(`${year} is not a number`)
  }

  else if (isNaN(intMonth)) {
    throw Error(`${month} is not a number`)
  }

  else if (intMonth < 1 || intMonth > 12) {
    throw Error(`${month} is not a valid month number`)
  }

  return new Date(intYear, intMonth - 1)
}

const dateRange = {
  startDate: new Date(2021, 10),
  endDate: new Date()
}

function monthYearToBoundedDate({ month = 1, year }) {
  try {
    const date = monthYearToDate({ month, year })

    if (date < dateRange.startDate) {
      return dateRange.startDate
    }

    else if (date > dateRange.endDate) {
      return dateRange.endDate
    }

    return date
  }
  catch {
    return dateRange.endDate
  }
}

export {
  choice,
  getHeaderVerb,
  wikihowUrlToTitle,
  tsToLocaleString,
  monthYearToDate,
  dateRange,
  monthYearToBoundedDate
}