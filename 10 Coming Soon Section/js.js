var errorMsg=document.querySelector(".main__ErrorMsg");
var errorText=document.querySelector(".main__ErrorText");
var main_mail=document.querySelector(".main__mail");
console.log("msg is: ",document.querySelector(".main__mailTextBox").value);
document.querySelector(".main__mailButton").addEventListener('click',()=>{
    var text=document.querySelector(".main__mailTextBox").value;
    if(!text.includes('@')){
        errorMsg.classList.add("errorMsg_visible")
        errorText.classList.add("errorText_visible")
        main_mail.style.outline="2px solid hsl(0, 93%, 68%)"
    }
    else{
        errorMsg.classList.remove("errorMsg_visible")
        errorText.classList.remove("errorText_visible")
        main_mail.style.outline="1.5px solid hsl(0, 36%, 70%)"
    }
});
