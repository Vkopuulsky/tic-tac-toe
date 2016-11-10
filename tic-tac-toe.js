// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

function square(){
  var rectangle = document.createElementNS(namespace, "circle")
  rectangle.setAttribute("cx", 45)
  rectangle.setAttribute("cy",45)
  rectangle.setAttribute("r", 20
  rectangle.setAttribute("fill", "gray")
  rectangle.setAttribute("stroke", "gray")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(rectangle)
}
