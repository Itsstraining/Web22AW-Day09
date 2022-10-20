/** @type {HTMLCanvasElement} */
let myCanvas = document.getElementById('myCanvas');

const height = myCanvas.height, width = myCanvas.width;

let pen = myCanvas.getContext("2d");
let rad = 150;

// //Đóng đường line 
// // pen.closePath();
// pen.beginPath();

//Tọa độ điểm của tâm, Bán kính 

//Tạo hình tròn
pen.arc(width/2, height/2, 170, 0 ,2*Math.PI);//dùng để vẽ vòng cung
pen.fillStyle= '#fdd835';
pen.strokeStyle= 'yellow';
pen.fill();
pen.stroke();

//Vẽ mắt Trái
pen.beginPath();
pen.arc(width/2 - rad / 2.5, height/2 - rad / 3.5, 55, 0 ,2*Math.PI);
pen.fillStyle = 'fdd835';
pen.strokeStyle= 'black'; 
pen.fill();
pen.closePath();

pen.beginPath();
pen.arc(width/2 - rad / 2.5, height/2 - rad / 3.5, 40, 0 ,2*Math.PI);
pen.fillStyle = 'white';
pen.fill();
pen.closePath();
pen.beginPath();
pen.arc(width/2 - rad / 2.5, height/2 - rad / 3.5, 25, 0 ,2*Math.PI);
pen.fillStyle = 'Black';
pen.fill();
pen.closePath();

//Vẽ mắt phải
pen.beginPath();
pen.arc(width/2 + rad / 2.5, height/2 - rad / 3.5, 40, 0 ,2*Math.PI);
pen.fillStyle = 'white';
pen.fill();
pen.closePath();
pen.beginPath();
pen.arc(width/2 + rad / 2.5, height/2 - rad / 3.5, 25, 0 ,2*Math.PI);
pen.fillStyle = 'Black';
pen.fill();
pen.closePath();

//Vẽ Miệng
pen.beginPath();
pen.arc(width/2 , height/2 + 54 , 40, Math.PI ,2*Math.PI);
pen.fillStyle= 'black';
pen.fill();
pen.closePath();

pen.beginPath();
pen.arc(width/2 , height/2 + 54 , 25, Math.PI ,2*Math.PI);
pen.fillStyle= 'white';
pen.fill();
pen.closePath();

pen.beginPath();
pen.rect(width/2 -40 , height/2 + 53, 80, 35);
pen.fillStyle= 'black';
pen.fill();
pen.closePath();

pen.beginPath();
pen.arc(width/2 , height/2 + 85 , 40, 0 ,Math.PI);
pen.fillStyle= 'black';
pen.fill();
pen.closePath();




// let grd = pen.createLinearGradient(0, 0, widgh/2, 0);

// grd.addColorStop(0, "red");
// grd.addColorStop(1, "yellow");

// pen.fillStyle= grd;
// pen.fillRect(0, 0, widgh, height);