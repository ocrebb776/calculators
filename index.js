function show(id) {
  let aaheight = window.innerHeight
  document.getElementById(id).style.display = 'block'
  aaheight -= document.querySelector('.title').offsetHeight
  alert(aaheight)
  document.getElementById(id).style.maxheight = `${aaheight}px`
  document.getElementById('SEL').style.display = `none`
}
function currency() {
  alert('currency')
}
function press(button) {
  if (button === '(-)') {
    add('-')
  } else if (operators.indexOf(button) == -1) {
    add(button)
  } else if (operators.indexOf(button) !== -1) {
    add(button)
  }
}

function add(n) {
  integer += String(n)
  document.getElementById('output').innerHTML = rep()
}
function final(text) {
  if (integer != '') {
    integer = '0'
  }
  ans = Obj.exec(text)
  if (ans != 'ERROR') {
    document.getElementById('output').innerHTML = ans
  } else {
    document.getElementById('output').innerHTML = "t'was an error ( ‘ o ‘ )"
  }
  integer = ''
}
function back() {
  integer = integer.slice(0, integer.length - 2)
  document.getElementById('output').innerHTML = integer
}
function checkcu() {
  alert('x')
  return true
}
let x = '/a/g'
let integer = ''
let operators = ['*', '/', '+', '-']
