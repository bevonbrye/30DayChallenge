const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
// function: 

function setDate(){ 

    const now = new Date(); 
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; 
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`


    const mins = now.getMinutes(); 
    const minDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`

    const hour = now.getHour(); 
    const houDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`

}



setInterval(setDate, 1000); 