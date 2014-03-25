function getWeekOfDayString(a_date){
    var day_of_week_array = [
        '周日','周一','周二','周三','周四','周五','周六'
    ];
    return day_of_week_array[a_date.getDay()];
}


$(document).ready(function(){
    var get_current_weather_url = '//api.openweathermap.org/data/2.5/weather';
    var param = {
        q: 'Beijing',
        units: 'metric',
        lang: 'zh_cn'
    };
    $.ajax({
        url: get_current_weather_url,
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
            var minute = now.getMinutes();
            if(minute<10)
                minute = '0'+minute;

            var day_of_week_array = [
                '周日','周一','周二','周三','周四','周五','周六'
            ];
            var day_of_week =day_of_week_array[now.getDay()];
            var now_str = (now.getMonth()+1)+'月'+now.getDate()+'日 '+ day_of_week+' '+now.getHours()+'时'+minute+'分';

            $('<div class="col-md-4"></div>')
                .append('<div class="row"><div class="col-md-12">'+now_str+'</div></div>')
                .append('<div class="row"><div class="col-md-12">天气：<img src='+weather_icon_url+'>'+weather.description+'</div></div>')
                .append('<div class="row"><div class="col-md-12">温度：'+main.temp+"&deg;C"+'</div></div>')
                .append('<div class="row"><div class="col-md-12">风速：'+wind.speed+'m/s</div></div>')
                .append('<div class="row"><div class="col-md-12">湿度：'+main.humidity+'%</div></div>')
                .appendTo('<div class="row"></div>')
                .appendTo('.current_weather');
        }
    });
 });

$(document).ready(function(){
    var get_forecast_weather_url = "http://api.openweathermap.org/data/2.5/forecast/daily";
    var params = {
        q: "Beijing",
        cnt: 7,
        units: "metric",
        lang: "zh_cn"
    };
    $.ajax({
        url: get_forecast_weather_url,
        data: params,
        success: function(data){
            var container = $('.future_weather');

            console.log(data);
            data.list.shift();
            $.each(data.list, function(index, value){
                var a_date = new Date(value.dt*1000);
                console.log((a_date.getMonth()+1)+'/'+a_date.getDate()+' '+getWeekOfDayString(a_date));

                var weather = value.weather[0];
                var weather_icon_url = 'http://openweathermap.org/img/w/'+weather.icon+'.png';
                console.log('天气：'+weather.description);
                var temp = value.temp;
                console.log('温度：'+temp.min+' - '+temp.max);
                console.log('风速：'+value.speed+'m/s');

                container.append('<div class="col-md-1"><p>'+
                    (a_date.getMonth()+1)+'/'+a_date.getDate()+' '+getWeekOfDayString(a_date)+'</p><p>'+
                    '<img src='+weather_icon_url+' title="'+weather.description+'">'+'</p>'+
                    '<p>'+ Math.round(temp.min)+'/'+Math.round(temp.max) +'</p>'+'</div>');
            })
        }
    });

});