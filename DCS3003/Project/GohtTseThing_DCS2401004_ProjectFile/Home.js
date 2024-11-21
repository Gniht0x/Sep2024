const menuBtn = document.querySelector('.menu_btn')
const menuBtnIcon = document.querySelector('.menu_btn i')
const dropdownMenu = document.querySelector('.dropdown_menu')

menuBtn.onclick = function (){
    dropdownMenu.classList.toggle('open')
    const isOpen = dropdownMenu.classList.contains('open')
}


navLinks.forEach(link => {
  link.addEventListener("click", e => {
      e.preventDefault(); 


      const targetId = link.getAttribute("href").slice(1); 
      const targetSection = document.getElementById(targetId);

      targetSection.scrollIntoView({
          behavior: "smooth"
      });

    
      navLinks.forEach(nav => nav.classList.remove("active"));
     
      link.classList.add("active");
  });
});


  
