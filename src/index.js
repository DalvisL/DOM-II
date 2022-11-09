import './less/index.less'

// Your code goes here!

const signUp = document.querySelectorAll(".destination .btn");
const headerIntro = document.querySelector('.intro');
const header = document.querySelector('header');
const body = document.querySelector('body');
const modal = document.createElement('div');


const modalDefault =  `
<p>Join Us For 15% Off Expeditions!</p>
<div>    
    <input name='email' type='email' placeholder='Email class='input'/>
    <button type='button'>Submit</button>
</div>
`
modal.classList.add('modal','off');
modal.innerHTML = modalDefault;
headerIntro.before(modal);

// bring up modal when sign me up! button is clicked
Array.from(signUp).forEach( el => {
    el.addEventListener('click', function() {
        modal.classList.remove('off');
        modal.innerHTML = modalDefault;
        }
    )
})

// make nav transparent if scroll goes past a certain amount, also make sticky nav shrink

window.addEventListener('wheel', function(evt) {
    if(this.scrollY > 60) {
        header.style.backgroundColor = 'rgba(256, 256, 256, 0.8)';
        header.classList.add('shrink');
    } else if(this.scrollY < 60) {
        header.style.backgroundColor = 'white';
        header.classList.remove('shrink');
    }
})

// double click h1 for easter egg
const h1 = document.querySelector('h1');

h1.addEventListener('dblclick', evt => {
    if(h1.textContent !== 'Fun Boat') {
        h1.textContent = 'Fun Boat';
        document.querySelector('h2').textContent = 'Welcome To Fun Boat!';
        document.querySelector('header img').src = 'http://localhost:9000/img/destination.jpg';
    } else {
        h1.textContent = 'Fun Bus';
        document.querySelector('h2').textContent = 'Welcome To Fun Bus!';
        document.querySelector('header img').src = 'http://localhost:9000/img/fun-bus.jpg';
    }
})

// keydown to get rid of modal
function escKey(evt) {
    if(evt.key === 'Escape') {
        modal.classList.add('off');
    };
}
document.addEventListener('keydown', escKey);

// on load alert user to sign up for 15% off expedition pricing
window.addEventListener('load', function(evt) {
    modal.innerHTML = `
    <p style= "color: rgba()">Welcome to ${h1.textContent}, Please Join Us!</p>
    <div>    
        <input name='email' type='email' placeholder='Email' class = 'input'/>
        <button type='button'>Submit</button>
    </div>
    `
    modal.classList.remove('off');

})

// on paste event alert and preventDefault
modal.addEventListener('paste', function(evt) {
    alert("Please Type Your Email \nPasting is Not Allowed");
    evt.preventDefault();
})
// Mouseout on body alert 
let count = 0;
body.addEventListener('mouseleave', function(evt) {
    count++
    if(count <=  1 ) {
    modal.classList.remove('off');
    modal.innerHTML = `
    <p style= "color: rgba()">Wait! While We Have Your Attention</p>
    <div>    
        <input name='email' type='email' placeholder='Email' class='input'/>
        <button type='button'>Submit</button>
    </div>
    `
    }
})
// cancel copy on entire window
window.addEventListener('copy', function(evt) {
   const selection = document.getSelection();
   evt.preventDefault();
})
// cancel context menu on modal
modal.addEventListener('contextmenu', evt => {
    evt.preventDefault();
    console.log('context menu prevented');
})
// pointer cursor on mouseover h1;
h1.addEventListener('mouseover', evt => {
    h1.style.cursor = 'pointer';
})
