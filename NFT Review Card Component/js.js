var div=document.querySelector('#cardImg');
var eye=document.querySelector('#eye');

div.addEventListener('mouseover', ()=>{
    eye.style.display="block";
} );
div.addEventListener('mouseout', ()=>{
    eye.style.display="none";
} );