//As a user I want my background color to change every two seconds
const randomColor = () => {
  const r = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const newColor = "rgb(" + r + "," + b + "," + g + ")"
  console.log(newColor)

  document.body.style.background = newColor;
}

setInterval(randomColor, 2000)

randomColor()


