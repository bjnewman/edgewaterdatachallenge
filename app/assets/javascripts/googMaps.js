
var mapQuery = encodeURI("$select=primary_type,latitude,longitude&$limit=500")
var appToken= "&$$app_token=XTzcaicIeaM3s1GDqbUAaUVS5"

// function initMap() {

//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 9,
//     center: {lat: 41.8781, lng: -87.6298}
//   });
  

// }
 //get crime data from chi api
 // 	var baseURL = "https://data.cityofchicago.org/resource/6zsd-86xi.json?"
	// var mapQuery = encodeURI("$select=primary_type,latitude,longitude&$limit=500")
 // $.getJSON( baseURL+mapQuery, function(data){
 // 	//console.log(data)
 	
 // 	//create markers from data and add to map
 // 	for (var i = 0; i < data.length; i++) {
 // 		var marker = new google.maps.Marker({
 // 			position: new google.maps.LatLng(data[i].latitude, data[i].longitude),
 // 			map: map,
 // 			title: data[i].primary_type
 // 		})
 // 	}
 // 	})


// $(window).load(function() {

// //initialize map
// // var center = new google.maps.LatLng(41.8781,87.6298);
// // var mapOptions = {
// //   zoom: 8,
// //   center: center
// // }
// var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 7,
//           center: {lat: 41.8781, lng: -87.6298}
//         });


// //call chicago api for crime data
// $.getJSON( baseURL+mapQuery+appToken, function (data) {
// 	//create markers from lat long of responses
// 	console.log(data)

// })
// })