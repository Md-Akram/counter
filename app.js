let counter = 0;

const value = document.querySelector('#value');
console.log(value)
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');


decrease.addEventListener('click', function(){
 counter --;
 value.textContent = counter;
 colorizer();
})

reset.addEventListener('click', function(){
 counter = 0;
 value.textContent = counter;
 colorizer();
})

increase.addEventListener('click', function(){
 counter ++;
 value.textContent = counter;
 colorizer();
})

function colorizer(){
  if (counter < 0){
  value.style.color = "red";
 }
 if(counter === 0){
  value.style.color = "black"
 }
 if (counter > 0){
  value.style.color = "green";
 }
}


