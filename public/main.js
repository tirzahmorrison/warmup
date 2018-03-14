function randomColor() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const newColor = "rgb(" + x + "," + y + "," + z + ")";
console.log(newColor);

  document.body.style.background = newColor;
  }

randomColor();
