let weather = {
    API_key: "60aa29f93c1f36ae13b3256561abe297",
    getWeather: function (city) {
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q="
            + city 
            +",uk&APPID="
            + this.API_key
        )
            .then((response) => response.json())
            .then((data) => console.log(data));
    },
    displayWeather: function(data) {

    }
};