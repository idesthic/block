function initMap() {
var location = {lat: 45.813138, lng: 15.977182};
var map = new google.maps.Map(
  document.getElementById('map'), {zoom: 4, center: location});
var marker = new google.maps.Marker({position: location, map: map});
}
