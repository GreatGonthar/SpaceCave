// начало проекта 11.04.20
let myCanvas = document.getElementById("my_canvas");
let ctx = myCanvas.getContext("2d");
myCanvas.width = 1024;
myCanvas.height = 768;

const FPS = 10;
let x = 1000;
let y = 100;
let move = myCanvas.width;
const size = 8;
let arrMountain = [];
setInterval(mainLoop, 1000 / FPS);
let mountain = Math.random()*20*size;	
createMountains();

function mainLoop() {	

	let randomX = Math.random()*(50-1)+1;


	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);	
		ctx.lineWidth = 2;
		ctx.fillStyle = 'white';
		ctx.strokeStyle = 'red';
		ctx.beginPath();
		ctx.moveTo(arrMountain[0][0],arrMountain[0][1]);

	for (let i = 1; i < arrMountain.length; i++){
		arrMountain[i][0] -= 50;
		//ctx.fillRect(arrMountain[i][0], arrMountain[i][1] , 10, 10);
		ctx.lineTo(arrMountain[i][0], arrMountain[i][1]);
	}
			//ctx.closePath();
		ctx.stroke();	
	arrMountain.shift();
	//arrMountain.push([x+= randomX, Math.random()*(200-100)+100]);
	console.log(arrMountain[0][0]);
}

function createMountains(){
	for (let i = 0; i < 500; i++){
		arrMountain.push([x += 11, Math.random()*(200-100)+100]);
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
