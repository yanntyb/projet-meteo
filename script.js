let input = document.getElementsByTagName("input")[0];
let button = document.getElementById("validation");

let xhr = new XMLHttpRequest();

button.addEventListener("click",function (){
    if(input.value !== "") {
        reset();
        let url = "http://api.openweathermap.org/data/2.5/weather?q=" + input.value + "&appid=3078318dd0d0534083752a2e64525eb6&lang=fr";
        xhr.open("GET", url);
        xhr.responseType = "json";
        xhr.send();
        xhr.onload = function () {
            if (xhr.status !== 200) {
                document.querySelector("#ville").innerHTML = "Choix de ville invalide";
                return
            }
            console.log(xhr.response);
            afficherMeteo(xhr.response, input.value);
            afficherBackground(xhr.response.weather[0].description)
        }
    }
})

function afficherMeteo(data, ville){
    document.getElementById("ville").innerHTML = ville + " :";
    let temperature = document.getElementById("temperature");
    document.querySelector("#now").innerHTML = "Temperature actuelle : " + (parseInt(data.main.temp) - 273.15).toFixed(2).toString() + " degrés";
    document.querySelector("#min").innerHTML = "Temperature minimale : " +  (parseInt(data.main.temp_min) - 273.15).toFixed(2).toString() + " degrés";
    document.querySelector("#max").innerHTML = "Temperature maximale : " + (parseInt(data.main.temp_max) - 273.15).toFixed(2).toString() + " degrés";
}

function afficherBackground(temp){
    console.log(temp)
    if(temp === "ciel dégagé"){
        document.querySelector("#meteo").style.backgroundImage = "url('https://t1.ldh.be/y9Ry-_LhDAS3HQ_Zlmic1KdP_WU=/0x0:2560x1280/940x470/5e785749d8ad582f31e73e09.jpg')"
    }
    else if(temp === "brume"){
        document.querySelector("#meteo").style.backgroundImage = "url('http://paca.lpo.fr/blogs/ecrins-embrunais/files/2014/01/IMG_7347_2-1024x682.jpg')";
    }
    else if(temp === "peu nuageux"){
        document.querySelector("#meteo").style.backgroundImage = "url('https://www.h24info.ma/wp-content/uploads/2017/05/unnamed-42-740x431.jpg')";
    }
    else if(temp === "légères chutes de neige"){
        document.querySelector("#meteo").style.backgroundImage = "url('https://thumbs.dreamstime.com/b/for%C3%AAt-de-sapin-d-hiver-de-milou-aux-l%C3%A9g%C3%A8res-chutes-de-neige-k-82135991.jpg')";
    }
}

function reset(){
    document.querySelector("#max").innerHTML = "";
    document.querySelector("#min").innerHTML = "";
    document.querySelector("#now").innerHTML = "";
    document.querySelector("#meteo").style.backgroundImage = 'url("")';
}