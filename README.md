<h1><b>Track-S</b></h1>
<h4>Track the Space Station</h4>
<p> A website developed out of my curosity towards <b>International Space Station</b></p>
<h2>Homepage</h2>
<img src="https://github.com/prakhar1144/Track-S/blob/master/Images/TS-1.png" alt="img" width="856"/>
<h2>Features</h2>

* Live Position
* At Your Location
* Weekly Blogs

<img src="https://github.com/prakhar1144/Track-S/blob/master/Images/TS-2.png" alt="img" width="856"/>
<h2>Live Position</h2>
<p>This Feature tells the current position of Space Station on an interactive map, refreshes every 5 second</p>

* I have used API endpoints provided by <a href="http://open-notify.org/">**Open-notify**</a> to get the live latitude and longitude of Space Station as json response.
* Used the <a href="https://leafletjs.com/">**leaflet.js**</a> javascript Library for interactive map.
* Used the json response (lat, lon) to put the marker on the map which updates in a animated way every 5 second.

<img src="https://github.com/prakhar1144/Track-S/blob/master/Images/TS-4 live.png" alt="img" width="856"/>
<h2>At your location</h2>
<p>This Feature tells the schedule at which you can spot the Space Station from your location with naked eye in clear sky.</p>

* Used <a href="https://leafletjs.com/">**leaflet.js**</a> javascript library for interactive map.
* When a user clicks at a location in the map, data (lat, lon) is collected of that location
* GET request is sent to <a href="http://open-notify.org/">**Open-notify**</a> with lat,lon as parameter to get the schedule.

<img src="https://github.com/prakhar1144/Track-S/blob/master/Images/TS-3.png" alt="img" width="856"/>
<h2>Weekly Blog</h2>

* Data is Fetched from <a href="https://api.spaceflightnewsapi.net/v3/documentation">**spaceflightnewsapi**</a> using the public API
<img src="https://github.com/prakhar1144/Track-S/blob/master/Images/TS-5.png" alt="img" width="856"/>
