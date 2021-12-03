/////////////////////////////////////////////
let buttom = document.querySelector('.buttom');
let off = document.querySelector('.off');

let li = document.querySelector('li');

let elements = document.querySelectorAll('li');
buttom.onclick = function() {
  off.classList.toggle('on');
};
/////////////////////////////////////////////
li.addEventListener('click',pov);
function pov() {
  for (let n = 0; n < elements.length; n++) {
     if (n % 2 !==0) {
		 ///console.log("не чет",n);
		 elements[n].style.transform = "rotate(50deg)";  
    } else {
		//console.log(n);
		elements[n].style.transform = "rotate(-50deg)";
    }  
  }
}
		   


