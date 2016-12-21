var baseURL = "https://data.cityofchicago.org/resource/6zsd-86xi.json?"
var mapQuery = encodeURI("$select=primary_type,latitude,longitude&$limit=500")
var appToken= "&$$app_token=XTzcaicIeaM3s1GDqbUAaUVS5"

$(window).load(function() {

//initialize map
var center = new google.maps.LatLng(41.8781,87.6298);
var mapOptions = {
  zoom: 8,
  center: center
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

//call chicago api for crime data
$.getJSON( baseURL+mapQuery+appToken, function (data) {
	//create markers from lat long of responses
	console.log(data)

})
})