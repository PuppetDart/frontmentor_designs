document.querySelectorAll('.socials div').forEach((div_iterator)=>{
    div_iterator.addEventListener('mouseenter',()=>{
        div_iterator.children[0].children[0].style="fill:hsl(0, 0%, 100%)"
    })
    div_iterator.addEventListener('mouseleave',()=>{
        div_iterator.children[0].children[0].style="fill:hsl(223, 87%, 63%)"
    })
});

emailInput=document.querySelector('.emailInput')
emailInput.addEventListener('keyup',()=>{
    errorMsg=document.querySelector('.errorMsg')
    if(emailInput.validity.typeMismatch){
        errorMsg.classList.add('visible');
        emailInput.classList.add('invalidMail')
    }
    else{
        errorMsg.classList.remove('visible')
        emailInput.classList.remove('invalidMail')
    }
})
