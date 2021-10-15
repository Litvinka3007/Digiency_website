function initMap() {
  let mapOptions = {
    center: new google.maps.LatLng('37.5350082', '-122.3262332'),
    zoom: 12
  }

  let map = new google.maps.Map(document.getElementById('map'), mapOptions);
}