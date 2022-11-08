import './less/index.less'

// Your code goes here!
// elements
const signUp = document.querySelectorAll(".destination .btn");
const headerIntro = document.querySelector('.intro');
const modal = document.createElement('div');


modal.classList.add('modal','off');
modal.innerHTML = 
   `
    <p>Join Us For 15% Off Expeditions!</p>
    <div>    
        <input name='email' type='email' placeholder='Email'/>
        <button type='button'>Submit</button>
    </div>
    `
    ;
headerIntro.before(modal);

// bring up modal when sign me up! button is clicked
Array.from(signUp).forEach( el => {
    el.addEventListener('click', function() {
        modal.classList.remove('off');
        }
    )
})

// make sticky nav smaller using wheel down, make it normal size on wheel up

// double click h1 for easter egg
const h1 = document.querySelector('h1');

h1.addEventListener('dblclick', evt => {
    if(h1.textContent !== 'Fun Boat') {
        h1.textContent = 'Fun Boat';
        document.querySelector('h2').textContent = 'Welcome To Fun Boat!';
        document.querySelector('header img').src = '/Img/hallstatt-g75c3f509e_1280.jpg'
    } else {
        h1.textContent = 'Fun Bus';
        document.querySelector('h2').textContent = 'Welcome To Fun Bus!';
        document.querySelector('header img').src = 'http://localhost:9000/img/fun-bus.jpg'
        console.log(document.querySelector('header img').height)
    }
})

// keydown to get rid of modal
function escKey(evt) {
    if(evt.key === 'Escape') {
        modal.classList.add('off');
    };
}
document.addEventListener('keydown', escKey);

// onload alert user to sign up for 15% off expedition pricing

// onpaste event preventdefault then alert, "PASTING NOT ALLOWED"

// Mouseout on body alert "wait, before you go: enjoy a 15% off code on us!", random number generator, and then push number to array of accepted codes.

// onMouseOver images in main content blur and then show pricing for expedition.

// animation start and animation end events
