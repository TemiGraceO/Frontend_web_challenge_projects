const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

//for dropdown
document.addEventListener('click', (e) => {
  if(!burger.contains(e.target) && !navLinks.contains(e.target)){
    navLinks.classList.remove('active');
  }
})