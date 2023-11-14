document.getElementById("yearly").innerHTML = "Yearly maxmimal temperature: "+"<br />"+"Yearly minimal temperature: "+"<br />"+"Average day time: "+"<br />"+"Average daily precipitations: "+"<br />"+"Average daily rain: "+"<br />"+"Average daily snowfall: "+"<br />"+"Average daily precipitation hours: ";
function compactDate(CID){
	let aux = "", i = 0;
    while(CID[i] != 'T'){
    	aux = aux + CID[i];
    	i++;
    }
	return aux;
}
function convertToDateNumber(a){
	const datea = Number(a[12]+a[13]);
    return datea;
}
function getWeather(){
  const currentDate = new Date(); 
  const CID = currentDate.toISOString();
  let valuelong = document.getElementById("longitude").value;
  let valuelat = document.getElementById("latitude").value;
  if((valuelat != "") && (valuelong != "") && ((-90 <= valuelat) && (valuelat <= 90)) && ((-180 <= valuelong) && (valuelong <= 180))){
      const temp = new XMLHttpRequest();
      temp.onload = function() {
            const myObj = JSON.parse(temp.responseText);
            let maxtemp = -10000, mintemp = 10000, avg_daytime = 0, avg_precip_sum = 0, avg_rain = 0, avg_snowfall = 0, avg_precip_hours = 0, i;
            for(i in myObj.daily.temperature_2m_max){
              if((maxtemp < myObj.daily.temperature_2m_max[i]) && (myObj.daily.temperature_2m_max[i] != null)){
                maxtemp = myObj.daily.temperature_2m_max[i];
              }
              if((mintemp > myObj.daily.temperature_2m_min[i]) && (myObj.daily.temperature_2m_min[i] != null)){
                mintemp = myObj.daily.temperature_2m_min[i];
              }
              avg_daytime = avg_daytime + Number(myObj.daily.sunset[i][11]+myObj.daily.sunset[i][12]) - Number(myObj.daily.sunrise[i][11]+myObj.daily.sunrise[i][12]);
              avg_precip_sum = avg_precip_sum + myObj.daily.precipitation_sum[i];
              avg_rain = avg_rain + myObj.daily.rain_sum[i];
              avg_snowfall = avg_snowfall + myObj.daily.snowfall_sum[i];
              avg_precip_hours = avg_precip_hours + myObj.daily.precipitation_hours[i];
            }
            avg_daytime = avg_daytime / i;
            avg_precip_sum = avg_precip_sum / i;
            avg_rain = avg_rain / i;
            avg_snowfall = avg_snowfall / i;
            avg_precip_hours = avg_precip_hours / i;
            document.getElementById("yearly").innerHTML = "Yearly maxmimal temperature: "+maxtemp+myObj.daily_units.temperature_2m_max+"<br />"+"Yearly minimal temperature: "+mintemp+myObj.daily_units.temperature_2m_min+"<br />"+"Average day time: "+avg_daytime+"<br />"+"Average daily precipitations: "+avg_precip_sum+"<br />"+"Average daily rain: "+avg_rain+"<br />"+"Average daily snowfall: "+avg_snowfall+"<br />"+"Average daily precipitation hours: "+avg_precip_hours;//...         
      }
      temp.open("GET", "https://archive-api.open-meteo.com/v1/era5?latitude="+valuelat+"&longitude="+valuelong+"&start_date=2023-01-01&end_date="+compactDate(CID)+"&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,snowfall_sum,precipitation_hours,sunrise,sunset&timezone=auto");
      temp.send();
    }else{
      alert("WRONG INPUT!");
      //document.getElementById("yearly").innerHTML = Number(CID[11]);
    }
}