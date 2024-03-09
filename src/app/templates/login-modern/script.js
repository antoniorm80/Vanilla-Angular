const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const btnSingin = document.getElementById('btnSingin');
const btnSingup = document.getElementById('btnSingup');


registerBtn.addEventListener('click', () => {
    container.classList.add('active');
 });

 loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
 });


 btnSingin.addEventListener('click', () => {
   alert("Primero DIOS, saldré adelante");
});
btnSingup.addEventListener('click', (e) => {
   e.preventDefault();
   alert("a pesar de las circunstancias... ");
});