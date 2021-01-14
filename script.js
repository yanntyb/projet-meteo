$("#validation").click(function () {
        if ($("#input").html !== "") {
            reset();
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + input.value + "&appid=3078318dd0d0534083752a2e64525eb6&lang=fr",
                type: "GET",
                datatyp: "json",
                success: function (result) {
                    console.log(result.weather[0].description)
                    afficherMeteo(result, input.value);
                    afficherBackground(result.weather[0].description)
                },
                error: function () {
                    $("#ville").html("Ville non valide")
                }
            });
        }
    }
)

function afficherMeteo(data, ville) {
    $("#ville").html(ville + " :");
    $("#now").html("Temperature actuelle : " + (parseInt(data.main.temp) - 273.15).toFixed(2).toString() + " degrés");
    $("#min").html("Temperature minimale : " + (parseInt(data.main.temp_min) - 273.15).toFixed(2).toString() + " degrés");
    $("#max").html("Temperature maximale : " + (parseInt(data.main.temp_max) - 273.15).toFixed(2).toString() + " degrés");
}

function afficherBackground(temp) {
    switch (temp) {
        case "ciel dégagé":
            console.log("ok")
            $("#meteo").css({
                backgroundImg: "url('https://t1.ldh.be/y9Ry-_LhDAS3HQ_Zlmic1KdP_WU=/0x0:2560x1280/940x470/5e785749d8ad582f31e73e09.jpg')"
            });
            break
        case "brume":
            $("#meteo").css({
                backgroundImg: "url('http://paca.lpo.fr/blogs/ecrins-embrunais/files/2014/01/IMG_7347_2-1024x682.jpg')"
            });
            break
        case "peu nuageux":
            $("#meteo").css({
                backgroundImg: "url('https://www.h24info.ma/wp-content/uploads/2017/05/unnamed-42-740x431.jpg')"
            })
            break
        case "légères chutes de neige":
            $("#meto").css({
                backgroundImg: "url('https://thumbs.dreamstime.com/b/for%C3%AAt-de-sapin-d-hiver-de-milou-aux-l%C3%A9g%C3%A8res-chutes-de-neige-k-82135991.jpg')"
            });
    }
}

function reset() {
    $("#temperature").children().html("")
    $("#meto").css({backgroundImg: ""})
}