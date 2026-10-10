export function isLeapYear(year) {
  if (Number.isInteger(year / 4) || year % 400 == 0) {
    return true
  }
  else {
    return false
  }
}