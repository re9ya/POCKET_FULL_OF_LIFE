alert("ENGINE.JS HAS LOADED!");

let stepIndex = 0;
let currentScript = [];

function playTypewriter(text, element, speed = 50, callback = null) {
    console.log("Typewriter starting on:", text);
    let index = 0;
    element.innerHTML = ""; 
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

function renderLine() {
    console.log("RenderLine called for step:", stepIndex);
    const line = currentScript[stepIndex];
    const typewriterElement = document.getElementById('typewriter');
    
    if (!typewriterElement) {
        alert("ERROR: Could not find element with id='typewriter'!");
        return;
    }

    // Background logic
    if (line.bg) {
        document.body.style.backgroundImage = `url('${line.bg}')`;
    }

    // Name Box logic
    const nameTag = document.getElementById('name-tag');
    const nameBox = document.querySelector('.name-box');
    if (nameTag && nameBox) {
        nameTag.textContent = line.name || "";
        nameBox.style.display = line.name ? "block" : "none";
    }

    playTypewriter(line.text, typewriterElement, 50);
}

// Click to progress
document.addEventListener('click', () => {
    if (currentScript.length > 0 && stepIndex < currentScript.length - 1) {
        stepIndex++;
        renderLine();
    }
});