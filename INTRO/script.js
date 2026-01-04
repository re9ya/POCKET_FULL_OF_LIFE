/* =========================================
   THE UNIVERSAL TYPEWRITER ENGINE
   ========================================= */
/**
 * @param {string} text - The string to type out
 * @param {HTMLElement} element - The HTML element where text appears
 * @param {number} speed - Speed in ms (default 50)
 * @param {Function} callback - Optional function to run when finished
 */
function playTypewriter(text, element, speed = 50, callback = null) {
    let index = 0;
    element.innerHTML = ""; // Clear box before starting

    //Cursor
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    cursor.innerHTML = '|';
    element.appendChild(cursor);

    function type() {
        if (index < text.length) {
            const char = text[index];
            
            if (char === '\n') {
                element.insertBefore(document.createElement('br'), cursor);
            } else {
                element.insertBefore(document.createTextNode(char), cursor);
            }
            index++;
            setTimeout(type, speed);
        } else {
            if (callback) callback(cursor);
        }
    }
    type();
}
//Scene 1 Set Up
//Element Selectors
const bigTitleElement = document.getElementById('bigTitle');
const quoteElement = document.getElementById('typewriter');
const playButton = document.getElementById('playButton');

//Texts
const bigTitleText = "POCKET FULL OF LIFE"
const quoteText = "''WHENEVER YOU FEEL LIKE CRITICIZING ANY ONE...\nJUST REMEMBER\nTHAT ALL PEOPLE IN THIS WORLD\nHAVEN'T HAD THE ADVANTAGES THAT YOU'VE HAD''\n-THE GREAT GATSBY";

//Fade in the Big Title after a delay
setTimeout(() => {
    bigTitleElement.classList.add('fade-in');
}, 26000);

//Quote
playTypewriter(quoteText, quoteElement, 150, (cursor) => {
    const dotsSpan = document.createElement('span');
    dotsSpan.className = 'dots';
    quoteElement.insertBefore(dotsSpan, cursor);

    animateDots(dotsSpan);

    //Fade in Button
    setTimeout(() => {
        playButton.classList.add('fade-in');
    }, 5000);
});

//Dot Sequence
function animateDots(targetElement) {
    let dotCount = 0;
    function update() {
        dotCount = (dotCount % 3) + 1;
        targetElement.textContent = '.'.repeat(dotCount);
        setTimeout(update, 500);
    }
    update();
}
// Scene Transition
playButton.addEventListener('click', () => {
    playButton.style.transform = "scale(0.9)";
    
    const fadeOverlay = document.querySelector('.fade-to-S2');
    fadeOverlay.classList.add('active');

    setTimeout(() => {
        window.location.href = "../SCENE2/s2.html";
    }, 2000);
});