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
    element.textContent = ""; // Clear box before starting

    function type() {
        if (index < text.length) {
            const char = text[index];
            
            if (char === '\n') {
                element.appendChild(document.createElement('br'));
            } else {
                element.appendChild(document.createTextNode(char));
            }

            index++;
            setTimeout(type, speed);
        } else {
            // Run the callback if one was provided
            if (callback) callback();
        }
    }
    type();
}

/* =========================================
   SCENE 1 SETUP & LOGIC
   ========================================= */

// 1. Element Selectors
const bigTitleElement = document.getElementById('bigTitle');
const quoteElement = document.getElementById('typewriter');
const dotsElement = document.querySelector('.dots');
const playButton = document.getElementById('playButton');

// 2. Content Strings
const bigTitleText = "POCKET FULL\nOF\nLIFE";
const quoteText = "''WHENEVER YOU FEEL LIKE CRITICIZING ANY ONE...\nJUST REMEMBER\nTHAT ALL PEOPLE IN THIS WORLD\nHAVEN'T HAD THE ADVANTAGES THAT YOU'VE HAD''\n-THE GREAT GATSBY";

// 3. Initial State
dotsElement.style.display = 'none';
bigTitleElement.textContent = bigTitleText;

// 4. Start the Sequence
// Fade in the Big Title after a delay
setTimeout(() => {
    bigTitleElement.classList.add('fade-in');
}, 26000);

// Start the Universal Engine for the Gatsby Quote
playTypewriter(quoteText, quoteElement, 150, () => {
    // CALLBACK: Everything in here happens ONLY after the typing ends
    dotsElement.style.display = 'inline';
    animateDots();

    // Show the button slowly
    setTimeout(() => {
        playButton.classList.add('fade-in');
    }, 5000);
});

/* =========================================
   HELPER FUNCTIONS
   ========================================= */

let dotCount = 0;
function animateDots() {
    dotCount = (dotCount % 3) + 1;
    dotsElement.textContent = '.'.repeat(dotCount);
    setTimeout(animateDots, 500);
}

// Scene Transition logic
playButton.addEventListener('click', () => {
    playButton.style.transform = "scale(0.9)";
    
    const fadeOverlay = document.querySelector('.fade-to-S2');
    fadeOverlay.classList.add('active');

    setTimeout(() => {
        window.location.href = 's2.html';
    }, 2000);
});