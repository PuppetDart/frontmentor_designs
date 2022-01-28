var div=document.querySelector('#cardImg');
var eye=document.querySelector('#eye');

div.addEventListener('mouseover', ()=>{
    eye.style.height="18%";
    overlay.style.background="#16e9eca2";
} );
div.addEventListener('mouseout', ()=>{
    eye.style.height="0px";
    overlay.style.background="";
} );