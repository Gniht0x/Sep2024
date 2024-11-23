const menuBtn = document.querySelector('.menu_btn')
const menuBtnIcon = document.querySelector('.menu_btn i')
const dropdownMenu = document.querySelector('.dropdown_menu')

menuBtn.onclick = function (){
    dropdownMenu.classList.toggle('open')
    const isOpen = dropdownMenu.classList.contains('open')
}




  
