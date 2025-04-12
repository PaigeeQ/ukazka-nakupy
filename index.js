import {list} from "./shoplist.js";

const renderList = () => {
  const shoplistElement = document.querySelector('.shoplist');
  shoplistElement.innerHTML = ''; //bude prázdný
  list.forEach((item) => { // KDYŽ chci něco pro každou položku tady pro item, a vytvořitm fci pro html **
    let tickClass = 'btn-tick'; //odškrtnuto ;  tick=zaškrnout

    if (item.bought) {
      tickClass += ' btn-tick--on'; // zaškrtnuto
    }

    // ** přidaní tzn . tady pro html 
    shoplistElement.innerHTML += `          
      <div class="shopitem">
        <button class="${tickClass}" class="shopitem__tick"></button>
        <div class="shopitem__name">${item.name}</div>
        <div class="shopitem__amount">${item.amount}</div>
        <button class="btn-delete">Smazat</button>
      </div>
    `;
  });

  const deleteButtons = document.querySelectorAll('.shopitem .btn-delete');
  deleteButtons.forEach((button, index) => { // na každý button přidej 
    button.addEventListener('click', () => {
      list.splice(index, 1);    // uplně smaže, musím potom zase zavolat render, aby vyrobila list, ale už bez teto položky
      renderList();
    });
  });

  const tickButtons = document.querySelectorAll('.shopitem .btn-tick');
  tickButtons.forEach((button, index) => {
    button.addEventListener('click', () => { 
      list[index].bought = !list[index].bought;
      renderList();     //tady zase přidam položky 
    });
  });
};

const addBtn = document.querySelector('.btn-add');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const nameInput = document.querySelector('#input-name');    
  const amountInput = document.querySelector('#input-amount');
  const newItem = {       //vytvoření noveho objektu, co chci dát do pole
    name: nameInput.value,
    amount: amountInput.value,
    bought: false,
  };
  list.push(newItem); // pushnu do seznamu
  renderList();       // přerenderuju znova - vytvořím opět seznam 

  nameInput.value = '';   //vymažu na to, aby mohly převzít nové hodnoty 
  amountInput.value = '';  //vymažu na to, aby mohly převzít nové hodnoty 
});

renderList();
