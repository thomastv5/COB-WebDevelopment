function openTab(tabId) {
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
}

function convertLength() {
    var lengthInput = parseFloat(document.getElementById('lengthInput').value);
    var lengthFrom = document.getElementById('lengthFrom').value;
    var lengthTo = document.getElementById('lengthTo').value;
    var lengthResult = document.getElementById('lengthResult');

    if (lengthFrom === 'meter' && lengthTo === 'centimeter') {
        lengthResult.value = lengthInput * 100;
    } else if (lengthFrom === 'meter' && lengthTo === 'kilometer') {
        lengthResult.value = lengthInput / 1000;
    } else if (lengthFrom === 'centimeter' && lengthTo === 'meter') {
        lengthResult.value = lengthInput / 100;
    } else if (lengthFrom === 'centimeter' && lengthTo === 'kilometer') {
        lengthResult.value = lengthInput / 100000;
    } else if (lengthFrom === 'kilometer' && lengthTo === 'meter') {
        lengthResult.value = lengthInput * 1000;
    } else if (lengthFrom === 'kilometer' && lengthTo === 'centimeter') {
        lengthResult.value = lengthInput * 100000;
    } else {
        lengthResult.value = lengthInput;
    }
}

function convertWeight() {
    var weightInput = parseFloat(document.getElementById('weightInput').value);
    var weightFrom = document.getElementById('weightFrom').value;
    var weightTo = document.getElementById('weightTo').value;
    var weightResult = document.getElementById('weightResult');

    if (weightFrom === 'kilogram' && weightTo === 'gram') {
        weightResult.value = weightInput * 1000;
    } else if (weightFrom === 'kilogram' && weightTo === 'pound') {
        weightResult.value = weightInput * 2.20462;
    } else if (weightFrom === 'kilogram' && weightTo === 'ounce') {
        weightResult.value = weightInput * 35.274;
    } else if (weightFrom === 'gram' && weightTo === 'kilogram') {
        weightResult.value = weightInput / 1000;
    } else if (weightFrom === 'gram' && weightTo === 'pound') {
        weightResult.value = weightInput / 453.592;
    } else if (weightFrom === 'gram' && weightTo === 'ounce') {
        weightResult.value = weightInput / 28.35;
    } else if (weightFrom === 'pound' && weightTo === 'kilogram') {
        weightResult.value = weightInput / 2.20462;
    } else if (weightFrom === 'pound' && weightTo === 'gram') {
        weightResult.value = weightInput * 453.592;
    } else if (weightFrom === 'pound' && weightTo === 'ounce') {
        weightResult.value = weightInput * 16;
    } else if (weightFrom === 'ounce' && weightTo === 'kilogram') {
        weightResult.value = weightInput / 35.274;
    } else if (weightFrom === 'ounce' && weightTo === 'gram') {
        weightResult.value = weightInput * 28.35;
    } else if (weightFrom === 'ounce' && weightTo === 'pound') {
        weightResult.value = weightInput / 16;
    } else {
        weightResult.value = weightInput;
    }
}

function convertTemperature() {
    var celsius = parseFloat(document.getElementById('celsius').value);
    var fahrenheit = parseFloat(document.getElementById('fahrenheit').value);

    if (!isNaN(celsius)) {
        var outputFahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').value = outputFahrenheit.toFixed(2);
    }

    if (!isNaN(fahrenheit)) {
        var outputCelsius = (fahrenheit - 32) * 5/9;
        document.getElementById('celsius').value = outputCelsius.toFixed(2);
    }
}

openTab('lengthTab');
