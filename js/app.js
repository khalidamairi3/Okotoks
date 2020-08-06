function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(50.7288550,-113.98281),
      zoom:12,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker = new google.maps.Marker({position: mapProp["center"], map: map});
    }

    // function initMap() {
    //     // The location of Uluru
    //     var uluru = {lat: 50.7288550, lng: -113.98281};
    //     // The map, centered at Uluru
    //     var map = new google.maps.Map(
    //         document.getElementById('map'), {zoom: 12, center: uluru});
    //     // The marker, positioned at Uluru
       
    //   }