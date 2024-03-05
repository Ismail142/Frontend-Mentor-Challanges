function execute(){
   if (window.innerWidth < 768){
      const menuBtn = document.getElementById('menu-btn');
      const menu = document.getElementById('menu');
      menuBtn.addEventListener('click', ()=>{
         menuBtn.classList.toggle('open');
         menu.classList.toggle('hidden');
         menu.classList.toggle('flex');
      })
   }
}

window.addEventListener('resize', execute);
window.addEventListener('load', execute)