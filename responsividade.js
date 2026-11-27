'use strict'

const menuHamburguer = document.getElementById('menuHamburguer');
const menu = document.querySelector('.menu');

menuHamburguer.onclick = () => {
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
};