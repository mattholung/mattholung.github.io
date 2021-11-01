// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
    [-80.3340288, 25.6507904],
    [-80.3448257446289, 25.620603561401367],
    [-80.3421630859375, 25.6263427734375],
    [-80.34236907958984, 25.626325607299805],
    [-80.3333686, 25.6452759],
    [-80.32074737548828, 25.672441482543945],
    [-80.32074737548828, 25.672441482543945],
    [-80.31128692626953, 25.686538696289062],
  ];
  
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1IjoibWhvbHUwMDEiLCJhIjoiY2t2MDE0cGlmMm5yMzMzbnlzM2pqMXpodCJ9.7gH86gnkjG2ym0x1CknXbA';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-80.3333686, 25.6452759],
    zoom: 12,
  });
  
  // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
  const marker = new mapboxgl.Marker()
    .setLngLat([-80.3340288, 25.6507904])
    .addTo(map);
  //I had trouble here making the marker part. It wasnt successful with the original MIT coordinates. I copied the coordinates in the video and it worked. I have no idea why it wouldn't take them.
  
  // counter here represents the index of the current bus stop
  let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops

  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    const button = document.getElementById('flash-button');
    counter++;
    button.classList.toggle("on");
    move();
  }, 1000);
}

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move, counter, marker, busStops };
}