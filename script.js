//your JS code here. If required.
let counter = document.getElementById('counter')
let increment = document.getElementById('incrementBtn')

let value = Number(counter.innerHTML)

increment.addEventListener('click', () =>{
	alert(value)
	value++
	counter.innerHTML = value
})
