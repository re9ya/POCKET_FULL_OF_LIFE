const titleText = "''WHENEVER YOU FEEL LIKE CRITICIZING\nANY ONE...\nJUST REMEMBER\nTHAT ALL PEOPLE IN THIS WORLD\nHAVEN'T HAD THE ADVANTAGES THAT YOU'VE HAD''\n-F.S.FITZGERALD";
const bigTitleText = "POCKET FULL\nOF\nLIFE";
const titleElement = document.getElementById('typewriter');
const bigTitleElement = document.getElementById('bigTitle');
const cursor = document.querySelector('.cursor');
const dotsElement = document.querySelector('.dots');
const playButton = document.getElementById('playButton');
let titleIndex = 0;

dotsElement.style.display = 'none';
bigTitleElement.textContent = bigTitleText;

setTimeout(() => {
    bigTitleElement.classList.add('fade-in');
}, 30000);

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
            playButton.style.display = 'flex'; //makes it visible

            setTimeout(() => {
                playButton.classList.add('fade-in');
            }, 50);
        }, 8000);
    }
}

let dotCount = 0;
function animateDots(){
    dotCount = (dotCount % 3) + 1;
    dotsElement.textContent = '.'.repeat(dotCount);
    setTimeout(animateDots, 500);
}
playButton.addEventListener('click', () => {
    console.log("Loading...")

    playButton.classList.add('circle-active');

    setTimeout(() => {
        fadeToS2();
    }, 300);
})

function fadeToS2(){
    const fadeOverlay = document.querySelector('.fade-to-S2');
    fadeOverlay.classList.add('active');

setTimeout(() => {
    window.location.href = 's2.html';
    }, 2000);
}

typewriter();