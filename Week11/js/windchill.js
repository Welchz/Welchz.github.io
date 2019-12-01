function windChill(){
 var temperature = document.getElementById(temp).innerHTML;
  var windSpeed = document.getElementById(wind).innerHTML;
  var windSpot = document,getElementById(windChill);
var windchill = null;
 if (temperature < 51 && windSpeed > 4.7){
   windchill = 35.74 + (0.6215*temperature) - (35.75*windSpeed)+(0.4275*temperature*(windSpeed^0.16));
   windSpot.innerHTML = ("Wind Chill: " + windchill);
 }
 else {
   windSpot.innerHTML = ("Wind Chill: N/a");
   }
}
