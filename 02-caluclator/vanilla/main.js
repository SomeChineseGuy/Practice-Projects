let space = [];
document.addEventListener('click', (e) => {
  const calucalatorResults = document.querySelector('.calculator-screen');
  if(e.target.nodeName === "BUTTON") {
    let buttonPress = e.target.getAttribute('data-button-type');
    space.push(buttonPress);
    console.log(space);
    let display = space.join('');
    calucalatorResults.innerHTML = display;
  }
})