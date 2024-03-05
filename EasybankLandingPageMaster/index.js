if (window.innerWidth < 1024){
   let btn = true;
   const menuBtn = document.querySelector('.mobile-btn');
   const mobileNav = document.querySelector(".nav-mobile");

   menuBtn.addEventListener('click',()=>{
      btn ? menuBtn.setAttribute('src', "images/icon-close.svg") : menuBtn.setAttribute('src', "images/icon-hamburger.svg");
      mobileNav.classList.toggle("active");
      btn ? btn=false : btn=true; 
   })

   mobileNav.addEventListener('click', ()=>{
      mobileNav.classList.remove("active");
      menuBtn.setAttribute('src', "images/icon-hamburger.svg");
      btn = true;
   })
}