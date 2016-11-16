// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var topLeftClicked = 0
function square(){
  if(topLeftClicked == 0)
  var rectangle = document.createElementNS(namespace, "circle")
  rectangle.setAttribute("cx", "65")
  rectangle.setAttribute("cy","70")
  rectangle.setAttribute("r", "20")
  rectangle.setAttribute("fill", "gray")
  rectangle.setAttribute("stroke", "gray")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(rectangle)
  topLeftClicked = 1
}
var topLeftClickd = 0
function square2(){
  if(topLeftClickd == 0)
  var rectangle = document.createElementNS(namespace, "circle")
  rectangle.setAttribute("cx", "155")
  rectangle.setAttribute("cy","70")
  rectangle.setAttribute("r", "20")
  rectangle.setAttribute("fill", "blue")
  rectangle.setAttribute("stroke", "blue")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(rectangle)
  topLeftClickd = 1
}
var topLeftClicker = 0
function square3(){
  if(topLeftClicker == 0)
  var rectangle = document.createElementNS(namespace, "circle")
  rectangle.setAttribute("cx", "245")
  rectangle.setAttribute("cy","70")
  rectangle.setAttribute("r", "20")
  rectangle.setAttribute("fill", "red")
  rectangle.setAttribute("stroke", "red")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(rectangle)
  topLeftClicker = 1
}
