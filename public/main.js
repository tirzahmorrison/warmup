//As a user I want my background color to change every five seconds
function randomColor() {
  const r = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const newColor = "rgb(" + r + "," + b + "," + g + ")"
  console.log(newColor)

  document.body.style.background = newColor;
}

setInterval(randomColor, 5000)

randomColor()


