
let text = "Добро пожаловать..."
let i = 0; 
let speed = 100;


function show() {
    if (i< text.length) {
        document.querySelector("#par").textContent += text.charAt(i);
        i++;
        setTimeout(show, speed);
    }
} 

show();