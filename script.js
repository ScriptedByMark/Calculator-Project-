function appendValue(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    const display = document.getElementById('result');
    
    // Check if the input is exactly "1+1"
    if (display.value === "1+1") {
        display.value = "I miss you";
    } else {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    }
}
