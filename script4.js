// Function to append character to display
function appendCharacter(character) {
    document.getElementById('display').value += character;
}

// Function to clear display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to delete last character
function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
