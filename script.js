const key = 'eeb5c2bfd9fa8cab61216558bf1c414f'

function presentationdata(dados) {

    document.querySelector('.text-city').innerHTML = `climate in ${dados.name}`
    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + '°C'
    document.querySelector('.text-description').innerHTML = dados.weather[0].description
    document.querySelector('.info-humidity').innerHTML = dados.main.humidity + '%'
    document.querySelector('.info-wind').innerHTML = dados.wind.speed + 'km/h';
    document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

 async function SearchCity (cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&units=metric`).then(resposta => resposta.json())
    
    presentationdata(dados)
}

function cliqueiNoBotao () {
    const cidade = document.querySelector('.input-city').value

    SearchCity(cidade)
}