const logoMenu = document.querySelector('.logoMenuImg');
const contItems = document.querySelector('.contItems');
const arrItems = document.querySelectorAll('.items');

logoMenu.addEventListener('click', () => {

  if(contItems.className === 'contItems'){

    contItems.className += " responsive";
    logoMenu.src = "ressources/close.svg";
  } else {
    contItems.className = "contItems";
    logoMenu.src = "ressources/menu.svg";
  }

arrItems.forEach(item => {

  item.addEventListener('click', () => {
    contItems.className = "contItems";
    logoMenu.src = "ressources/menu.svg";
  }
  )
} )

} )
