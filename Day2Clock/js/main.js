const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
// function: 

function setDate(){ 

    const now = new Date(); 
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; 
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`


}



setInterval(setDate, 1000); 