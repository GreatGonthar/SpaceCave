// начало проекта 11.04.20
let myCanvas = document.getElementById("my_canvas");
let ctx = myCanvas.getContext("2d");
myCanvas.width = 1024;
myCanvas.height = 768;

const FPS = 60;
//let x = 0;
let xMax = 100;
let xMin = 20;
//let y = 0;
let yMax = 300;
let yMin = 20;
let a = 2 // коэффициен расстояния между верхом и низом (от 1 до 2)
let av = .01 // скорость сужения (уменьшения коэффициента)
let arrMountain = [];
let pics = 18; //количество пиков
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
			ship.x += ship.direction.x;
			if (ship.x <= 100){
				ship.x = 100;
				ship.direction.x = -ship.direction.x/2;
			}
			if (ship.x >= myCanvas.width-100){
				ship.x = myCanvas.width-100;
				ship.direction.x = -ship.direction.x/2;
			}
			if (ship.direction.move == true){					
				ship.y -= 8;
			}else {ship.y += gravity}	

	drawMountainsUP();
	drawMountainsDOWN();
	CollisionMountainsUP();
	CollisionMountainsDOWN();
}

function CollisionMountainsUP(){

	for (let i = 1; i < (arrMountain.length-1); i++){	

		// let lineShip1 = (ship.x-400)*(500-200); // пример коллизии
		// let lineShip2 = (100-400)*(ship.y-200);
		// let lineShip = lineShip1 - lineShip2;
		// (console.log(lineShip, lineShip1, lineShip2));
		// if (ship.x > 100 && ship.x < 400 && ship.y > 200 && ship.y < 500 ){
		// 	if (lineShip > 0 && lineShip < 1000){ship.y -= 1}				
		// 	if (lineShip < 0 && lineShip > -1000){ship.y += 1}				
		// }	

		let lineShip1 = (ship.x-arrMountain[i-1][0])*(arrMountain[i][1]-arrMountain[i-1][1]); 
		let lineShip2 = (arrMountain[i][0]-arrMountain[i-1][0])*(ship.y-arrMountain[i-1][1]);
		let lineShip = lineShip1 - lineShip2;
		
		if (ship.x > arrMountain[i-1][0] && ship.x < arrMountain[i][0]){ //делаем проверку на x отрезках
			if (lineShip > 0){   // все что выше линии, это плюс
				ship.y = myCanvas.height/2;
			}
		}
	}
}

function CollisionMountainsDOWN(){

	for (let i = 1; i < (arrMountain2.length-1); i++){	
		let lineShip1 = (ship.x-arrMountain2[i-1][0])*(arrMountain2[i][1]-arrMountain2[i-1][1]); 
		let lineShip2 = (arrMountain2[i][0]-arrMountain2[i-1][0])*(ship.y-arrMountain2[i-1][1]);
		let lineShip = lineShip1 - lineShip2;
		
		if (ship.x > arrMountain2[i-1][0] && ship.x < arrMountain2[i][0]){ //делаем проверку на x отрезках
			if (lineShip < 0){   // все что выше линии, это плюс
				ship.y = myCanvas.height/2;
			}
		}
	}
}

function createMountainsUP(){
	let x = xMin*2; //сначала коридор прямой
	let y = yMin;
	arrMountain=[[x,y]];
	
	for (let i = 0; i < pics; i++){
		// let y = Math.random()*(yMax-yMin)+yMin;
		// let x = Math.random()*(xMax-xMin)+xMin;
		arrMountain.push([arrMountain[i][0] + x, y]);
	}
}
function createMountainsDOWN(){
	let x = xMin*2;
	let y = myCanvas.height-yMin;
	arrMountain2=[[x,y]];
	
	for (let i = 0; i < pics; i++){
		//let y = (Math.random()*(yMax-yMin)+yMin) + (yMax - yMin)*a;
		//let x = Math.random()*(xMax-xMin)+xMin;
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
		a -= av; // условие сужения туннеля
		console.log(a);
	}

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
	let y = (Math.random()*(myCanvas.height-yMax*a)+yMax*a);
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
			ship.direction.move = true;					
			break;
		case 37:	
			ship.direction.x -= 1;
			break;
		case 38:	
			//ship.y -= 1;
			break;
		case 39:
			ship.direction.x += 1;
			break;
		case 40:				
			break;
	}
}

function KeyUp(event) {
	switch(event.keyCode) {
		case 32:	
		ship.direction.move = false;	
			break;
		case 37:			
			break;
		case 38:	
			break;
		case 39:			
			break;
		case 40:
			
			break;	
	}
}

document.addEventListener('keydown', KeyDown);
document.addEventListener('keyup', KeyUp);

