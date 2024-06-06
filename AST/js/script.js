// MENU HAMBURGER //

const menu = document.querySelector('#btn-menu');
const boxMenuItens = document.querySelector('.box-menu-itens');

menu.addEventListener('click', (e) =>{
    e.preventDefault();
    boxMenuItens.classList.toggle('open')
    menu.classList.add('lines')
})

//...//

