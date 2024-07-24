
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}

const startTime = Date.now(); // Captura o tempo inicial em ms

const scoreLabelValue = document.querySelector('.score-value')

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = pipePosition + 'px';

        mario.style.animation = 'none';
        mario.style.bottom = marioPosition + 'px';

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }

    const elapsedMilliseconds = Date.now() - startTime; // Calcula o tempo decorrido em ms
    const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000); // Converte para segundos e arredonda para baixo
    scoreLabelValue.textContent = elapsedSeconds;

}, 10);


document.addEventListener('keydown', jump)