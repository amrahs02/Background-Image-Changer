const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red', 'green', 'blue', 'yellow', ' purple', '#D3DC1E','#DC1E32' ,'#DC1E77', '#DC1EA2', '#DC1ED0', '#B11EDC' , '#8E1EDC', '#631EDC' , '#1E71DC' , '#1EDCA5', '#72DC1E' , '#FFC733' , '#BFDC1E']

body.style.backgroundColor = 'violet'

button.addEventListener('click', changeB)

function changeB(){
    const  colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}