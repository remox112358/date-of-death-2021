/**
 * Sleep async function.
 * 
 * @param {Number} ms 
 */
export const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Generates random string.
 *
 * @param {number} length - Length of generated string
 * @returns {string}
 */
export const generateRandomString = (length = 12) => {
  let result = []
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

  for (let i = 1; i <= length; i++) {
    result = [...result, chars.charAt(Math.floor(Math.random() * chars.length))]
  }

  return result.join('')
}

/**
 * Returns days for select component.
 *  
 * @param {Number} month 
 * @param {Number} year 
 * @returns {Array}
 */
export const getDaysOptions = (month = 1, year = new Date().getFullYear()) => {
  const daysCount = new Date(year, month, 0).getDate() 
  
  let options = []

  for (let i = 1; i <= daysCount; i++) {
    options.push({
      text: i < 10 ? '0' + i: String(i),
      value: i,
    })
  }

  return options
}

/**
 * Returns months for select component.
 * 
 * @returns {Array}
 */
export const getMonthsOptions = () => {
  let options = []

  for (let i = 1; i <= 12; i++) {
    options.push({
      text: i < 10 ? '0' + i : String(i),
      value: i,
    })
  }

  return options
}

/**
 * Returns years for select component.
 */
export const getYearsOptions = () => {
  const currentYear = new Date().getFullYear()

  let options = []

  for (let i = currentYear; i >= currentYear - 99; i--) {
    options.push({
      text: String(i),
      value: i,
    })
  }

  return options
}

/**
 * Determines that day is exist in month.
 * 
 * @param {Number} day 
 * @param {Number} month
 * @param {Number} year
 * @returns {Boolean} 
 */
export const dayExistInMonth = (day, month, year) => {
  return day < getDaysOptions(month, year).length
}

/**
 * Returns tomorrow date.
 */
export const getTomorrowDate = () => {
  const tomorrow = new Date()

  tomorrow.setDate(tomorrow.getDate() + 1)

  const tomorrowYear  = tomorrow.getFullYear()
  const tomorrowDay   = tomorrow.getDate() < 10 ? '0' + tomorrow.getDate() : tomorrow.getDate()
  const tomorrowMonth = tomorrow.getMonth() + 1 < 10 ? '0' + (tomorrow.getMonth() + 1) : tomorrow.getMonth() + 1 

  return `${tomorrowDay}.${tomorrowMonth}.${tomorrowYear}`
}