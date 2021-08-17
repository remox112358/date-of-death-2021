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
export const getDaysOptions = (month, year) => {
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

  for (let i = currentYear - 99; i <= currentYear; i++) {
    options.push({
      text: String(i),
      value: i,
    })
  }

  return options
}