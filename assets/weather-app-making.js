const apiKeys='0af4ea99dfa6aa2642267dd8ad7760be'


const apiURL='https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const searchBox=document.getElementById('search')
  const btn=document.getElementById('btn')


const checkWeather = async (city)=>{
  

  const response = await fetch(apiURL + city +`&appid=${apiKeys}`)
  const data = await response.json()

  //=====selection====================>
    const image =document.getElementById('images')
    if(data.weather[0].description=='overcast clouds'){
     image.src='assets/Images/cloud.png'
    }
    else if(data.weather[0].description=='drizzle'){
       image.src='assets/Images/rain.webp'
    }
    else if(data.weather[0].description=='clear sky'){
      image.src='assets/Images/sunny.webp'
   }
   else if(data.weather[0].description=='broken clouds'){
    image.src='assets/Images/storms.webp'
   }
  else if(data.weather[0].description=='haze'){
    image.src='assets/Images/haze.webp'
  }
  else if(data.weather[0].description=='heavy rain'){
    image.src='assets/Images/break-cloud.png'
  }
  else if(data.weather[0].description=='mist'){
    image.src='assets/Images/snow.webp'
  }
  else if(data.weather[0].description=='scattered clouds'){
    image.src='assets/Images/breeze.png'
  }
  
    //==========================================>
    const temp = document.getElementById('temp').innerHTML= Math.round(data.main.temp )+'&#176;C'
    const cityName = document.getElementById('city-name').innerHTML=data.name
    const feels_like = document.getElementById('feels-like').innerHTML=data.main.feels_like +'&#176;C'
    const wind = document.getElementById("wind-speed").innerHTML=data.wind.speed +' km/h'

  console.log(data)
}

btn.addEventListener('click',()=>{
  checkWeather(searchBox.value)
})


