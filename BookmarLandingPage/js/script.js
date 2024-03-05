'use script'

function switchTab(index){
  tabs[currentActive].classList.remove('tab-active');
  panels[currentActive].classList.add('hidden');
  panels[currentActive].classList.remove('flex');

  currentActive = index;
  tabs[currentActive].classList.add('tab-active');
  panels[currentActive].classList.add('flex');
  panels[currentActive].classList.add('anim');
  panels[currentActive].classList.remove('hidden');
}

function showFaq(index) {
  faqs[index].classList.toggle('active');
  faqsContent[index].classList.toggle('active');
}

function observeCallback(entries,observer) {
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      let count = 0;

      const interval = setInterval(()=>{
        count+=1400;
        joined.textContent = count.toLocaleString();
        count >= 35000 && clearInterval(interval);
      },50)

      observer.unobserve(entry.target);

    }
  })
}



const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const faqs = document.querySelectorAll('.faq');
const faqsContent = document.querySelectorAll('.content');
const joined = document.querySelector('.joined');
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const logo = document.getElementById('logo');
let currentActive = 0;


tabs.forEach((tab,i)=>{
  tab.addEventListener('click',()=>switchTab(i))
})

faqs.forEach((faq,i)=>{
  faq.addEventListener('click',()=>showFaq(i))
})

const observer  = new IntersectionObserver(observeCallback,{threshold:1})
observer.observe(joined)

btn.addEventListener('click', ()=>{
  btn.classList.toggle('open');
  menu.classList.toggle('hidden');
  btn.classList.contains('open') ? logo.setAttribute('src','images/logo-bookmark-footer.svg') : logo.setAttribute('src','images/logo-bookmark.svg');
})


