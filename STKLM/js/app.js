'use strict';
var icono = document.querySelector('.fa-bars');
var nav = document.querySelector('.nav');
icono.addEventListener('click', function () {
    nav.classList.toggle('ver');
});
