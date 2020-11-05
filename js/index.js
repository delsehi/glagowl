/*
* The starting point of the application.
*
*/
'use strict'
const inputBox = document.getElementById('inputBox')
const result = document.getElementById('result')

inputBox.addEventListener('input', convert)

function convert(e) {
  if (map.has(e.data)) {
    console.log(map.get(e.data))
  }
  result.textContent = e.target.value
}

const map = new Map([
  ['a', 'A'], ['b', 'Bz'], ['c','DDDDX'], ['d','OK']
])
