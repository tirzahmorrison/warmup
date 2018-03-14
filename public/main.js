//As a user I want my background color to change everytime I refresh the page
//function randomColor() {
  //const x = Math.floor(Math.random() * 256);
  //const y = Math.floor(Math.random() * 256);
  //const z = Math.floor(Math.random() * 256);
  //const newColor = "rgb(" + x + "," + y + "," + z + ")";
//console.log(newColor);

  //document.body.style.background = newColor;
  //}

//randomColor();

let color = function randomColor() {
  let color = '#';
  for (var i = 0; i < 6; i++ ) {
      color = [Math.floor(Math.random() * 256)];
  }
  return color;
}

let newColor = document.body.style.backgroundColor;

setInterval(function() { 
   newColor = color;
}, 1000);
