function initialize() {
	//INSTANTIATE VARIABLES
	var markers = [];
	var mapOptions = {
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById('map-canvas'),
			mapOptions);

	//GEOLOCATION - GETTING MAP CENTER POSITION COORDINATES
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var pos = new google.maps.LatLng(position.coords.latitude,
											position.coords.longitude);
			var infowindow = new google.maps.InfoWindow({
				map: map,
				position: pos,
				content: 'You are here!'
			});

			//CREATE BOUNDS 
			var defaultBounds = new google.maps.LatLngBounds(
				new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
				new google.maps.LatLng((position.coords.latitude+0.0428), (position.coords.longitude+0.872)));
			map.fitBounds(defaultBounds);

			//LINK SEARCH BOX TO UI ELEMENT
			var input = (document.getElementById('mapSearchBar'));
			//map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
			var searchBox = new google.maps.places.Autocomplete(input);

			// [START region_getplaces]
			// Listen for the event fired when the user selects an item from the
			// pick list. Retrieve the matching places for that item.
			google.maps.event.addListener(searchBox, 'places_changed', function() {
				var places = searchBox.getPlaces();
				//var place = searchBox.getPlace();

				if (places.length = 0) {
					return;
				}
				for (var i = 0, marker; marker = markers[i]; i++) {
					marker.setMap(null);
				}

				//For each place, get the icon, place name, and location.
				markers = [];
				var bounds = new google.maps.LatLngBounds();
				for (var i = 0, place; place = place[i]; i++) {
					var image = {
						url: place.icon,
						size: new google.maps.Size(71, 71),
						origin: new google.maps.Point(0, 0),
						anchor: new google.maps.Point(17, 34),
						scaledSize: new google.maps.Size(25, 25)
					};

					//CREATE MARKER FOR EACH PLACE
					var marker = new google.maps.Marker({
						map: map,
						icon: image,
						title: place.name,
						position: place.geometry.location
					});

					markers.push(marker);

					bounds.extend(place.geometry.location);
				}
				map.fitBounds(bounds);
			});
			// [END region_getplaces]

			// Bias the SearchBox results towards places that are within the bounds of the
			// current map's viewport.
			google.maps.event.addListener(map, 'bounds_changed', function() {
				var bounds = map.getBounds();
				searchBox.setBounds(bounds);
			});

			map.setCenter(pos);
		}, function() {
			handleNoGeolocation(true);
		});

	} else {
		handleNoGeolocation(false);
	}
}



//GEOLOCATION - ERROR HANDLING
function handleNoGeolocation(errorFlag) {
	if (errorFlag){
		var content = "Error: The Geolocation service has failed. Please allow Geolocation services.";
	} else {
		var content = "Error: Your browser doesn\'t support geolocation.";
	}

	var options = {
		map: map,
		position: new google.maps.LatLng(10.310, 123.890), //DEFAULT CEBU LOCATION
		content: content
	};

	var infowindow = new google.maps.InfoWindow(options);
	map.setCenter(options.position);
} 

//INITIALIZE LOAD
google.maps.event.addDomListener(window, 'load', initialize);