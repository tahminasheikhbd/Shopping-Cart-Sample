window.addEventListener('DOMContentLoaded',()=>{


  
const apiKeys ='0af4ea99dfa6aa2642267dd8ad7760be'

  const apiUrl ='https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const searchBox= document.getElementById('search')
const btn = document.getElementById('btn')



const getWeatherUpdate = async(city)=>{
const response= await fetch(apiUrl + city + `&appid=${apiKeys}`)
const data = await response.json()
//======================================================>
  try {
  const image = document.getElementById('image')
  if(data.weather[0].description=='haze'){
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
  const description= document.getElementById('description').innerHTML=data.weather[0].description
  const location = document.getElementById('location').innerHTML=data.name;
  const temp= document.getElementById('temp').innerHTML =Math.round(data.main.temp) +'&#176;C'
  const maxTemp = document.getElementById('max-temp').innerHTML= Math.round(data.main.temp_max) +'&#176;C'
  const minTemp = document.getElementById('min-temp').innerHTML= Math.round(data.main.temp_min) +'&#176;C'

console.log(data)
  } catch (error) {
throw new Error(error)
  }
}

btn.addEventListener('click',(e)=>{
  e.preventDefault()
  getWeatherUpdate(searchBox.value)
})























})

