const searchButton = document.querySelector('#button-addon2');
const inputKeyword = document.querySelector('.input-keyword');

const cobaFunction = () => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputKeyword.value+"&appid=1fe5f03e8b679377cbc41601289edfdd&units=metric")
        .then(response => response.json())
        .then(response => {
            let result = document.querySelector('.result')

                result.innerHTML = `<h2 style="line-height: 1;">${response.name}, ${response.sys.country}</h2>
                                    <h5 style="line-height: 1;">Suhu antara : ${response.main.temp_min}°С sampai ${response.main.temp_max}°С</h5>
                                    <h5>Kecepatan Angin : ${response.wind.speed} m/s</h5>
                                    <h5 style="line-height: 1;">Awan : ${response.clouds.all}%</h5>
                                    <h5 style="line-height: 1;">Koordinat : [${response.coord.lat}, ${response.coord.lon}]</h5>` 
                result.style.padding = "1rem";
                  
        })
    inputKeyword.value = null;

}

searchButton.addEventListener('click', function() {
    cobaFunction()
})


inputKeyword.addEventListener('keydown',function(e){
    if (e.keyCode == 13) {
        cobaFunction()
    }
})