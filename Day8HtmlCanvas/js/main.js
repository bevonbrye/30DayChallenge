const cavas = document.querySelector('#draw'); 
const ctx = cavas.getContext('2d'); 
cavas.width = window.innerWidth;
cavas.height = window.innerHeight;

ctx.stokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;

//set to false when clicking to draw
let isDrawing = false;
let lastX = 0; 
let lastY = 0;
let hue = 0
let direction = true;

function draw(e){ 
    if(!isDrawing) return; // stop from drawing 
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    //make this one line and descructure it
    lastX = e.offsetX
    lastY = e.offsetY
    hue++;
    if(hue >= 360){ 
        hue=0;
    }
    if(ctx.lineWidth >= 50 || ctx.lineWidth <= 1) { 
        direction = !direction;
    }
    // ctx.lineWidth++

    if(direction) { 
        ctx.lineWidth++;
    } else { 
        ctx.lineWidth--;
    }
}
draw()
cavas.addEventListener('mousemove', draw)
cavas.addEventListener('mouseup', () => isDrawing = false)
cavas.addEventListener('mousedown', (e) => { 
    isDrawing = true;
    [lastX,lastY] = [e.offsetX, e.offsetY]
    
})
cavas.addEventListener('mouseout', () => isDrawing = false)