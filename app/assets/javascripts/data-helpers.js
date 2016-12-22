// make an API call to Chicago crime data 
var communityAreaArray = ["Rogers Park", "West Ridge", "Uptown", "Lincoln Square", "North Center", "Lake View", "Lincoln Park", "Near North Side", "Edison Park", "Norwood Park", "Jefferson Park", "Forest Glen", "North Park", "Albany Park", "Portage Park", "Irving Park", "Dunning", "Montclare", "Belmont Cragin", "Hermosa", "Avondale"]

var baseURL = "https://data.cityofchicago.org/resource/6zsd-86xi.json"
var wardQuery = encodeURI("?$select=ward,COUNT(ward)&$group=ward&$limit=10&$order=COUNT(ward) DESC ")
var appToken = "&$$app_token=XTzcaicIeaM3s1GDqbUAaUVS5"
var commCrimeQuery = encodeURI("?$select=primary_type,COUNT(primary_type)&$group=primary_type&$limit=10&$order=COUNT(primary_type) DESC ")
var safestHoodsQuery = encodeURI("?$select=")


$(document).ready(function(){
	//test click on dead link to get top ten crime wards
	$("#topTenWards").on("click", function(e){
		e.preventDefault()
		console.log(baseURL+wardQuery+appToken)
		//turn data into tables
		$.getJSON( baseURL+wardQuery+appToken, function(data) {
			// console.log(data)
			var wardTable = "<table> <tr> <th> Number of Crimes </th> <th> Ward Number </th> </tr>"
			var wardTableItems = []
			// turn each ward with count into table row
			for (var i = 0; i < data.length; i++) {
				wardTableItems.push("<tr><td>"+data[i].COUNT_ward+"</td> <td>"+data[i].ward+"</td></tr>")
			}

			var wardTableItemsString = wardTableItems.join("")
			wardTable += wardTableItemsString+"</table>"
			$("#table-container").html(wardTable)
		})
	})
	$(".dropdown").on("click", "#commonCrimes", function(e){
		e.preventDefault()
		console.log("blocked")
		$.getJSON( baseURL+commCrimeQuery+appToken, function(data) {
			console.log(data)
			var commonTable = "<table> <tr> <th> Type of Crime </th> <th> Number reported since 2001 </th> </tr>"
			var commonTableItems = []
			// turn each ward with count into table row
			for (var i = 0; i < data.length; i++) {
				commonTableItems.push("<tr><td>"+data[i].primary_type+"</td> <td>"+data[i].COUNT_primary_type+"</td></tr>")
			}

			var commonTableItemsString = commonTableItems.join("")
			commonTable += commonTableItemsString+"</table>"
			$("#table-container").html(commonTable)
		})
	})
})

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function showDropdown() {
    document.getElementById("myDrop").classList.toggle("show");
}



// // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}