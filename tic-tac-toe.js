// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var whosTurn = "Player1"
var topLeftClicked = 0
function square(){
  if(topLeftClicked == 0){
if(whosTurn == "Player1"){


  var rectangle = document.createElementNS(namespace, "circle")
  rectangle.setAttribute("cx", "65")
  rectangle.setAttribute("cy","70")
  rectangle.setAttribute("r", "20")
  rectangle.setAttribute("fill", "gray")
  rectangle.setAttribute("stroke", "gray")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(rectangle)
  topLeftClicked = 1
  whosTurn = "player2"
}else{
  var circle = document.createElementNS(namespace, "rect")
  circle.setAttribute("x", "50")
  circle.setAttribute("y", "58")
  circle.setAttribute("width", "30")
  circle.setAttribute("height", "30")
  circle.setAttribute("fill", "red")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  topLeftClicked = 1
  whosTurn = "Player1"
}
}
}

var topLeftClickd = 0
function square2(){
  if(topLeftClickd == 0){
    if(whosTurn == "Player1"){
  var rectangle = document.createElementNS(namespace, "circle")
  rectangle.setAttribute("cx", "155")
  rectangle.setAttribute("cy","70")
  rectangle.setAttribute("r", "20")
  rectangle.setAttribute("fill", "blue")
  rectangle.setAttribute("stroke", "blue")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(rectangle)
  topLeftClickd = 1
  whosTurn = "player2"
}else{
  var circle = document.createElementNS(namespace, "rect")
  circle.setAttribute("x", "135")
  circle.setAttribute("y", "60")
  circle.setAttribute("width", "30")
  circle.setAttribute("height", "30")
  circle.setAttribute("fill", "red")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  topLeftClickd = 1
  whosTurn = "Player1"
}
}
}

var topLeftClicker = 0
function square3(){
  if(topLeftClicker == 0){
    if(whosTurn == "Player1"){
  var rectangle = document.createElementNS(namespace, "circle")
  rectangle.setAttribute("cx", "245")
  rectangle.setAttribute("cy","70")
  rectangle.setAttribute("r", "20")
  rectangle.setAttribute("fill", "red")
  rectangle.setAttribute("stroke", "red")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(rectangle)
  topLeftClicker = 1
  turn = "player2"
}else{
  var circle = document.createElementNS(namespace, "rect")
  circle.setAttribute("x", "230")
  circle.setAttribute("y", "55")
  circle.setAttribute("width", "30")
  circle.setAttribute("height", "30")
  circle.setAttribute("fill", "red")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  topLeftClicker = 1
  turn = "Player1"
}
}
}
var topLeftClicken = 0
function square4(){
  if(topLeftClicken == 0){
    if(whosTurn == "Player1"){
var rectangle = document.createElementNS(namespace, "circle")
rectangle.setAttribute("cx", "65")
rectangle.setAttribute("cy","155")
rectangle.setAttribute("r", "20")
rectangle.setAttribute("fill", "gray")
rectangle.setAttribute("stroke", "gray")
var canvas = document.getElementById("game-board")
canvas.appendChild(rectangle)
topLeftClicken = 1
whosTurn = "player2"
}else{
var circle = document.createElementNS(namespace, "rect")
circle.setAttribute("x", "50")
circle.setAttribute("y", "145")
circle.setAttribute("width", "30")
circle.setAttribute("height", "30")
circle.setAttribute("fill", "red")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
topLeftClicken = 1
whosTurn = "Player1"
}
}
}

var topLeftClickeded = 0
function square5(){
  if(topLeftClickeded == 0){
    if(whosTurn == "Player1"){
var rectangle = document.createElementNS(namespace, "circle")
rectangle.setAttribute("cx", "155")
rectangle.setAttribute("cy","155")
rectangle.setAttribute("r", "20")
rectangle.setAttribute("fill", "gray")
rectangle.setAttribute("stroke", "gray")
var canvas = document.getElementById("game-board")
canvas.appendChild(rectangle)
topLeftClickeded = 1
whosTurn = "player2"
}else{
var circle = document.createElementNS(namespace, "rect")
circle.setAttribute("x", "140")
circle.setAttribute("y", "145")
circle.setAttribute("width", "30")
circle.setAttribute("height", "30")
circle.setAttribute("fill", "red")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
topLeftClickeded = 1
whosTurn = "Player1"
}
}
}

var topLeftClickede = 0
function square6(){
  if(topLeftClickede == 0){
    if(whosTurn == "Player1"){
var rectangle = document.createElementNS(namespace, "circle")
rectangle.setAttribute("cx", "245")
rectangle.setAttribute("cy","155")
rectangle.setAttribute("r", "20")
rectangle.setAttribute("fill", "gray")
rectangle.setAttribute("stroke", "gray")
var canvas = document.getElementById("game-board")
canvas.appendChild(rectangle)
topLeftClickede = 1
whosTurn = "player2"
}else{
var circle = document.createElementNS(namespace, "rect")
circle.setAttribute("x", "230")
circle.setAttribute("y", "145")
circle.setAttribute("width", "30")
circle.setAttribute("height", "30")
circle.setAttribute("fill", "red")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
topLeftClickede = 1
whosTurn = "Player1"
}
}
}

var topLeftClickeder = 0
function square6(){
  if(topLeftClickeder == 0){
    if(whosTurn == "Player1"){
var rectangle = document.createElementNS(namespace, "circle")
rectangle.setAttribute("cx", "245")
rectangle.setAttribute("cy","155")
rectangle.setAttribute("r", "20")
rectangle.setAttribute("fill", "gray")
rectangle.setAttribute("stroke", "gray")
var canvas = document.getElementById("game-board")
canvas.appendChild(rectangle)
topLeftClickeder = 1
whosTurn = "player2"
}else{
var circle = document.createElementNS(namespace, "rect")
circle.setAttribute("x", "230")
circle.setAttribute("y", "145")
circle.setAttribute("width", "30")
circle.setAttribute("height", "30")
circle.setAttribute("fill", "red")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
topLeftClickeder = 1
whosTurn = "Player1"
}
}
}
