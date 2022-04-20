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
  },
  "=": (num1, num2) => {
    console.log(calcType)
    return this.calc[calcType](num1, num2) 
  },
};
const calucalatorResults = document.querySelector('.calculator-screen');
document.addEventListener('click', (e) => {
  let buttonPress = e.target.getAttribute('data-button-type');
  if(e.target.nodeName === "BUTTON") {
    let isCalculateButton = e.target.getAttribute('data-typeof-calc');
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
        let calcResults = Number(space.join(''));
        if(prevNum === 0) {
          prevNum += calcResults
          empty(space);
          return calucalatorResults.innerHTML = 0;      
        };        
        calcType = buttonPress;
        calucalatorResults.innerHTML = calc[buttonPress](prevNum, calcResults);        
      } else if (isCalculateButton === "equal") {
        console.log("Fire")
      }
    }
  }
});