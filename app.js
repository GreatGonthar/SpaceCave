// начало проекта 11.04.20
let myCanvas = document.getElementById("my_canvas");
let ctx = myCanvas.getContext("2d");
myCanvas.width = 1024;
myCanvas.height = 768;

const FPS = 30;
//let x = 0;
let xMax = 50;
let xMin = 5;
//let y = 0;
let yMax = 300;
let yMin = 200;
let a = 2 // коэффициен расстояния между верхом и низом (от 1 до 2)
let arrMountain = [];
let pics = 80; //количество пиков
let gravity = 1;

let ship = {
	x: myCanvas.width / 2,
	y: myCanvas.height / 2,	
	r: 20,
	direction: {
		move: false,
		x: 0,
		y: 0,
	}
}


setInterval(mainLoop, 1000 / FPS); //TODO попробовать использовать setTimeout
createMountainsUP(100);
createMountainsDOWN(100);

function mainLoop() {
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);	
		ctx.lineWidth = 1;
		ctx.fillStyle = 'silver';
		ctx.strokeStyle = 'salmon';

		ctx.beginPath();
		ctx.moveTo(100,0);
		ctx.lineTo(100, myCanvas.height);
		ctx.lineTo(myCanvas.width-100, myCanvas.height);
		ctx.lineTo(myCanvas.width-100, 0);
		ctx.stroke();
		ctx.closePath();

				ctx.fillRect(ship.x, ship.y, ship.r, ship.r);
				if (ship.direction.move == true){					
					ship.y -= 8;
				}else {ship.y += gravity}	

	drawMountainsUP();
	drawMountainsDOWN();
}

function createMountainsUP(zeroX){
	arrMountain=[[zeroX,100]];
	
	for (let i = 0; i < pics; i++){
		// let y = Math.random()*(yMax-yMin)+yMin;
		// let x = Math.random()*(xMax-xMin)+xMin;
		let x = xMin*2;
		let y = yMin;
		arrMountain.push([arrMountain[i][0] + x, y]);
	}
}
function createMountainsDOWN(zeroX){
	arrMountain2=[[zeroX,yMax*2]];
	
	for (let i = 0; i < pics; i++){
		//let y = (Math.random()*(yMax-yMin)+yMin) + (yMax - yMin)*a;
		//let x = Math.random()*(xMax-xMin)+xMin;
		let x = xMin*2;
		let y = yMax+yMin;
		arrMountain2.push([arrMountain2[i][0] + x, y]);
	}
}

function drawMountainsUP(){
	ctx.beginPath();
	ctx.moveTo(arrMountain[0][0],arrMountain[0][1]);
	for (let i = 0; i < arrMountain.length; i++){
		ctx.lineTo(arrMountain[i][0], arrMountain[i][1]);
		ctx.stroke();
	}
	for (let i = 0; i < arrMountain.length; i++){
		arrMountain[i][0] -= 1;
	}	
	let y = Math.random()*(yMax-yMin)+yMin;
	let x = Math.random()*(xMax-xMin)+xMin;

	if (arrMountain[arrMountain.length-1][0] <= myCanvas.width-100){		
		arrMountain.push([arrMountain[arrMountain.length-1][0] + x, y]);
	}

	if (arrMountain[0][0] <= 100 - xMax){	
		arrMountain.shift();
		//a -= .3; // условие сужения туннеля
	}
	console.log(a);
}

function drawMountainsDOWN(){	
	ctx.beginPath();
	ctx.moveTo(arrMountain2[0][0],arrMountain2[0][1]);
	for (let i = 0; i < arrMountain2.length; i++){
		ctx.lineTo(arrMountain2[i][0], arrMountain2[i][1]);
		ctx.stroke();
	}
	for (let i = 0; i < arrMountain2.length; i++){
		arrMountain2[i][0] -= 1;
	}	
	let y = (Math.random()*(yMax-yMin)+yMin) + (yMax - yMin)*a;
	let x = Math.random()*(xMax-xMin)+xMin;

	if (arrMountain2[arrMountain2.length-1][0] <= myCanvas.width-100){		
		arrMountain2.push([arrMountain2[arrMountain2.length-1][0] + x, y]);
	}

	if (arrMountain2[0][0] <= 100 - xMax){	
		arrMountain2.shift();
	}
}

function KeyDown(event) {
	switch(event.keyCode) {
		case 32:			
			break;
		case 37:	
			ship.x -= 10;
			break;
		case 38:	
			break;
		case 39:
			ship.x += 10;
			break;
		case 40:
		ship.direction.move = true;

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
		ship.direction.move = false;	
		//ship.direction.y = 0;	
			break;
		case 39:			
			break;
		case 40:
		ship.direction.move = false;

			break;	
	}
}

document.addEventListener('keydown', KeyDown);
document.addEventListener('keyup', KeyUp);

