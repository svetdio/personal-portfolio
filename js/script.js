const texts = ["Front End Developer", "Full Stack Developer", "Mobile Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;

(function type() {
    currentText = texts[count];

    if (isDeleting) {
        letter = currentText.slice(0, --index);
    } else {
        letter = currentText.slice(0, ++index);
    }

    document.getElementById("typing-text").textContent = letter;

    let typingSpeed = 50; // Typing speed
    let erasingSpeed = 50; // Erasing speed

    if (!isDeleting && letter.length === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1000); // Pause before erasing starts
    } else if (isDeleting && letter.length === 0) {
        isDeleting = false;
        count++;
        if (count === texts.length) {
            count = 0;
        }
        setTimeout(type, 100); // Pause before typing starts again
    } else {
        setTimeout(type, isDeleting ? erasingSpeed : typingSpeed);
    }
})();
