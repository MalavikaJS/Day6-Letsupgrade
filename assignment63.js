console.log('Assignment 3');
let user = prompt('Enter the name');
console.log(user);
alert('welcome to the page');
console.log(title.innerText);

const ctime = document.getElementById('time')
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}
// clock();

setInterval(clock,1000);

const dmode = document.getElementById('dark');

dmode.onclick= function changecolor(){
    }

changecolor();







