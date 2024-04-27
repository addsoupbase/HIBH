'use strict';
const username = document.getElementById('Username'),
    password = document.getElementById('Password'),
    check = document.getElementById('check'),
    button =  document.getElementById('button'),
    text = document.getElementById('text');
let incorrect = true;
function removeStatus() {
    check.innerHTML = ''
}
function submit() {
    if (password.value === '' || username.value === '') {
        check.style.color = 'red'

        return check.innerHTML = 'Please fill out both fields'
    }
    if (incorrect) {
       loading(()=>{
        check.style.color = 'red'

        check.innerHTML = 'Username or Password is incorrect.'
        return incorrect = false;
       }) 
    }
    else {
    loading(()=>{
        check.style.color = 'red'

        check.innerHTML = '⚠️You have been hakced sadly :( so goodbye⚠️'
        setTimeout(()=>{
            alert(`please download our program 100 free to get not hacked anymore call now this is a 1 time offer call now IMPORTATNT: \n${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}-${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}-${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}`)
       text.innerHTML='💀☠️HACKED🔓💳';
    button.onclick=function (){ITOLDYOUALREADY()}
        },300)
        return incorrect = false;
       }) }
}
function loading(func) {
    check.innerHTML = 'Loading'
    check.style.color = 'black'
    let f = setInterval(() => {
        check.innerHTML += '.'
    }, 300)
    setTimeout(()=>{
        func();
        clearInterval(f)
    },Math.floor(Math.random() * 400)+1000)
}
function ITOLDYOUALREADY() {
    check.innerHTML = 'I SAID YOU GOT HACKED NOW LEAVE GOODBYE'
}