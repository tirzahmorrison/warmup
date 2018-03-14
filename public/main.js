//As a user I want my background color to change everytime I refresh the page
function randomColor() {
  const r = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const newColor = "rgb(" + r + "," + b + "," + g + ")"
  console.log(newColor)

  document.body.style.background = newColor;
}

randomColor()

setInterval(randomColor, 5000)
