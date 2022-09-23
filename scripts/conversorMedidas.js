const medidaEntrada = document.getElementById('unitEntry')
//medidaEntrada.addEventListener('change', entrada)

const medidaConverter = document.getElementById('unitConvert')
//medidaConverter.addEventListener('change', saida)

const entryUnitView = document.getElementById('from')
const unitEqual = document.getElementById('text-result')
const convertedUnitView = document.getElementById('calc-result')

function convert() {
  const inputValue = document.getElementById('entryUnit').value
  if (medidaEntrada.value == medidaConverter.value) {
    alert('Erro medidas iguais.')
  }
  if (medidaEntrada.value == 'milimetro') {
    if (medidaConverter.value == 'centimetro') {
      const result = inputValue / 10

      entryUnitView.innerHTML = `<p>${inputValue} mm</p>`
      unitEqual.innerHTML = `<p>equivale à</p>`
      convertedUnitView.innerHTML = `<p>${result} cm</p>`
    }
  }
  if (medidaEntrada.value == 'milimetro') {
    if (medidaConverter.value == 'metro') {
      const result = inputValue / 1000

      entryUnitView.innerHTML = `<p>${inputValue} mm</p>`
      unitEqual.innerHTML = `<p>equivale à</p>`
      convertedUnitView.innerHTML = `<p>${result} m</p>`
    }
  }
  if (medidaEntrada.value == 'milimetro') {
    if (medidaConverter.value == 'quilometro') {
      const result = inputValue / 1000000

      entryUnitView.innerHTML = `<p>${inputValue} mm</p>`
      unitEqual.innerHTML = `<p>equivale à</p>`
      convertedUnitView.innerHTML = `<p>${result} km</p>`
    }
  }
  if (medidaEntrada.value == 'milimetro') {
    if (medidaConverter.value == 'jarda') {
      const result = inputValue / 914.4

      entryUnitView.innerHTML = `<p>${inputValue} mm</p>`
      unitEqual.innerHTML = `<p>equivale à</p>`
      convertedUnitView.innerHTML = `<p>${result.toFixed(8)} m</p>`
    }
  }
  if (medidaEntrada.value == 'milimetro') {
    if (medidaConverter.value == 'pe') {
      const result = inputValue / 304.8

      entryUnitView.innerHTML = `<p>${inputValue} mm</p>`
      unitEqual.innerHTML = `<p>equivale à</p>`
      convertedUnitView.innerHTML = `<p>${result.toFixed(8)} m</p>`
    }
  }
  if (medidaEntrada.value == 'milimetro') {
    if (medidaConverter.value == 'milhaNautica') {
    }
  }
}
