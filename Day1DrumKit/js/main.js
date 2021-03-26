
//Event Listeners

//doc and screen are two properties for window
//can be transposed to jQuery
window.addEventListener('keydown', playSound);

//Functions: 
function playSound(e) { 
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return; //stop function
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');


}

function removeTransition(e){ 
    if(e.propertyName !== 'transform') return;

    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition) )