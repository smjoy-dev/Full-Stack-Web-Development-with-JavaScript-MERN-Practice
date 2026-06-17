function generateColor() {
    const colorInput = document.getElementById('colorInput').value;
    const colorDisplay = document.getElementById('colorDisplay');
        colorDisplay.style.backgroundColor = colorInput;
    }