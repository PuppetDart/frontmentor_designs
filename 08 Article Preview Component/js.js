var share_icon=document.querySelector(".share_icon")
var share_menu=document.querySelector(".share_menu")
var share_arrow=document.querySelector(".share_arrow")

var profile=document.querySelector(".profile")
var indiv=document.querySelector(".indiv")

share_icon.addEventListener('click', ()=>{
    share_menu.classList.toggle("visible_menu")
    share_icon.classList.toggle("clicked_icon")
    share_arrow.classList.toggle("clicked_arrow")
    profile.classList.toggle("change_state")
    indiv.classList.toggle("absent")
})
