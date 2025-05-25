let latitude=0,longitude=0;
function getUrl()
{
let place1  =document.querySelector("#place").value  ;
let distric=document.querySelector("#distric").value;
let state  =document.querySelector("#state").value;
let country=document.querySelector("#country").value; 
const URL =`https://geocode.maps.co/search?q=${`${place1} + ${distric}+ ${state}+ ${country}`}&api_key=682c7d7c8c59a141692965laned9939`;
return URL;
}
async  function getlatlon()
{
   let response= await fetch(getUrl());
   let data=await response.json();
  
   const WHETHERURL=`https://api.open-meteo.com/v1/forecast?latitude=${data[0].lat}&longitude=${data[0].lon}&models=icon_seamless&current=temperature_2m,rain,wind_speed_10m,wind_direction_10m,surface_pressure,pressure_msl,weather_code,snowfall&forecast_days=7 `;
  return WHETHERURL;
};

let interval=document.querySelector("#intervalin")  ;        
let pressure_msl =document.querySelector("#pressure_mslin");      
let rain=document.querySelector("#rainin") ;             
let snowfall=document.querySelector("#snowfallin") ;         
let surface_pressure=document.querySelector("#surface_pressurein") ;
let temperature_2m=document.querySelector("#temperature_2min") ; 
let wind_direction_10m=document.querySelector("#wind_direction_10min");
let wind_speed_10m=document.querySelector("#wind_speed_10min") ;  

async function getwhether()
{
   let response= await getlatlon();
   console.log(response);
   let URLANSWER = await fetch(response);
   let data= await URLANSWER.json();
    interval.innerHTML=data.current.interval;
    pressure_msl.innerHTML=data.current.pressure_msl;
    rain.innerHTML=data.current.rain;
    snowfall.innerHTML=data.current.snowfall;
    surface_pressure.innerHTML=data.current.surface_pressure;
    temperature_2m.innerHTML=data.current.temperature_2m;
    wind_direction_10m.innerHTML=data.current.wind_direction_10m;
    wind_speed_10m.innerHTML=data.current.wind_speed_10m;
}


