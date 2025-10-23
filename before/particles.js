particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
}
);

const words = ["an Engineer.", "an Expert.", "a Leader.", "a Lifelong Learner.", "Proficient.", "Skilled.", ];
let i=0, j=0;
let currentWord = '';
let isDeleting = false;
const speed = 150;

function type(){
        if(i>=words.length) i = 0;
        currentWord = words[i];

        if(!isDeleting){
            document.getElementById('typing').textContent = currentWord.substring(0, j+1);
            j++;
            if(j === currentWord.length){
                isDeleting = true;
                setTimeout(type, 1500);
                return;
            }
        }
        else{
        document.getElementById('typing').textContent = currentWord.substring(0, j-1);
        j--;
        if(j===0){
            isDeleting = false;
            i++;
        }
    }
    setTimeout(type, speed);
}
type()

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  fetch("https://formspree.io/f/xqaynvng" , {
    method: "POST",
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      document.getElementById("status-msg").textContent = "Message sent!";
      form.reset();
    } else {
      response.json().then(data => {
        document.getElementById("status-msg").textContent =
          data.errors ? data.errors.map(e => e.message).join(", ") : "Something went wrong.";
      });
    }
  }).catch(error => {
    document.getElementById("status-msg").textContent = "Network error.";
  });
});


const cards = document.querySelectorAll('.exp-card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add('visible');
    }
  });
});

function toggleDetails(card) {
  const details = card.querySelector('.exp-details');
  details.classList.toggle('active');
}

const burger = document.getElementById('burger');
const navLinks = document.querySelector('nav ul');

burger.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent click from reaching the document
  navLinks.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});



const toggle = document.getElementById('mode-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const body = document.body;
const header = document.querySelector('.header');
const particles = document.getElementById('particles-js');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');
const expCards = document.querySelectorAll('.past-experiences .exp-card')
const reElement = document.querySelector('.re');
let isLight = true; // start in light mode

toggle.addEventListener('click', () => {
  if (isLight) {
    // Switch to dark mode
    body.style.color = '#eee';
    header.style.background = 'linear-gradient(105deg, #222840 0%, #1a2240 50%, #2b3759 100%)';
    header.querySelectorAll('li').forEach(li => li.style.color = 'white');
    header.querySelector('.color2').style.color = '#4da6ff';
    about.style.background = 'linear-gradient(105deg, #141e38 0%, #1a2240 50%, #1d2a4c 100%)';
    contact.style.background = 'linear-gradient(105deg, #141e38 0%, #1a2240 50%, #1d2a4c 100%)';
    reElement.style.borderColor = '#bbb';
    document.documentElement.style.setProperty('--bg-gradient', 'linear-gradient(105deg, #1c2a56 0%, #223064 50%, #2a3a7b 100%)');    reElement.querySelector('a').style.color = 'white'
    document.querySelector('.re').style.color = 'white';
    document.querySelectorAll('#burger div').forEach(bar => {bar.style.backgroundColor = 'white';}); reElement.style.boxShadow = '0 0 2px 1px #bbb';
    document.querySelector('.home').style.background = 'rgba(23, 32, 59, 0.1)';
    document.getElementById('home-wrapper').style.background = 'linear-gradient(105deg, #1f2d53ff 0%, #242f56ff 50%, #253763ff 100%)';
    particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Dark mode particles loaded');});
    document.getElementById('typing').style.color = '#4da6ff';
    particlesJS.load('particles-js', 'darkmode.json', function() {
    console.log('callback - particles.js config loaded');});
    expCards.forEach(card => {
    card.style.background = '#3d4975ff';});
    document.querySelector('.mid').style.color = 'white';
    document.querySelector('.recent-experience').style.background = '#3d4975ff'; // example dark color
    document.querySelector('.recent-experience').style.color = '#ccc';
    document.querySelector('.profile').style.backgroundColor = '#252d3dff';
    document.getElementById('home-wrapper').style.background = 'linear-gradient(105deg, #1f2d53ff 0%, #242f56ff 50%, #253763ff 100%)';

    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
    isLight = false;
  } else {
    // Switch to light mode (reset styles)
    body.style.color = '';
    document.querySelector('.profile').style.backgroundColor = '';
    particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');});
    header.querySelectorAll('li').forEach(li => li.style.color = '#aabaff');
    document.getElementById('typing').style.color = '';
    expCards.forEach(card => {
    card.style.background = '#3d4975ff';});
    particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Light mode particles loaded');});
    document.documentElement.style.setProperty('--bg-gradient', '');    document.querySelectorAll('#burger div').forEach(bar => {bar.style.backgroundColor = '';});
    header.style.background = '';
    document.getElementById('home-wrapper').style.background = '';
    reElement.querySelector('a').style.color = ''
    document.querySelector('.home').style.background = '';
    header.querySelectorAll('li').forEach(li => li.style.color = '');
    particles.style.background = '';
    reElement.style.borderColor = '';
    document.querySelector('.mid').style.color = '';
    reElement.style.boxShadow = '';
    document.getElementById('typing').style.color = '';
    document.querySelector('.re').style.color = '';
    document.querySelector('.recent-experience').style.background = '';
    document.querySelector('.recent-experience').style.color = '';
    about.style.background = '';
    contact.style.background = '';
    document.get
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
    isLight = true;
  }
});
