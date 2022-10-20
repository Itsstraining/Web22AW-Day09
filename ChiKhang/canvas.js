/**@type {HTMLCanvasElement} */
let myCanvas = document.getElementById("myCanvas");
const HEIGHT = myCanvas.height,
    WIDTH = myCanvas.width;

let pen = myCanvas.getContext("2d");
let rad = 150;

pen.beginPath();
pen.arc(WIDTH / 2, HEIGHT / 2, rad, 0, 2*Math.PI);
pen.fillStyle = "gold";
pen.fill();
pen.lineWidth = "5";
pen.stroke();
pen.closePath();


pen.beginPath();
pen.arc(WIDTH / 2 - rad / 2.5, HEIGHT / 2 - rad / 2.5, 30, 0, 2*Math.PI);
pen.fillStyle = "white";
pen.strokeStyle = "white";
pen.fill();
pen.stroke();
pen.closePath();

pen.beginPath();
pen.arc(WIDTH / 2 - rad / 2.5 + 2, HEIGHT / 2 - rad / 2.5, 10, 0, 2*Math.PI);
pen.fillStyle = "black";
pen.strokeStyle = "black";
pen.fill();
pen.stroke();
pen.closePath();

pen.beginPath();
pen.arc(WIDTH / 2 + rad / 2.5, HEIGHT / 2 - rad / 2.5, 30, 0, 2*Math.PI);
pen.fillStyle = "white";
pen.strokeStyle = "white";
pen.fill();
pen.stroke();
pen.closePath();

pen.beginPath();
pen.arc(WIDTH / 2 + rad / 2.5 + 2, HEIGHT / 2 - rad / 2.5, 10, 0, 2*Math.PI);
pen.fillStyle = "black";
pen.strokeStyle = "black";
pen.fill();
pen.stroke();
pen.closePath();


pen.beginPath();
pen.arc(WIDTH / 2 + rad / 30, HEIGHT / 2 + rad / 2, 40, 0, 2*Math.PI);
pen.fillStyle = "mediumVioletRed";
pen.strokeStyle = "mediumVioletRed";
pen.fill();
pen.stroke();
pen.closePath();