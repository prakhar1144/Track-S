var map = L.map('mapid').setView([0, 0], 2 );
	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 4,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicHJha2hhcjE0IiwiYSI6ImNrZXdrdnNzODAyNHQyeG4xeDRoZnZnOWwifQ.BjyU2T1V84OAiMThjjj8DQ'
}).addTo(map);
	var issIcon = L.icon({
    iconUrl: "/images/marker.jpg",	    
    iconSize:     [30, 30],

			});
	var issmark = L.marker([0, 0], {icon: issIcon}).addTo(map);

	var isscircle = L.circleMarker([0, 0], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 50,
    }).addTo(map);
	
	function moveISS () {
    $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {
        var lat = data['iss_position']['latitude'];
        var lon = data['iss_position']['longitude'];

        issmark.setLatLng([lat, lon]);
        isscircle.setLatLng([lat, lon]);
        map.panTo([lat, lon], animate=true);
        $('#show').text(lat);
        $('#shoow').text(lon);


    });
    setTimeout(moveISS(), 5000); 
}

moveISS();