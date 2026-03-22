const apiKey = "a58e551ccd5a0ece772ecd9cd4b14ceb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbtn = document.querySelector(".search button");
const searchbox = document.querySelector(".search input");
const weather_img = document.querySelector(".weather-icon");




async function getWeather(city){
    const resposne = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(resposne.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
let data = await resposne.json();
    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

   if(data.weather[0].main == "Clouds"){
    weather_img.src = "images/clouds.png"
   }
   else if(data.weather[0].main == "Clear"){
    weather_img.src = "images/clear.png"
   }
   else if(data.weather[0].main == "Drizzle"){
    weather_img.src = "images/drizzle.png"
   }
   else if(data.weather[0].main == "Rain"){
    weather_img.src = "images/rain.png"
   }
   else if(data.weather[0].main == "Snow"){
    weather_img.src = "images/snow.png"
   }
   else if(data.weather[0].main == "Mist"){
    weather_img.src = "images/mist.png"
   }
   document.querySelector(".weather").style.display = "block";
   document.querySelector(".error").style.display = "none";

    }
    
}

searchbtn.addEventListener("click" ,() => {
        getWeather(searchbox.value);
});


