gsap.from("#container", {delay: .2, duration: 1, scale: 1.2, opacity: 0})

const input = document.querySelector('#quess');
const button = document.querySelector('#btn');
const answer = Math.floor(Math.random()*20)+1;

button.addEventListener('click', play);

function play() {
    const userNumber = document.querySelector('#quess').value;
    if (userNumber < 1 || userNumber > 20) {
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter a number between 1 and 20!',
        })
    }

    else if ( isNaN (userNumber)) {
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You must enter a number!',
        })
    }

    else {
        if (userNumber < answer) {
            let timerInterval
            Swal.fire({
                title: 'Try a higher number! ',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
                }, 100)
                },
                willClose: () => {
                clearInterval(timerInterval)
                }
                })
                }

        else if (userNumber > answer) {
            let timerInterval
            Swal.fire({
                title: 'Try a lower number! ',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
                }, 100)
                },
                willClose: () => {
                clearInterval(timerInterval)
                }
                })
        }  

        else {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Victory!!!',
                showConfirmButton: false,
                timer: 2500
            })
        }
    }
}

input.addEventListener('keypress', function(e) {
    if (e.keyCode === 'Enter') {
        play();
    }
})

let text = "Play";
let i = 0;
let speed = 800;

function type() {
    if (i < text.length) {
        document.querySelector('#btn').textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}

type();
