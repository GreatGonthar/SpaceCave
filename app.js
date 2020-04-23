// начало проекта 11.04.20
let myCanvas = document.getElementById("my_canvas");
let ctx = myCanvas.getContext("2d");
myCanvas.width = 1024;
myCanvas.height = 768;

const FPS = 40;
let xStep = 50;
let xMax = 800;
let xMin = 100;
let y = 0;
let yMax = 200;
let yMin = 100;
let arrMountain = [];
let pics = 8; //количество пиков


setInterval(mainLoop, 1000 / FPS); //TODO попробовать использовать setTimeout


createMountains(100);
//createBigMontains();
	

function mainLoop() {	
	console.log(arrMountain)
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);	
		ctx.lineWidth = 1;
		ctx.fillStyle = 'white';
		ctx.strokeStyle = 'salmon';

		ctx.beginPath();
		ctx.moveTo(xMin,0);
		ctx.lineTo(xMin, myCanvas.height);
		ctx.lineTo(xMax, myCanvas.height);
		ctx.lineTo(xMax, 0);
		ctx.stroke();
		ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(arrMountain[0][0],arrMountain[0][1]);
	for (let i = 0; i < arrMountain.length; i++){
		ctx.lineTo(arrMountain[i][0], arrMountain[i][1]);
		ctx.stroke();
	}
	for (let i = 0; i < arrMountain.length; i++){
		arrMountain[i][0] -= 1;
	}	
	if (arrMountain[arrMountain.length-1][0] <= xMax){
		y = Math.random()*(yMax-yMin)+yMin;
		arrMountain.push([arrMountain[arrMountain.length-1][0] + xStep, y]);
	}
	if (arrMountain[0][0] <= xMin - xStep){	
		arrMountain.shift();
	}
}

function createMountains(zeroX){
	arrMountain=[[zeroX,100]];
	
	for (let i = 0; i < pics; i++){
		y = Math.random()*(yMax-yMin)+yMin;
		arrMountain.push([arrMountain[i][0] + xStep, y]);
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

