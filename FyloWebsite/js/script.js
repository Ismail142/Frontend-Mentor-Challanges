'use script';

const btn = document.getElementById('theme-toogle');
const nightIcon = document.getElementById("theme-toggle-dark-icon");
const lightIcon = document.getElementById("theme-toggle-light-icon");
const html = document.querySelector('html');




btn.addEventListener('click', ()=>{
  html.classList.toggle('dark');
  localStorage.getItem('theme') === 'dark' ? localStorage.setItem('theme', 'light') : localStorage.setItem('theme', 'dark');
})
