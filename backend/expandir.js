var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')
var categoria = document.querySelector('#categorias')
var drop = document.querySelector('.dropdown-rsp')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})

categoria.addEventListener('click', function(){
   drop.classList.toggle('descer')
})