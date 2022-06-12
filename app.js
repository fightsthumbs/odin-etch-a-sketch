const canvas = document.getElementById('canvas');

// const squares = () => {
//   for (let i = 0; i < 16; i++) {
//     document.createElement("div");

const rangeNum = document.getElementById('rangeNum');
const rangeGridNum = document.getElementById('range-grid-num');
let gridNum = 3;

rangeGridNum.addEventListener("change",()=> {
  console.log(rangeGridNum.value);
  rangeNum.textContent = rangeGridNum.value
  gridNum = rangeGridNum.value
  createCanvas();
})

//   }
// }
createCanvas();


function createCanvas() {
  const actualCanvas = document.querySelectorAll(".drawing-div");
  console.log(actualCanvas)
  actualCanvas.forEach(i => {
    canvas.removeChild(i);
  })
  
  for (let i = 0; i<(gridNum*gridNum); i++) {
    const individualSquare = document.createElement("div");
    individualSquare.setAttribute('class', 'drawing-div');  
    canvas.appendChild(individualSquare);
  }
  addEventsToDiv()
}



function addEventsToDiv() {
  const squares = document.querySelectorAll(".drawing-div");
  squares.forEach(element => element.addEventListener("mouseover", (e) => {
  
    e.target.classList.toggle("color-div")
  }))

}
