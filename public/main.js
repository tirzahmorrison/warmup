//As a user I want my background color to change everytime I refresh the page
function randomColor() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const newColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(newColor);

  document.body.style.background = newColor;
}




