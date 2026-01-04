alert("S2.JS STARTING...");

// DO NOT put "let" or "const" here. 
// We are just filling the variable already made in engine.js
currentScript = [
    {
        bg: '../Images/BG-HomeEnterance.png',
        name: "Tico",
        text: "Hello! Welcome in!"
    },
    {
        bg: '../Images/BG-HomeEnterance.png',
        name: "", 
        text: "The house smells faintly of old paper and graphite."
    },
    {
        bg: '../Images/BG-HomeEnterance.png',
        name: "Tico",
        text: "Make yourself at home!"
    }
];

alert("SCRIPT DATA LOADED. TRIGGERING RENDER...");

// Start the engine
if (typeof renderLine === "function") {
    renderLine();
} else {
    alert("CRITICAL ERROR: s2.js cannot find renderLine in engine.js!");
}