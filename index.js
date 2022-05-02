function show(id) {
  let aaheight = window.innerHeight
  document.getElementById(id).style.display = 'block'
  aaheight -= document.querySelector('.title').offsetHeight
  document.getElementById(id).style.height = `${aaheight}px`
}
function currency() {
  alert('currency')
}
function press(button) {
  if (operators.indexOf(button) == -1) {
    add(button)
  }
  if (operators.indexOf(button) !== -1) {
    add(` ${button} `)
  }
}
function add(n) {
  integer += String(n)
  document.getElementById('output').innerHTML = integer
}

let integer = ''
let operators = ['*', '/', '+', '-']
