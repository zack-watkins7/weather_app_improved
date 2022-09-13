// https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=60aa29f93c1f36ae13b3256561abe297

let weather = {
    API_key : '60aa29f93c1f36ae13b3256561abe297',
    fetchWeather : function (city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid="+ this.API_key
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city_name").innerText= "The Weather in "+ name;
    }
};