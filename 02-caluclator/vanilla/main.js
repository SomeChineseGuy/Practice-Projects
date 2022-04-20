let space = [];
document.addEventListener('click', (e) => {
  const calucalatorResults = document.querySelector('.calculator-screen');
  let buttonPress = e.target.getAttribute('data-button-type');
  if(e.target.nodeName === "BUTTON") {
    let isCalculateButton = e.target.getAttribute('data-is-calc');
    if(!isCalculateButton) {
      space.push(buttonPress);
      console.log(space);
      let display = space.join('');
      calucalatorResults.innerHTML = display;
    } else {
      if(buttonPress === "clear") {
        calucalatorResults.innerHTML = 0;
        const empty = arr => arr.length = 0;
        empty(space);
      }
    }
  }
})