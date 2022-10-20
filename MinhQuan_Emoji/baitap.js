/**@type {HTMLCanvasElement} */
let myCanvas = document.getElementById("myCanvas");
const HEIGHT = myCanvas.height;
const WIDTH = myCanvas.width;


let pen = myCanvas.getContext("2d");

let rad = 150;

pen.beginPath();
pen.arc(WIDTH/2, HEIGHT/2,rad,0,2*Math.PI);

pen.fillStyle = "#f9ca24";
pen.fill()
pen.strokeStyle = "black";
//pen.setLineDash([15,15])
pen.lineWidth = "20"
pen.stroke();
pen.closePath();


//VẼ MẮT TRÁI
pen.beginPath()
//pen.arc(WIDTH/2-rad, HEIGHT/2,rad,0,2*Math.PI);
pen.arc(WIDTH/2 - rad/2.5 + 7, HEIGHT/2 - rad/2+50,35,Math.PI,2*Math.PI);
pen.lineWidth = "15"
pen.fillStyle = "black";
pen.strokeStyle = "black";
//pen.fill();

pen.stroke();
pen.closePath();

//VẼ MẮT PHẢI
pen.beginPath()
//pen.arc(WIDTH/2-rad, HEIGHT/2,rad,0,2*Math.PI);
pen.arc(WIDTH/2 + rad/2.5 - 7, HEIGHT/2 - rad/2+50,35,Math.PI,2*Math.PI);
pen.fillStyle = "black";
pen.strokeStyle = "black";
//pen.fill();

pen.stroke();
pen.closePath();

//VẼ MIỆNG

pen.beginPath();
pen.moveTo(WIDTH/2-100, HEIGHT/2+20)
pen.bezierCurveTo(WIDTH/2-100, HEIGHT/2+150, WIDTH/2+100,  HEIGHT/2+150,  WIDTH/2+100,  HEIGHT/2+20);
pen.fillStyle = 'white';
pen.fill();
pen.closePath();
pen.stroke();


pen.beginPath()
//pen.arc(WIDTH/2-rad, HEIGHT/2,rad,0,2*Math.PI);
pen.arc(WIDTH/2, HEIGHT/2+109.5,35,Math.PI,2*Math.PI);
pen.lineWidth = "15"
pen.fillStyle = "red";
pen.fill();
pen.strokeStyle = "black";
pen.closePath();
pen.stroke();



// pen.beginPath();
// pen.moveTo(WIDTH/2-80, HEIGHT/2+70)
// pen.bezierCurveTo(WIDTH/2-100, HEIGHT/2+150, WIDTH/2+100,  HEIGHT/2+150,  WIDTH/2+80,   HEIGHT/2+70);
// pen.fillStyle = 'red';
// pen.fill();
// pen.closePath();
// pen.stroke();

// pen.beginPath();
// pen.moveTo(WIDTH/2-10, HEIGHT/2)
// pen.bezierCurveTo(WIDTH/2-100, HEIGHT/2+150, WIDTH/2+100,  HEIGHT/2+150,  WIDTH/2+30,   HEIGHT/2+10);
// pen.fillStyle = 'white';
// pen.fill();
// pen.closePath();
// pen.stroke();




//VẼ LƯỠI
// pen.beginPath()
// //pen.arc(WIDTH/2-rad, HEIGHT/2,rad,0,2*Math.PI);
// pen.arc(WIDTH/2 - rad/2.5 + 60, HEIGHT/2 - rad/2+185,35,Math.PI,2*Math.PI);
// pen.fillStyle = 'red';
// pen.fill();
// pen.lineWidth = "15"
// pen.fillStyle = "black";
// pen.strokeStyle = "black";
// pen.stroke();






// pen.strokeStyle = 'white';
// //pen.lineTo(WIDTH,HEIGHT/2);
// //pen.stroke();
// pen.beginPath();
// pen.moveTo(WIDTH/2-100 + 1, HEIGHT/2+20)
// pen.bezierCurveTo(WIDTH/2-100, HEIGHT/2+150, WIDTH/2+100,  HEIGHT/2+150,  WIDTH/2+100,  HEIGHT/2+20);
// pen.closePath();
// pen.stroke();






