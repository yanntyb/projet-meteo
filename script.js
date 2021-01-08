let input = document.getElementsByTagName("input")[0];
let button = document.getElementById("validation");

let xhr = new XMLHttpRequest();

button.addEventListener("click",function (){
    if(input.value !== ""){
        let url = "http://api.openweathermap.org/data/2.5/weather?q=" + input.value + "&appid=3078318dd0d0534083752a2e64525eb6&lang=fr";
        xhr.open("GET",url);
        xhr.responseType = "json";
        xhr.send();
        xhr.onload = function (){
            if(xhr.status !== 200){
                return;
            }
            console.log(xhr.response);
            afficherMeteo(xhr.response,input.value);
        }

    }
})

function afficherMeteo(data, ville){
    document.getElementById("ville").innerHTML = ville;
    let temperature = document.getElementById("temperature");
    document.querySelector("#now").innerHTML = "Temperature actuelle : " + (parseInt(data.main.temp) - 273.15).toFixed(2).toString() + " degrés";
    document.querySelector("#min").innerHTML = "Temperature minimale : " +  (parseInt(data.main.temp_min) - 273.15).toFixed(2).toString() + " degrés";
    document.querySelector("#max").innerHTML = "Temperature maximale : " + (parseInt(data.main.temp_max) - 273.15).toFixed(2).toString() + " degrés";
}