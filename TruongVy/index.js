/**@type {HTMLCanvasElement} */
let myCanvas = document.getElementById("myCanvas");

const HEIGHT = myCanvas.height, WIDTH = myCanvas.width;
let pen = myCanvas.getContext("2d");



// pen.moveTo(0,HEIGHT/2);
// pen.lineTo(WIDTH,HEIGHT/2);
// pen.stroke();

// Ve duong tron
// let rad = 120;
// pen.beginPath();
// pen.arc(WIDTH/2,HEIGHT/2,rad,0,2*Math.PI);
// pen.fillStyle = "#fcd734"
// pen.strokeStyle = "#fcd734"
// pen.fill()
// pen.closePath();
// pen.stroke();

// // Ve con mat trai
// pen.beginPath();
// pen.fillStyle = "black";
// pen.font = "50pt Verdana"
// pen.fillText(">",WIDTH/2-70,HEIGHT/2 - 25,);
// pen.closePath();
// pen.stroke();

// // Ve con mat phai
// pen.beginPath();
// pen.fillStyle = "black";
// pen.font = "50pt Verdana"
// pen.fillText("<",WIDTH/2+15,HEIGHT/2 - 25,);
// pen.closePath();
// pen.stroke();

// // Ve cai mieng
// pen.beginPath();
// pen.arc(WIDTH/2,HEIGHT/2+rad/7,65,0,Math.PI);
// pen.fillStyle = "black";
// pen.fill()
// pen.closePath();
// pen.stroke();

// pen.beginPath();
// pen.arc(WIDTH/2,HEIGHT/2+rad/4.5,30,0,Math.PI);
// pen.fillStyle = "white";
// pen.strokeStyle = "white";
// pen.fill()
// pen.closePath();
// pen.stroke();

// pen.beginPath();
// pen.moveTo(75,25);
// pen.quadraticCurveTo(25, 25, 25, 62.5);
// pen.strokeStyle = "Black";
// pen.stroke();
// pen.closePath();

// pen.beginPath();
// pen.arc(WIDTH/2,HEIGHT/2+rad/4.5,40,0,Math.PI);
// pen.fillStyle = "red";
// pen.strokeStyle = "red";
// pen.fill()
// pen.closePath();
// pen.stroke();

// let grd = pen.createLinearGradient(0, 0, WIDTH/2, 0 );
// grd.addColorStop(0, "red");
// grd.addColorStop(1, "yellow");
// pen.fillStyle = grd;
// pen.fillRect(0, 0, 150, 50);

// pen.moveTo(WIDTH/2,0);
// pen.lineTo(WIDTH/2,HEIGHT);
// pen.stroke();

// pen.moveTo(0,HEIGHT/2);
// pen.lineTo(WIDTH,HEIGHT/2);
// pen.stroke();

pen.beginPath();
pen.arc(WIDTH/2,HEIGHT/2,80,0,2*Math.PI);
pen.fillStyle = "#ffd740";
pen.strokeStyle = "#ffd740";
pen.fill();
pen.closePath();
pen.stroke();

//draw eyes
pen.beginPath();
pen.moveTo(WIDTH/2-15,HEIGHT/2-20);
pen.quadraticCurveTo(WIDTH/2-30, HEIGHT/2, WIDTH/2-50, HEIGHT/2-15);
pen.strokeStyle = "black";
pen.lineWidth = 7;
pen.stroke();
pen.closePath();

pen.beginPath();
pen.moveTo(WIDTH/2+15,HEIGHT/2-20);
pen.quadraticCurveTo(WIDTH/2+30, HEIGHT/2, WIDTH/2+50, HEIGHT/2-15);
pen.strokeStyle = "black";
pen.stroke();
pen.closePath();

//draw mouth
pen.lineWidth = 1;
pen.beginPath();
pen.arc(WIDTH/2,HEIGHT/2+30,15,0,2*Math.PI);
pen.fillStyle = "black";
pen.strokeStyle = "black";
pen.fill();
pen.closePath();
pen.stroke();

pen.lineWidth = 4;
//Sleep
pen.beginPath();
//cheo
pen.moveTo(WIDTH/2+65,HEIGHT/2-75);
pen.lineTo(WIDTH/2+45,HEIGHT/2-50);
//ngang tren
pen.moveTo(WIDTH/2+45,HEIGHT/2-75);
pen.lineTo(WIDTH/2+65,25);
//ngang duoi
pen.moveTo(WIDTH/2+45,HEIGHT/2-50);
pen.lineTo(WIDTH/2+65,HEIGHT/2-50);
pen.strokeStyle = "#d84315"
pen.stroke();
pen.closePath();

pen.beginPath();
//ngang duoi
pen.moveTo(WIDTH/2+20,HEIGHT/2-35);
pen.lineTo(WIDTH/2+35,HEIGHT/2-35);
//ngang tren
pen.moveTo(WIDTH/2+20,HEIGHT/2-55);
pen.lineTo(WIDTH/2+35,45);
//Cheo
pen.moveTo(WIDTH/2+20,HEIGHT/2-35);
pen.lineTo(WIDTH/2+35,HEIGHT/2-55);
pen.strokeStyle = "#d84315"
pen.stroke();
pen.closePath();

pen.beginPath();
pen.font = '15px serif';
pen.fillStyle = "#c7a500";
pen.fillText('Chúc bé ngủ ngon',10,40);
pen.stroke();
pen.closePath();
