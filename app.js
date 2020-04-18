// начало проекта 11.04.20
let myCanvas = document.getElementById("my_canvas");
let ctx = myCanvas.getContext("2d");
myCanvas.width = 1024;
myCanvas.height = 768;

const FPS = 2;
let x = 0;
let y = 10;
let move = myCanvas.width;
const size = 8;
let arrMountain = [];
setInterval(mainLoop, 1000 / FPS);
let mountain = Math.random()*20*size;	
createMountains();

function mainLoop() {	
	
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);	

	ctx.strokeStyle = 'white';
	ctx.lineWidth = 2;	
	ctx.beginPath();


		ctx.moveTo(arrMountain[0]-x, 100);
	for (i = 0; i < 5; i++){
		ctx.lineTo(arrMountain[i]-x, Math.random()*20*size);	
		ctx.stroke();
	}
		arrMountain.shift();
		let new_x = arrMountain[3] + 100;
		arrMountain.push(new_x);
		x+=101;
	console.log(arrMountain[0]-x);		
		
}

function createMountains(){			
	for (i = 0; i < 500; i+=100){
		arrMountain.push(100+i)
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
