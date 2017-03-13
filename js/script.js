$(document).ready(function() {
  'use strict';

  function showMaps(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var mapOptions = {
      center: new google.maps.LatLng(latitude, longitude),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);


    var antipodesOptions = {
      center: new google.maps.LatLng(latitude * (-1), longitude + 180),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var antipodes = new google.maps.Map(document.getElementById("antipodes"), antipodesOptions);
  }

  if (Modernizr.geolocation) {
    navigator.geolocation.getCurrentPosition(showMaps);
  } else {
    console.log('geolocation not supported');
  }

});
