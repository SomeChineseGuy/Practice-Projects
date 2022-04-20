document.addEventListener('click', (e) => {
  
  if(e.target.nodeName === "BUTTON") {
    console.log(e.target.getAttribute('data-button-type'));
  }
})