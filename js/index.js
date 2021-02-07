/*
* The starting point of the application.
*
*/
'use strict'
const result = document.getElementById('result')

result.addEventListener('input', convert)

function convert(e) {
  const input = e.target.value
  console.log(input)
  const translation = getGlagolitic(input)
  console.log(translation)
  result.value = translation
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

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
  .then((reg) => {
    console.log('Registered. Scope: ' + reg.scope)
  }).catch((error) => {
    console.log("Registration of service worker failed." + error)
  })
}


const map = new Map([
  ['a', 'ⰰ'], ['b', 'ⰱ'], ['v','ⰲ'], ['g','ⰳ'], ['d', 'ⰴ'],['e', 'ⰵ'],
  ['ž', 'ⰶ'], ['dz', 'ⰷ'], ['z', 'ⰸ'], ['', 'ⰹ'], ['', 'ⰺ'], ['i', 'ⰻ'], ['đ', 'ⰼ'],
  ['k', 'ⰽ'], ['l', 'ⰾ'], ['m', 'ⰿ'], ['n', 'ⱀ'], ['o', 'ⱁ'], ['p', 'ⱂ'], ['', ''],
  ['r', 'ⱃ'], ['s', 'ⱄ'], ['t', 'ⱅ'], ['u', 'ⱆ'], ['f', 'ⱇ'], ['h', 'ⱈ'],
  ['', 'ⱉ'], ['p', 'ⱊ'], ['ć', 'ⱋ'], ['c', 'ⱌ'], ['č', 'ⱍ'], ['š', 'ⱎ'],
  ['', 'ⱏ'], ['', 'ⱐ'], ['', 'ⱑ'], ['', 'ⱒ'], ['', 'ⱓ'], ['j', 'ⰼ']
])
