const canvas = document.getElementById('canvas');

// const squares = () => {
//   for (let i = 0; i < 16; i++) {
//     document.createElement("div");

const rangeNum = document.getElementById('rangeNum');
const rangeGridNum = document.getElementById('range-grid-num');

rangeGridNum.addEventListener("change",()=> {
  console.log(rangeGridNum.value);
  rangeNum.textContent = rangeGridNum.value
})


const gridNum = 16;
//   }
// }

for (let i = 0; i<(gridNum*gridNum); i++) {
  const squares = document.createElement("div")
  canvas.appendChild(squares);

}
