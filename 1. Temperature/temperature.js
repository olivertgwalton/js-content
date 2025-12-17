function celsiusToFahrenheit(celsius) {
  celsius = parseFloat(celsius);
  fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
  fahrenheit = parseFloat(fahrenheit);
  celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

function displayTemperature(temperature, option) {
  if (option === "celsius") {
    const fahrenheit = celsiusToFahrenheit(temperature);
    return `The temperature is ${temperature} degrees celsius, ${fahrenheit} degrees fahrenheit.`;
  } else if (option === "fahrenheit") {
    const celsius = fahrenheitToCelsius(temperature);
    return `The temperature is ${celsius} degrees celsius, ${temperature} degrees fahrenheit.`;
  } else {
    return "Invalid temperature option provided.";
  }
}

module.exports = {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  displayTemperature,
};
