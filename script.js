
let history = [];


function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

// Funkcija, lai dzēstu ievades lauku
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Funkcija, lai veiktu aprēķinu
function calculate() {
    const display = document.getElementById("display");
    try {
        const result = eval(display.value); // Pārveido ievadīto tekstu par aprēķinu
        if (!isNaN(result)) {
            history.push(`${display.value} = ${result}`);
            updateHistory();
            display.value = result;
        } else {
            display.value = "Error";
        }
    } catch {
        display.value = "Error";
    }
}

// Funkcija, lai atjauninātu vēstures sarakstu
function updateHistory() {
    const historyList = document.getElementById("history-list");
    historyList.innerHTML = ""; 
    history.forEach(entry => {
        const li = document.createElement("li");
        li.textContent = entry;
        historyList.appendChild(li);
    });
}


function clearHistory() {
    history = [];
    updateHistory();
}
