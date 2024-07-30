const buttons = document.querySelectorAll("button");
const sounds = {
    "w": 'sounds/tom-1.mp3',
    "a": 'sounds/tom-2.mp3',
    "s": 'sounds/tom-3.mp3',
    "d": 'sounds/tom-4.mp3',
    "j": 'sounds/snare.mp3',
    "k": 'sounds/crash.mp3',
    "l": 'sounds/kick-bass.mp3'
};

buttons.forEach(button => {
    button.addEventListener("click", drumClick);
});

document.addEventListener("keydown", function(event) {
    drumClick(event);
});



function drumClick(event) {
    const buttonClass = event.type === "click" ? event.target.classList[0] : event.key;
    for (let rk in sounds) {
        if (buttonClass === rk) {
            const audio = new Audio(sounds[rk]);
            audio.play();
            break;
        }
    }
}
