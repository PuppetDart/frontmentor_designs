var share_icon=document.querySelector(".share_icon")
var share_menu=document.querySelector(".share_menu")
var share_arrow=document.querySelector(".share_arrow")

share_icon.addEventListener('click', ()=>{
    share_menu.classList.toggle("visible_menu")
    share_icon.classList.toggle("clicked_icon")
    share_arrow.classList.toggle("clicked_arrow")
})