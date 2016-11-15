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
var topLeftClicked = 0
function square1(){
  if(topLeftClicked == 0)
  var rectangle = document.createElementNS(namespace, "circle")
  rectangle.setAttribute("cx", "105")
  rectangle.setAttribute("cy","70")
  rectangle.setAttribute("r", "20")
  rectangle.setAttribute("fill", "gray")
  rectangle.setAttribute("stroke", "gray")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(rectangle)
  topLeftClicked = 1
}
