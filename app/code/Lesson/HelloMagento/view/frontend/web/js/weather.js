//https://code.jquery.com/jquery-3.6.0.min.js
$(document).ready(function(){
    // weather();
    var city_name = 'London';
    var api_key = '83367ebe1be34e9e489d95ab6b62d834';
    var api_url = 'http://api.openweathermap.org/data/2.5/weather?q='+city_name+'&appid='+api_key;
    var weather_data = json_decode(file_get_contents(api_url), true);
    // var date = 
    var temp = weather_data['main']['temp'];
    alert("nhiệt độ " + temp);
    // $('#weather').html( '<p>Thời tiết London ngày ' + date +'</p>', 
    //                     '<p> Nhiệt độ '+ temp +'</p>');
});
// function weather(){
//     var city_name = 'London';
//     var api_key = '83367ebe1be34e9e489d95ab6b62d834';
//     var api_url = 'http://api.openweathermap.org/data/2.5/weather?q='+city_name+'&appid='+api_key;
//     var weather_data = file_get_contents(api_url);
    
//     $.ajax({
//         url: api_url,
//         type: 'post',
//         data:{
//             _token: CSRF_TOKEN,
//             category:category,
//         },
//         success: function(response){
            
//         }
//     });
// }
