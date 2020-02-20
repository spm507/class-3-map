// this is my mapboxGL token
mapboxgl.accessToken = 'pk.eyJ1Ijoic3BtNTA3IiwiYSI6ImNrNmxmYnZrMTAzNzAzaHBodTRmd2hpZm0ifQ.Tf4_3bYwjcuHv39tq01CWQ';


var initialCenterPoint = [-83.664, 43.632]
var initialZoom = 5.99




var initOptions = {
  container: 'map-container',
  style: 'mapbox://styles/mapbox/dark-v10', // use this basemap
  center: initialCenterPoint,
  zoom: initialZoom,
}


var map = new mapboxgl.Map(initOptions);


map.addControl(new mapboxgl.NavigationControl());


 new mapboxgl.Marker()
   .setLngLat([-85.676008517,42.9584716])
   .setPopup(new mapboxgl.Popup({ offset: 25 })
    .setHTML('I am drinking an All Day IPA at Founders'))
   .addTo(map);



barData.forEach(function(barEntry) {

  new mapboxgl.Marker()
    .setLngLat([barEntry.longitude, barEntry.latitude])
    .setPopup(new mapboxgl.Popup({ offset: 25 })
     .setHTML(`${barEntry.name} enjoyed getting a buzz on at ${barEntry.dope_bar}`))
    .addTo(map);
})

// event listeners for the fly to buttons

$('#europe').on('click', function() {
  map.flyTo({
    center: [-0.8459507425, 47.5673373],
    zoom: 3.65
  })
})

$('#buenosaires').on('click', function() {

  var buenosairesLngLat = [-58.57338611, -34.6154611]

  map.flyTo({
    center: buenosairesLngLat,
    zoom: 11.48

  })
})

$('#shymkent').on('click', function() {
  var shymkentLngLat = [69.449718411, 42.3419889]

  map.flyTo({
    center: shymkentLngLat,
    zoom: 11.48

  })
})

$('#chengdu').on('click', function() {
  var chengduLngLat = [103.7953416101, 30.6588188]

  map.flyTo({
    center: chengduLngLat,
    zoom: 11.48

  })
})
