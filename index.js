const ApiKey="7afa0b1299c75a58e0abfa19e6e087c1";
// const APIURL="https://api.openweathermap.org/data/2.5/weather?units=metriclat&{lat}&lon={Afghanistan}";
    const APIURL="https://api.openweathermap.org/data/2.5/weather?units=metriclat&q=";
    // const apiurl="api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={Kabul}"


    const searchBox=document.querySelector(".search input") ;
    const searchButton=document.querySelector(".search button")
    const weatherIcon=document.querySelector(".weather-icon") ;

    async function checkweather(city){
    const response=await fetch(APIURL + city + `&appid=${ApiKey}`);
     if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
     }
     else
     {let data=await response.json();
   
    
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=data.main.temp + "°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity  + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
         if(data.weather[0].main=="Clouds"){
             weatherIcon.src="image/clouds.png";
         }
         else if(data.weather[0].main =="Clear")
         {
            weatherIcon.src="image/clear.png ";
         }
         else if(data.weather[0].main =="Rain")
         {
            weatherIcon.src="image/Rain (2).png";
         }
         else if(data.weather[0].main =="Drizzle")
         {
            weatherIcon.src="image/drizzle.png";
         }
         else if(data.weather[0].main =="Mist")
         {
            weatherIcon.src="image/Mist (2).png";
         }
         else if(data.weather[0].main =="Snow")
         {
            weatherIcon.src="image/snow.png";
         }
    
         document.querySelector(".weather").style.display="block";}
    
   
}
  searchButton.addEventListener("click", ()=>{
    checkweather(searchBox.value); 
  });
