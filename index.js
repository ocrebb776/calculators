function show(id) {
  let aaheight = window.innerHeight
  document.getElementById(id).style.display = 'block'
  aaheight -= document.querySelector('.title').Height
  document.getElementById(id).style.maxheight = `${aaheight}px`
  document.getElementById('SEL').style.display = `none`
}
function currency() {
  alert('currency')
}
function press(button) {
  if (ans != '') {
    integer += ans
    ans = ''
  }
  if (button === '(-)') {
    add('-')
  } else if (operators.indexOf(button) == -1) {
    add(button)
  } else if (operators.indexOf(button) !== -1) {
    add(button)
  }
}
let rate = 0
let start = 0
let time = 0
let ans = ''
function add(n) {
  integer += String(n)
  document.getElementById('output').innerHTML = integer
}
function final(text) {
  if (integer != '') {
    integer = '0'
  }
  console.log(text)
  text = rep(text)
  ans = Obj.exec(text)
  console.log(text)
  if (ans != 'ERROR') {
    document.getElementById('output').innerHTML = ans
  } else {
    document.getElementById('output').innerHTML = "t'was an error ( ‘ o ‘ )"
  }
  integer = ''
  ans = String(ans)
}
function back() {
  integer = integer.slice(0, integer.length - 2)
  document.getElementById('output').innerHTML = integer
}
function checkcu() {
  alert('x')
}
let x = '/a/g'
let integer = ''
let operators = [' + ', ' ÷ ', ' X ', ' - ']
let finala = 0
let ter = ''
go = function (forw) {
  if (forw) {
    document.getElementById('fx').style.display = 'none'
    document.getElementById('h1').style.display = 'none'
    document.getElementById('calc').style.display = 'none'
    document.getElementById('rest').style.display = 'block'
    var form = document.getElementById('fx')
    rate = form.elements['rate'].value
    start = form.elements['value'].value
    time = form.elements['time'].value
    for (let qwe = 0; qwe <= time; qwe++) {
      finala = start * (1 + rate / 100) ** qwe
      ter += `<tr><td>${String(Math.round(qwe))}</td><td>${String(
        Math.round((finala + Number.EPSILON) * 100) / 100,
      )}</td></tr>`
    }
    var asd = '<tr><th><b>Time</th><th>Balence(£)</th></tr></b>'
    ter = asd + ter

    document.getElementById('insert-qw').innerHTML = ter
  } else {
    document.getElementById('fx').style.display = 'grid'
    document.getElementById('h1').style.display = 'block'
    document.getElementById('calc').style.display = 'block'
    document.getElementById('rest').style.display = 'none'
  }
}
