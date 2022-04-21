let space = [];
let prevNum = 0;
let calcType = "";
const empty = arr => arr.length = 0;
let calc = {
  "+": (num1, num2) => {
    return num1 + num2
  },
  "-": (num1, num2) => {
    return num1 - num2
  },
  "/": (num1, num2) => {
    return num1 / num2
  },
  "*": (num1, num2) => {
    return num1 * num2
  }
};
const calucalatorResults = document.querySelector('.calculator-screen');
document.addEventListener('click', (e) => {
  let buttonPress = e.target.getAttribute('data-button-type');
  if(e.target.nodeName === "BUTTON") {
    let isCalculateButton = e.target.getAttribute('data-typeof-calc');
    let calcResults = Number(space.join(''));
    if(!isCalculateButton) {
      space.push(buttonPress);
      let display = space.join('');
      calucalatorResults.innerHTML = display;
    } else {
      if(buttonPress === "clear") {
        calucalatorResults.innerHTML = 0;
        prevNum = 0;      
        empty(space);        
      }
      if(isCalculateButton === "operator") {  
        if(prevNum === 0) {
          prevNum += calcResults
          empty(space);
          calcType = buttonPress;
          return calucalatorResults.innerHTML = 0;      
        };        
        calcType = buttonPress;
        console.log(calcType)
        calucalatorResults.innerHTML = calc[buttonPress](prevNum, calcResults);        
      } else if (isCalculateButton === "equal" && prevNum !== 0) {
        calucalatorResults.innerHTML = calc[calcType](prevNum, calcResults);
      } else if(isCalculateButton === "reverse" && calcResults !== 0) {
        space[0] === "-" ? space.shift() : space.unshift("-");
        return calucalatorResults.innerHTML = calcResults - (calcResults * 2);
      }
    }
  }
});