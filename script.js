let data;
let weather={
    fetchWhether:function(city) {
        let xhr = new XMLHttpRequest();
        
        let link="https://api.openweathermap.org/data/2.5/weather?q=" +city +"&units=metric&appid=5cfd7588c1faa24390233500e64d3a98"
        
        xhr.open('GET',link,true);
        xhr.onload=function(){
            data=JSON.parse(this.response);
            console.log(this.status);
            if(this.status==404){
              let a=prompt(city+" Not Found!!"+" Enter Correct City Name:");
              document.getElementById('search').value=a;  
              weather.fetchWhether(a); 
            }
            else{

            
            let top=document.getElementById('favicon');
            top.setAttribute("href","https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png")
            document.getElementById('title').innerText="Weather in "+data.name+", "+data.sys.country;
            document.getElementById('state').innerText="Weather in "+data.name+", "+data.sys.country;
            document.getElementById('temperature').innerText=data.main.temp+"°";
            console.log(data.weather[0].icon);
            document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
            const str=data.weather[0].description;
            document.querySelector(".description").innerText=str.charAt(0).toUpperCase() + str.slice(1);
            document.querySelector(".humidity").innerText="Humidity: "+ data.main.humidity+"%";
            document.querySelector(".wind").innerText="Wind Speed: "+data.wind.speed+" km/hr";
            }
        }
        xhr.send();
        

        
        
    },
    
    search:function(){
        let city=document.getElementById('search').value;
        return city;    
    }
}

document.querySelector(".button").addEventListener("click", function () {
    console.log("button clicked");  
    let city=weather.search();
    weather.fetchWhether(city);
    
    
  });
  
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        let city=weather.search();
        weather.fetchWhether(city);
      }
    });

weather.fetchWhether("Chandigarh");