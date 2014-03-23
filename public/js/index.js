
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

            var now = new Date();
            var now_str = (now.getMonth()+1)+'月'+now.getDay()+'日 '+now.getHours()+':'+now.getMinutes();

            $('<div class="col-md-4"></div>')
                .append('<div class="row"><div class="col-md-12">'+now_str+'</div></div>')
                .append('<div class="row"><div class="col-md-12">天气：<img src='+weather_icon_url+'>'+weather.description+'</div></div>')
                .append('<div class="row"><div class="col-md-12">温度：'+main.temp+"&deg;C"+'</div></div>')
                .append('<div class="row"><div class="col-md-12">风速：'+wind.speed+'m/s</div></div>')
                .append('<div class="row"><div class="col-md-12">湿度：'+main.humidity+'%</div></div>')
                .appendTo('<div class="row"></div>')
                .appendTo('.weather');
        }
    });
 });