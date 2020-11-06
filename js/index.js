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
  ['a', 'ⰰ'], ['b', 'ⰱ'], ['c','kk'], ['d','ⰴ'], ['', ''],['', ''],
  ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
  ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', '']
])
