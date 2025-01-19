let countElement = document.querySelector('p:first-of-type');
let errorElm = document.querySelector('p:last-of-type');
let decrementBtn = document.querySelector('.btns button:nth-child(1)');
let clearBtn = document.querySelector('.btns button:nth-child(3)');






let initialValue = 0;
let updatedValue = initialValue;
function Increment() {
  
  updatedValue ++;
  countElement.textContent = `Your current count is : ${updatedValue}`
  decrementBtn.disabled = false;
  errorElm.style.color = 'black'
  decrementBtn.style.cursor = "pointer"
  clearBtn.style.display = 'block'
   if(updatedValue==0){
    clearBtn.style.display = 'none'
   }
}




function Decrement() {
    updatedValue--;
    if(updatedValue<0){
        errorElm.style.color = 'red'
        decrementBtn.disabled = true;
        decrementBtn.style.cursor = "not-allowed"
        updatedValue = initialValue;
        clearBtn.style.display = 'none'
    }else{
        clearBtn.style.display = 'block'
        errorElm.style.color = 'black'
        countElement.textContent = `Your current count is : ${updatedValue}`
    }
    
    
}

function Clear() {
    updatedValue = 0;
  countElement.textContent = `Your current count is : ${updatedValue}`;
  decrementBtn.disabled = false;
  errorElm.style.color = 'black'
  decrementBtn.style.cursor = "pointer"
  if(updatedValue==0){
     clearBtn.style.display = 'none'
  }
  
}
