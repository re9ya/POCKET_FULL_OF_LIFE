    const titleText = "YOU NEVER KNOW\nWHAT SOMEONE\n MIGHT BE GOING THROUGH";
    const titleElement = document.getElementById('typewriter');
    const cursor = document.querySelector('.cursor');
    const dotsElement = document.querySelector('dots')
    let titleIndex = 0;

    dotsElement.style.display = 'none';

function typewriter() {
    if (titleIndex < titleText.length){
        const char = titleText[titleIndex];

        if (char === '\n') {
          titleElement.insertBefore(document.createElement('br'), cursor);
        } else {
            titleElement.insertBefore(document.createTextNode(char), cursor);
        }

        titleIndex++;
        setTimeout(typewriter, 100);
    } else { 
        cursor.remove();

        dotsElement.style.display = 'inline';
        animatedDots();
    }
}

let dotCount = 0;
function animateDots(){
    dotCount = (dotCount % 3) + 1;
    dotsElement.textContent = '.'.repeat(dotCount);
    setTimeout(animateDots, 800);
}

typewriter();