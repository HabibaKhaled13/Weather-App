let search=document.getElementById("searchInput");let btnInput=document.getElementById("btnInputSearch");let form=document.getElementById("formData");form.addEventListener("submit",function(e){e.preventDefault()});search.addEventListener("input",function(){weather(search.value)});async function weather(item){let dataBecome=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=32d9b51efba849fd852205358241512&q=${item}&days=3&aqi=yes&alerts=no`);let data=await dataBecome.json();currentWeather(data);forcasteWeather(data)}
weather("cairo");function currentWeather(data){const todayDate=new Date(data.current.last_updated);const dayName=todayDate.toLocaleDateString("en-US",{weekday:"long"});const dayNumber=new Date(data.current.last_updated).getDate();const monthName=todayDate.toLocaleDateString("en-US",{month:"long"});let cardWeather=` <div class="card card-bg border-0">
            <div
              class="card-header d-flex align-items-center justify-content-between border-0"
            >
              <small class="little-title"> ${dayName}</small>
              <small class="little-title">${dayNumber}${monthName}</small>
            </div>

            <div class="card-body">
              <h2 class="h5">${data.location.name}</h2>
              <h3 class="card-title text-white">${data.current.temp_c}<sup>o</sup>C</h3>
              <img src="https:${data.current.condition.icon}" alt="icon" width="90" />
              <span class="small-title d-block my-4">${data.current.condition.text}</span>
              <span class="me-4"
                ><img
                  src="img/icon-umberella.png"
                  alt="umberella icon"
                  class="me-1"
                />20%</span
              >

              <span class="me-4"
                ><img
                  src="img/icon-wind.png"
                  alt="wind icon"
                  class="me-1"
                />18km/h</span
              >

              <span class="me-4"
                ><img
                  src="img/icon-compass.png"
                  alt="20%"
                  class="me-1"
                />East</span
              >
            </div>
          </div>`;const weatherContainer=document.getElementById("weather-container");weatherContainer.innerHTML=cardWeather}
function forcasteWeather(data){let forcastdayInfo=data.forecast.forecastday;let comingDays="";for(let i=1;i<forcastdayInfo.length;i++){let todayDate=new Date(forcastdayInfo[i].date);let dayName=todayDate.toLocaleDateString("en-US",{weekday:"long"});let cardClass=i%2===0?"card-bg":"card-bg-sec";comingDays+=`

   <div class="card ${cardClass} border-0">
            <div class="card-header border-0 text-center">
                  <small class="title-two">${dayName}</small>
            </div>

            <div class="card-body-sec text-center">
              <img src="https:${forcastdayInfo[i].day.condition.icon}" alt="" width="48" />
              <h2 class="h5 text-center text-white">${forcastdayInfo[i].day.maxtemp_c}</h2>
              <h3 class="h6 text-center text-white">${forcastdayInfo[i].day.mintemp_c}</h3>
             <span class="small-title d-block my-4">${data.current.condition.text}</span>
            </div>
          </div>
        `}
const weatherContainerTwo=document.getElementById("weather-container");weatherContainerTwo.innerHTML+=comingDays}