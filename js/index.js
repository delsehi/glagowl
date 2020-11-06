/*
* The starting point of the application.
*
*/
'use strict'
const inputBox = document.getElementById('inputBox')
const result = document.getElementById('result')

inputBox.addEventListener('input', convert)

function convert(e) {
  const input = e.target.value
  const translation = getGlagolitic(input)
  result.textContent = translation
}

function getGlagolitic(input) {
  let newString = ""
  for (let i = 0; i < input.length; i++) {
    let oldLetter = input.charAt(i)
    const upperCase = isUpperCase(oldLetter)
    oldLetter = oldLetter.toLowerCase()
    if (map.has(oldLetter)) {
      const newLetter = map.get(oldLetter)
      if (upperCase) {
        newString += newLetter.toUpperCase()
      } else {
        newString += newLetter
      }
    } else {
      newString += input.charAt(i)
    }
  }
  return newString
}

function isUpperCase(char) {
  return char == char.toUpperCase() && char != char.toLowerCase()
}


const map = new Map([
  ['a', 'ⰰ'], ['b', 'ⰱ'], ['v','ⰲ'], ['g','ⰳ'], ['d', 'ⰴ'],['e', 'ⰵ'],
  ['ž', 'ⰶ'], ['dz', 'ⰷ'], ['z', 'ⰸ'], ['', 'ⰹ'], ['', 'ⰺ'], ['i', 'ⰻ'], ['đ', 'ⰼ'],
  ['k', 'ⰽ'], ['l', 'ⰾ'], ['m', 'ⰿ'], ['n', 'ⱀ'], ['o', 'ⱁ'], ['p', 'ⱂ'], ['', ''],
  ['r', 'ⱃ'], ['s', 'ⱄ'], ['t', 'ⱅ'], ['u', 'ⱆ'], ['f', 'ⱇ'], ['h', 'ⱈ'],
  ['', 'ⱉ'], ['p', 'ⱊ'], ['ć', 'ⱋ'], ['c', 'ⱌ'], ['č', 'ⱍ'], ['š', 'ⱎ'],
  ['', 'ⱏ'], ['', 'ⱐ'], ['', 'ⱑ'], ['', 'ⱒ'], ['', 'ⱓ'], ['', '']
])
