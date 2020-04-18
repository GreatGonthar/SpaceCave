// начало проекта 11.04.20
let myCanvas = document.getElementById("my_canvas");
let ctx = myCanvas.getContext("2d");
myCanvas.width = 1024*2;
myCanvas.height = 1100;

const FPS = 1;
let x = 10;
let y = 10;
const size = 8;
let arrMountain = [];
setInterval(mainLoop, 1000 / FPS);

createMountains();
console.log(arrMountain)
function mainLoop() {	

	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);	

	ctx.strokeStyle = 'white';
	ctx.lineWidth = 2;
	ctx.beginPath();
	//ctx.arc(ship.x, ship.y, ship.r, 0, ship.a*2, true);
	//Math.random() * (max - min) + min
	x = 10, y = 10;
	ctx.moveTo(x*size, 100);
	for ( let i = 0; i < 10; i++){
		ctx.lineTo(x+=arrMountain[i].x, arrMountain[i].y);
	}
	ctx.stroke();		
	ctx.beginPath();
	//ctx.arc(ship.x, ship.y, ship.r, 0, ship.a*2, true);
	ctx.moveTo(x = 10*size, 500);
	for ( let i = 0; i < 10; i++){
		ctx.lineTo(x+=Math.random()*20*size, Math.random()*(101*size-51*size)+51*size);
	}
	ctx.stroke();	
}

function createMountains(){
	for (let i = 0; i < 10; i++){
		let mountain = {
			x: Math.random()*20*size,
			y: Math.random()*(51*size-1*size)+1*size,		
		}	
	arrMountain.push(mountain);
	}
}



function KeyDown(event) {
	switch(event.keyCode) {
		case 32:			
			break;
		case 37:			
			break;
		case 38:			
			break;
		case 39:
			ship.speed = FPS/1.5;
			break;
		case 40:
			break;
	}
}

function KeyUp(event) {
	switch(event.keyCode) {
		case 32:		
			break;
		case 37:			
			break;
		case 38:			
			break;
		case 39:			
			break;
	}
}

document.addEventListener('keydown', KeyDown);
document.addEventListener('keyup', KeyUp);
