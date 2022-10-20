console.log("hello world");
/**@type {HTMLCanvasElement} */
let myCanvas = document.getElementById('myCanvas');
console.log(myCanvas);

let ctx= myCanvas.getContext('2d');
const WIDTH = myCanvas.width, HEIGHT = myCanvas.height;
ctx.moveTo(0,HEIGHT/2);
ctx.lineTo(WIDTH,HEIGHT/2);
ctx.strokeStyle= "red";
ctx.stroke();
ctx.closePath();

let gloryMU = document.getElementById("test");

ctx.drawImage(gloryMU, WIDTH/2-100, HEIGHT/2-100, 200, 200)
ctx.font = '50px serif';
ctx.strokeText("2-0",WIDTH/2-30, HEIGHT/2+150)