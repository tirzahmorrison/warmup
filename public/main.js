(function () {
  const result = '#', i = 0;
  while (i < 6) {
  result += (Math.floor(Math.random()*16)).toString(16);
  i++;
  }
  document.body.style.background = result;
  })();