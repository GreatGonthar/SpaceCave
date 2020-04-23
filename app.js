// начало проекта 11.04.20
let myCanvas = document.getElementById("my_canvas");
let ctx = myCanvas.getContext("2d");
myCanvas.width = 1024;
myCanvas.height = 768;

const FPS = 40;
let x = 0;
let y = Math.random()*(200-100)+100;
let move = myCanvas.width;
const size = 8;
let arrMountain = [];
let mountain = Math.random()*20;	
let pics = 8; //количество пиков
let xStep = 10; //шаг эллемента массива по x

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

		//arrMountain.push([arrMountain[arrMountain.length-1][0] + xStep, y]);
		//arrMountain.shift();
		ctx.beginPath();
		ctx.moveTo(150,0);
		ctx.lineTo(150, myCanvas.height);
		ctx.lineTo(500, myCanvas.height);
		ctx.lineTo(500, 0);
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
	if (arrMountain[arrMountain.length-1][0] <= 500){
		let y = Math.random()*(200-100)+100;
		arrMountain.push([arrMountain[arrMountain.length-1][0] + 50, y]);
		arrMountain.shift();
	}
}

function createMountains(x){
	arrMountain=[[x,100]];
	
	for (let i = 0; i < pics; i++){
		let y = Math.random()*(200-100)+100;
		arrMountain.push([arrMountain[i][0] + 50, y]);
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

