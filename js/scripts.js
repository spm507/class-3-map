// this is my mapboxGL token
mapboxgl.accessToken = 'pk.eyJ1Ijoic3BtNTA3IiwiYSI6ImNrNmxmYnZrMTAzNzAzaHBodTRmd2hpZm0ifQ.Tf4_3bYwjcuHv39tq01CWQ';


var initialCenterPoint = [-83.664, 43.632]
var initialZoom = 10.67



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

$('#china').on('click', function() {
  map.flyTo({
    center: [112.556005, 37.818758],
    zoom: initialZoom
  })
})

$('#michigan').on('click', function() {

  var michiganLngLat = [-83.10538, 42.50448]

  map.flyTo({
    center: michiganLngLat,
    zoom: initialZoom
  })
})

$('#colombia').on('click', function() {
  var colombiaLngLat = [-73.997208, 0.721615]

  map.flyTo({
    center: colombiaLngLat,
    zoom: initialZoom
  })
})

$('#nyc').on('click', function() {
  map.flyTo({
    center: initialCenterPoint,
    zoom: initialZoom
  })
})
