import { renderList } from "./render.js";
import { addItem } from "./shoplist.js"; //import z shoplist.js

const addBtn = document.querySelector('.btn-add');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const nameInput = document.querySelector('#input-name');    
  const amountInput = document.querySelector('#input-amount');
  addItem(nameInput.value, amountInput.value);
  renderList();       // přerenderuju znova - vytvořím opět seznam 

  nameInput.value = '';   //vymažu na to, aby mohly převzít nové hodnoty 
  amountInput.value = '';  //vymažu na to, aby mohly převzít nové hodnoty 
});

renderList();

