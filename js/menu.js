var botaoMenu = document.querySelector('.cabecalho__menu-hamburguer');
var menu = document.querySelector('.lista-menu');
var divBotaoMenu = document.querySelector('.cabecalho__menu')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo');
    botaoMenu.classList.toggle("cabecalho__menu-hamburguer--ativo");
    divBotaoMenu.classList.toggle('cabecalho__menu--ativo');
});

botaoMenu(function () {
    botaoMenu.hover(
        botaoMenu.classList.add("cabecalho__menu-hamburguer--ativo")
    )
});