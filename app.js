

let buttons= document.querySelectorAll('button')
let display = document.getElementById("display")

buttons.forEach(button=>{
    button.addEventListener("click", ()=>{
        const value = button.textContent 
        handleInput(value)
    })
    
})

function handleInput(value) {
  if (value === 'C') {
    display.value = '';
  } else if (value === '⌫') {
    display.value = display.value.slice(0, -1);
  } else if (value === '=') {
    try {
      const result = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'));
      display.value = result;
    } catch {
      display.value = 'Error';
    }
  } else {
    display.value += value;
  }

}

