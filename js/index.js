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
  if (map.has(e.data)) {
    console.log(map.get(e.data))
  }
  result.textContent = translation
}

function getGlagolitic(input) {
  console.log(input)
  let newString = ""
  for (let i = 0; i < input.length; i++) {
    if (map.has(input.charAt(i))) {
      newString += map.get(input.charAt(i))

    } else {
      newString += input.charAt(i)
    }
  }
  return newString
}


const map = new Map([
  ['a', 'A'], ['b', 'Bz'], ['c','DDDDX'], ['d','OK']
])
