
$(document).ready(function(){
    var get_weather_url = '//api.openweathermap.org/data/2.5/weather';
    var param = {
        q: 'Beijing',
        units: 'metric',
        lang: 'zh_cn'
    };
    $.ajax({
        url: get_weather_url,
        data: param,
        success: function(data){
            console.log(data);
            var main = data.main;
                var temp = data.main.temp;
                var humidity = data.main.humidity+'%';
                var pressure = data.main.pressure;
            var weather = data.weather[0];
                var weather_icon_url = 'http://openweathermap.org/img/w/'+weather.icon+'.png';
            var wind = data.wind;

            $('<div class="col-md-4"></div>')
                .append('<div class="row"><div class="col-md-12">'+main.temp+"&deg;C"+'</div></div>')
                .append('<div class="row"><div class="col-md-12"><img src='+weather_icon_url+'>'+weather.description+'</div></div>')
                .append('<div class="row"><div class="col-md-12">'+wind.speed+'m/s</div></div>')
                .appendTo('<div class="row"></div>')
                .appendTo('.weather');
        }
    });
 });