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
    document.querySelector(".city_name h2").innerText= "Weather in "+ name;
    document.querySelector(".temperature h3").innerText= temp + 'k';
    document.querySelector(".description").innerText= description;
    document.querySelector('.icon').src= "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector('.humidity').innerText= "Humidity: "+ humidity+ '%';
    document.querySelector('.speed').innerText= "Windspeed: "+ speed + "mph";
    document.querySelector('.weather').classList.remove("loading");
    },
    search : function(){
        this.fetchWeather(document.querySelector('.search-bar').value);
    },
};

document.querySelector('.search button').addEventListener("click", function(){
    weather.search();
});

document.querySelector('.search-bar').addEventListener("keyup", function(event){
    if(event.key == 'Enter'){
        weather.search();
    }
})