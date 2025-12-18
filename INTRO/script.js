    const titleText = "YOU\nNEVER KNOW\nWHAT SOMEONE MIGHT BE\nGOING THROUGH";
    const titleElement = document.getElementById('typewriter');
    const cursor = document.querySelector('.cursor');
    const dotsElement = document.querySelector('.dots');
    const playButton = document.getElementById('playButton');
    let titleIndex = 0;

    dotsElement.style.display = 'none';

function typewriter() {
    if (titleIndex < titleText.length){
        const char = titleText[titleIndex];

        if (char === '\n') {
          titleElement.insertBefore(document.createElement('br'), dotsElement);
        } else {
            titleElement.insertBefore(document.createTextNode(char), dotsElement);
        }

        titleIndex++;
        setTimeout(typewriter, 350);
    } else { 
     
        dotsElement.style.display = 'inline';
        animateDots();
    }
}

let dotCount = 0;
function animateDots(){
    dotCount = (dotCount % 3) + 1;
    dotsElement.textContent = '.'.repeat(dotCount);
    setTimeout(animateDots, 500);
}

typewriter();

function fadeToS2(){
    const fadeOverlay = document.querySelector('.fade-to-S2');
    fadeOverlay.classList.add('active');

    setTimeout(() => {
        document.querySelector('.sceen1').style.display = 'none';
        fadeOverlay.classList.remove('active');
    }, 15000);
}

setTimeout(fadeToS2, 15000);


playButton.addEventListener('click', () => {
    console.log("Loading")
    dotsElement.style.display = 'inline';
    animateDots();

    window.location.replace("s2.html");
});