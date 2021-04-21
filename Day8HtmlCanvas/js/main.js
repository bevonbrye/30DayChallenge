const cavas = document.querySelector('#draw'); 
const ctx = cavas.getContext('2d'); 
cavas.width = window.innerWidth;
cavas.height = window.innerHeight;

ctx.stokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

//set to false when clicking to draw
let isDrawing = false;
let lastX = 0; 
let lastY = 0;

function draw(e){ 
    if(!isDrawing) return; // stop from drawing 
    console.log(e)
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX, e.offsetY)
}
draw()
cavas.addEventListener('mousemove', draw)
cavas.addEventListener('mouseup', () => isDrawing = false)
cavas.addEventListener('mousedown', () => isDrawing = true)
cavas.addEventListener('mouseout', () => isDrawing = false)