const temperatura = document.getElementById('from_temperature')
//temperatura.addEventListener('change', converter)

const temperaturaSaida = document.getElementById('from_temperature_convert')
//temperaturaSaida.addEventListener('change', tempSaida)
const tempView = document.getElementById('from')
const tempResult = document.getElementById('calc-result')
const textResult = document.getElementById('text-result')
const button = document.getElementById('btn')
const formula = document.getElementById('formula')
const resultsBox = document.getElementById('resultBox')

function converter() {
  if (temperatura.value == 'celsius') {
    console.log('celso1')
  } else if (temperatura.value == 'fahrenheit') {
    console.log('farinha1')
  } else if (temperatura.value == 'kelvin') {
    console.log('kevin2')
  }
}

function tempSaida() {
  if (temperaturaSaida.value == 'celsius') {
    console.log('celso2')
  } else if (temperaturaSaida.value == 'fahrenheit') {
    console.log('farinha2')
  } else if (temperaturaSaida.value == 'kelvin') {
    console.log('kevin2')
  }
}

function realizarConversao() {
  const input = document.getElementById('textBox').value

  if (temperatura.value == temperaturaSaida.value) {
    console.log('erro medidas iguais')
    alert('Medidas de temperatura igual')
  }

  // C PARA F
  if (temperatura.value == 'celsius') {
    if (temperaturaSaida.value == 'fahrenheit') {
      var result = (input * 9) / 5 + 32

      resultsBox.style.opacity = '1'
      formula.style.opacity = '1'
      tempView.innerHTML = `<p>${input} C</p>`

      textResult.innerHTML = `<p>é igual á</p>`
      tempResult.innerHTML = `<p>${result} F</p>`
      formula.innerHTML = `
      <h3>Formula</h3> 
      <p> (°C x 9/5) + 32 = °F<p>`
    }
  }

  // C PARA K
  if (temperatura.value == 'celsius') {
    if (temperaturaSaida.value == 'kelvin') {
      var result = parseInt(input) + 273.15
      resultsBox.style.opacity = '1'
      formula.style.opacity = '1'
      tempView.innerHTML = `<p>${input} C</p>`
      textResult.innerHTML = `<p>é igual á</p>`
      tempResult.innerHTML = `<p>${result} K</p>`
      formula.innerHTML = `
      <h3>Formula</h3> 
      <p> °C + 273,15 = K<p>`
    }
  } 
  
  // F PARA C
  else if (temperatura.value == 'fahrenheit') {
    if (temperaturaSaida.value == 'celsius') {
      var result = (input - 32) / 1.8
      var arrendondar = parseFloat(result.toFixed(1))
      resultsBox.style.opacity = '1'
      formula.style.opacity = '1'
      tempView.innerHTML = `<p>${input} F</p>`

      textResult.innerHTML = `<p>é igual á</p>`
      tempResult.innerHTML = `<p>${arrendondar} C</p>`

      formula.innerHTML = `
      <h3>Formula</h3> 
      <p> (°F -32) x 5/9 = °C<p>`
    }
  }

  // F PARA K
  if (temperatura.value == 'fahrenheit') {
    if (temperaturaSaida.value == 'kelvin') {
      var result = ((input - 32) * 5) / 9 + 273.15
      var arrendondar = parseFloat(result.toFixed(3))
      resultsBox.style.opacity = '1'
      formula.style.opacity = '1'
      tempView.innerHTML = `<p>${input} F</p>`

      textResult.innerHTML = `<p>é igual á</p>`
      tempResult.innerHTML = `<p>${arrendondar} K</p>`
    }
  }
  
  // K PARA C
  else if (temperatura.value == 'kelvin') {
    if (temperaturaSaida.value == 'celsius') {
      var result = input - 273.15
      resultsBox.style.opacity = '1'
      formula.style.opacity = '1'
      tempView.innerHTML = `<p>${input} K</p>`

      textResult.innerHTML = `<p>é igual á</p>`
      tempResult.innerHTML = `<p>${result} C</p>`
    }
  }

  // K PARA F
  if (temperatura.value == 'kelvin') {
    if (temperaturaSaida.value == 'fahrenheit') {
      var result = ((input - 273.15) * 9) / 5 + 32
      var arrendondar = parseFloat(result.toFixed(2))
      resultsBox.style.opacity = '1'
      formula.style.opacity = '1'
      tempView.innerHTML = `<p>${input} K</p>`

      textResult.innerHTML = `<p>é igual á</p>`
      tempResult.innerHTML = `<p>${arrendondar} F</p>`
    }
  }


}
function alternar() {
  var tempEntrada = temperatura.value
  temperatura.value = temperaturaSaida.value
  temperaturaSaida.value = tempEntrada
}
