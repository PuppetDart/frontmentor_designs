const apiCall = async ()=>{
    const response=fetch("https://api.adviceslip.com/advice")
    const data=(await response).json()
    return data
}

document.querySelector('.main__diceContainer').addEventListener('click',()=>{
    rollDice()
})

const rollDice=()=>{
    apiCall()
    .then(data=>{
        document.querySelector('.main__quote').textContent='\"'+data.slip.advice+'\"'
        document.querySelector(".title__adviceId").textContent=data.slip.id
    })
}

rollDice()
