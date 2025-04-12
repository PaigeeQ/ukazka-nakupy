import { list, toogleBought, deleteItem } from "./shoplist.js";

export const renderList = () => {
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
        deleteItem(index);    
        renderList();
      });
    });
  
    const tickButtons = document.querySelectorAll('.shopitem .btn-tick');
    tickButtons.forEach((button, index) => {
      button.addEventListener('click', () => { 
        toogleBought(index);
        renderList();     //tady zase přidam položky 
      });
    });
  };