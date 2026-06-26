const display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function deletelast() {
    display.value = display.value.slice(0, -1);
    // slice(start, end) method use kore last character delete kora hoise.
    // 0 theke start koro last character er age porjonto nao
    // first character theke start kore  last character bad diye baki sob return kore, tai last digit delete hoy
}

function appendToDisplay(value) {
     if (display.value === "Error") {
        display.value = "";
    }
    display.value = display.value + value;
}

function calculate() {
    try {
        const expression = display.value.replace(/X/g, '*'); // Replace 'X' with '*' for multiplication,/g= global search  
        display.value = eval(expression); // eval() function use kore expression evaluate kora hoise  
    } 
    
    catch (error) {
        display.value = 'Math Error';
    }
}

// Keyboard support
document.addEventListener("keydown", (event) => {

    const key = event.key;

    // Number (0-9)
    if (!isNaN(key)) {
        appendToDisplay(key);
    }

    // Operators
    else if (key === "+" || key === "-" || key === "/" || key === "." || key === "%") {
        appendToDisplay(key);
    }

    // Multiplication (* -> X)
    else if (key === "*") {
        appendToDisplay("X");
    }

    // Enter or =
    else if (key === "Enter" || key === "=") {
        calculate();
    }

    // Backspace
    else if (key === "Backspace") {
        deletelast();
    }

    // Escape = Clear
    else if (key === "Escape") {
        clearDisplay();
    }

});