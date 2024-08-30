function convertTemperature() {
    let temperature = parseFloat(document.getElementById('temperature').value);
    let unit = document.getElementById('unit').value;
    let convertTo = document.getElementById('convert-to').value;
    let result = document.getElementById('result');
    
    if (isNaN(temperature)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    let convertedTemp;

    if (unit === convertTo) {
        convertedTemp = temperature;
    } else if (unit === "celsius" && convertTo === "fahrenheit") {
        convertedTemp = (temperature * 9/5) + 32;
    } else if (unit === "celsius" && convertTo === "kelvin") {
        convertedTemp = temperature + 273.15;
    } else if (unit === "fahrenheit" && convertTo === "celsius") {
        convertedTemp = (temperature - 32) * 5/9;
    } else if (unit === "fahrenheit" && convertTo === "kelvin") {
        convertedTemp = (temperature - 32) * 5/9 + 273.15;
    } else if (unit === "kelvin" && convertTo === "celsius") {
        convertedTemp = temperature - 273.15;
    } else if (unit === "kelvin" && convertTo === "fahrenheit") {
        convertedTemp = (temperature - 273.15) * 9/5 + 32;
    }

    result.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} °${convertTo.charAt(0).toUpperCase()}`;
}
