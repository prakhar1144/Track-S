var map = L.map('mapid').setView([0, 0], 2 );
	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 8,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicHJha2hhcjE0IiwiYSI6ImNrZXdrdnNzODAyNHQyeG4xeDRoZnZnOWwifQ.BjyU2T1V84OAiMThjjj8DQ'
}).addTo(map);

function onMapclick(e) {
	var E = {'lat':e.latlng.lat,'lon':e.latlng.lng};
	put(E);
}

map.on('click',onMapclick);

function put(E) {
	var dataa = E;
    $('#isspass').html('')

    $.getJSON('http://api.open-notify.org/iss-pass.json?lat='+ dataa['lat'] +'&lon=' + dataa['lon'] +'&n=5&callback=?', dataa, function(data) {
    data['response'].forEach(function (d) {
        console.log(d)
        var date = new Date(d['risetime']*1000);
        var duration =  (d['duration']/60).toFixed(2);

        $('#isspass').append('<h5>' + date.toString() + '</h5>');
        $('#isspass').append('<h6>' + 'Duration : ' + duration.toString() + ' Min'+'</h6>');

    }); 
});
    
}
alert('Select Your Location');
/*function putt() {

    $.getJSON('http://api.open-notify.org/iss-pass.json?lat=45.0&lon=121.0&alt=20&n=5&callback=?', function(data) {
    data['response'].forEach(function (d) {
    	alert(date);
        var date = new Date(d['risetime']*1000);


        $('#isspasss').append('<li>' + date.toString() + '</li>');
    });
   
});
    
    setTimeout(putt(), 5000)

}*/
/*var D = {'lat':45.0,'lon':45.0};
put(D);*/