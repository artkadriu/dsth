let dropdown = document.querySelector('.menu'),//ul
submenu = document.querySelector ('sub-menu')
buttonClick = document.querySelector ('.menu-icon');

buttonClick.addEventListener('click',()=>{
    dropdown.classList.toggle('show-dropdown');
    if(submenu){
        submenu.classList.toogle('show-dropdown');
    }
    hamburger.classList.toggle('animate-button');
})
