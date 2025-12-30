const titleText = "''WHENEVER YOU FEEL LIKE CRITICIZING ANY ONE...\nJUST REMEMBER\nTHAT ALL PEOPLE IN THIS WORLD\nHAVEN'T HAD THE ADVANTAGES THAT YOU'VE HAD''\n-THE GREAT GATSBY";
const bigTitleText = "POCKET FULL\nOF\nLIFE";
const titleElement = document.getElementById('typewriter');
const bigTitleElement = document.getElementById('bigTitle');
const cursor = document.querySelector('.cursor');
const dotsElement = document.querySelector('.dots');
const playButton = document.getElementById('playButton');
let titleIndex = 0;

dotsElement.style.display = 'none';
bigTitleElement.textContent = bigTitleText; /*Fade in big title*/ */

setTimeout(() => {
    bigTitleElement.classList.add('fade-in');
}, 26000);

function typewriter() {
    if (titleIndex < titleText.length){
        const char = titleText[titleIndex];

        if (char === '\n') {
          titleElement.insertBefore(document.createElement('br'), dotsElement);
        } else {
            titleElement.insertBefore(document.createTextNode(char), dotsElement);
        }

        titleIndex++;
        setTimeout(typewriter, 150);
    } else { 
        dotsElement.style.display = 'inline';
        animateDots();

        setTimeout(() => {
                playButton.classList.add('fade-in');
            }, 5000); /*fade in button*/
    }
}

let dotCount = 0;
function animateDots(){
    dotCount = (dotCount % 3) + 1;
    dotsElement.textContent = '.'.repeat(dotCount);
    setTimeout(animateDots, 500);
}
playButton.addEventListener('click', () => {
        playButton.style.transform = "scale(0.9)";
        fadeToS2();
})

function fadeToS2(){
    const fadeOverlay = document.querySelector('.fade-to-S2');
    fadeOverlay.classList.add('active');

setTimeout(() => {
    window.location.href = 's2.html';
    }, 2000);
}

typewriter();