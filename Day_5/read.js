const signInTab = document.getElementById('signInTab');
const signUpTab = document.getElementById('signUpTab');
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
const content = document.querySelector('.content');


function sigin(){
    document.getElementById('signin').style.display = "flex";
    content.classList.add('blur');
    document.getElementById('top').style.display = 'none';
}


signInTab.addEventListener('click', () => {
    signInTab.classList.add('active');
    signUpTab.classList.remove('active');
    signInForm.classList.add('active');
    signUpForm.classList.remove('active');
    content.classList.add()
});

signUpTab.addEventListener('click', () => {
    signUpTab.classList.add('active');
    signInTab.classList.remove('active');
    signUpForm.classList.add('active');
    signInForm.classList.remove('active');
});

function go(){
    content.classList.add('blur');
     document.getElementById('signin').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        window.open('main.html', '_self');
    }, 3000);
}

function visible0(){
    document.getElementById('novel').style.display = 'block';
    document.querySelector('.middle2').style.display = 'none';
    document.querySelector('.middle3').style.display = 'none';
    document.querySelector('.middle4').style.display = 'none';
    document.querySelector('.middle5').style.display = 'none';
}

function visible1(){
    document.getElementById('science').style.display = 'block';
    document.querySelector('.middle1').style.display = 'none';
    document.querySelector('.middle3').style.display = 'none';
    document.querySelector('.middle4').style.display = 'none';
    document.querySelector('.middle5').style.display = 'none';
}

function visible2(){
    document.getElementById('moti').style.display = 'block';
    document.querySelector('.middle2').style.display = 'none';
    document.querySelector('.middle1').style.display = 'none';
    document.querySelector('.middle4').style.display = 'none';
    document.querySelector('.middle5').style.display = 'none';
}