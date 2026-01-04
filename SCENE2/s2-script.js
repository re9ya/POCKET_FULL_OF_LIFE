currentScript = [
    {
        bg: '../Images/BG-HomeEnterance.png',
        name: "Tico",
        text: "Hello! Welcome in!..."
    },
    {
        bg: '../Images/BG-HomeEnterance.png',
        name: "Tico", 
        text: "Would you like a tutorial on how to play...?"
    },
    {
        choices: [
            // Added comma at the end of this line 👇
            {text: "No thanks", target: 'No_path'}, 
            {text: "Yes, please!", target: 'Yes_path'}
        ]
    }
];

// IMPORTANT: We remove 'const' so 'branches' becomes a global variable.
// This ensures engine.js can see it.
branches = {
    No_path: [
        { name: "Tico", text: "Welcome Back then!" },
        // You will need to add logic here later to change scene
    ],
    Yes_path: [
        { name: "Tico", text: "Welcome to my story!" },
        // Tutorial logic goes here
    ]
};

window.onload = () => {
    renderLine();
};