function normalizeParams(date) {
  return {
    month: date.toLocaleString([], { month: '2-digit' }),
    year: `${date.getFullYear()}`
  }
}

export {
  normalizeParams
}