const apiCall = async ()=>{
    const response=fetch("https://api.adviceslip.com/advice")
    const data=(await response).json()
    return data
}

var diceContainer=document.querySelector('.main__diceContainer')
diceContainer.addEventListener('click',()=>{
    rollDice()
})

const rollDice=()=>{
    apiCall()
    .then(data=>{
        document.querySelector('.main__quote').textContent='\"'+data.slip.advice+'\"'
        document.querySelector(".title__adviceId").textContent=data.slip.id
    })
    // setTimeout(()=>{
    //     mainDiv_totalHeight=document.querySelector(".main__quote").clientHeight+11+56+16+64+48+28
    //     document.querySelector(".main").style.height=mainDiv_totalHeight+"px"
    //     console.log(mainDiv_totalHeight+"px")
    // }, 200)
}

// let observer = new MutationObserver(mutations=>{
//     mutations.forEach(mutation=>{
//         mainDiv_totalHeight=document.querySelector(".main__quote").clientHeight+11+56+16+64+48+28
//         document.querySelector(".main").style.height=mainDiv_totalHeight+"px"
//         console.log("hey")
//     })
// });

rollDice()
