import './style.css'

let containerDiv = document.querySelector('.containerDiv') as HTMLDivElement;
let createGrid = document.getElementById('createGrid') as HTMLButtonElement;
let gridWidth = document.getElementById('widthRange') as HTMLInputElement;
let gridHeight = document.getElementById('heightRange') as HTMLInputElement;
let colorInput = document.getElementById('colorInput') as HTMLInputElement;
let eraseBtn = document.getElementById('eraseBtn') as HTMLButtonElement;
let resetBtn = document.getElementById('resetBtn') as HTMLButtonElement;
let widthValue = document.getElementById('widthValue') as HTMLSpanElement;
let heightValue = document.getElementById('heightValue') as HTMLSpanElement;

createGrid.addEventListener('click', () => {
  containerDiv.textContent = "";
  let count = 0;
  for (let i = 0; i < +gridHeight.value; i++) { // gridHeight converted from string to number via '+'
    count += 2;
    let div = document.createElement('div');
    div.classList.add('gridRow');
    for (let j = 0; j < +gridWidth.value; j++) { // gridWidth converted from string to number via '+'
      count += 2;
      let col = document.createElement('div');
      col.classList.add('gridCol');
      col.getAttribute(`gridCol${count}`);
      col.addEventListener('mouseover', () => {
        col.style.backgroundColor = colorInput.value;
      });
      div.append(col);
    }
    containerDiv.append(div);
  }
});


gridWidth.addEventListener('input', () => {
  widthValue.textContent = gridWidth.value
});

gridHeight.addEventListener('input', () => {
  heightValue.textContent = gridHeight.value;
});

eraseBtn.addEventListener('click', () => {
  containerDiv.textContent = '';
});


resetBtn.addEventListener('click', () => {
  gridHeight.value = '0';
  gridWidth.value = '0';
});