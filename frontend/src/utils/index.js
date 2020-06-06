import camelCase from 'camelcase'
import memoizeOne from 'memoize-one'

export const head = ([first]) => first

export const tail = ([...arr]) => arr.pop()

export const isString = str => typeof str === 'string' || str instanceof String

export const isArray = obj => Array.isArray(obj)

export const isObject = obj =>
  obj && typeof obj === 'object' && obj.constructor === Object

export const isEmpty = obj => {
  if (isArray(obj)) return !obj.length
  if (isObject(obj)) return !Object.keys(obj).length
  return false
}

export const isFunction = fn => typeof fn === 'function'

export const isNumber = num => typeof num === 'number' && Number.isFinite(num)

export const isUndefined = undef => typeof undef === 'undefined'

export const capitalize = str =>
  isString(str) ? str[0].toUpperCase() + str.substring(1) : ''

export const sortBy = (arr, key) => {
  return [...arr].sort((a, b) => {
    if (isString(a[key])) {
      return a[key].localeCompare(b[key])
    }
    if (a[key] > b[key]) return 1
    if (b[key] > a[key]) return -1
    return 0
  })
}

export function capitalizeAll(arr) {
  return arr.map(capitalize).join(' ').trim()
}

const memoizedCapitalizeAll = memoizeOne(capitalizeAll)

export function parseHeader(val) {
  if (isString(val) && !isNumber(Number(val))) {
    const toCamelCase = camelCase(val)
    const parser = /^[a-z]+|[A-Z][a-z]*/g
    return memoizedCapitalizeAll(toCamelCase.match(parser))
  }
  return ''
}

export function getSelectedValue(options, fieldValue) {
  let selectedValue
  if (options.length && isString(options[0].value)) {
    selectedValue = options.find(({value}) => value === fieldValue)
  } else {
    selectedValue = options.find(({value}) => +value === +fieldValue)
  }
  return selectedValue || null
}
