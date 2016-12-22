// make an API call to Chicago crime data 
var communityAreaArray = ["placeholder", "Rogers Park", "West Ridge", "Uptown", "Lincoln Square", "North Center", "Lake View", "Lincoln Park", 
"Near North Side", "Edison Park", "Norwood Park", "Jefferson Park", "Forest Glen", "North Park", "Albany Park", "Portage Park", 
"Irving Park", "Dunning", "Montclare", "Belmont Cragin", "Hermosa", "Avondale", "Logan Square", "Humboldt Park", "West Town", 
"Austin", "West Garfield Park", "East Garfield Park", "Near West Side", "North Lawndale", "South Lawndale", "Lower West Side", "Loop", "Near South Side",
"Armour Square", "Douglas", "Oakland", "Fuller Park", "Grand Boulevard", "Kenwood", "Washington Park", "Hyde Park", "Woodlawn", "South Shore", "Chatham", 
"Avalon Park", "South Chicago", "Burnside", "Calumet Heights", "Roseland", "Pullman", "South Deering", "East Side", "West Pullman", "Riverdale", "Hegewisch",
"Garfield Ridge", "Archer Heights", "Brighton Park"]

var baseURL = "https://data.cityofchicago.org/resource/6zsd-86xi.json"
var wardQuery = encodeURI("?$select=ward,COUNT(ward)&$group=ward&$limit=10&$order=COUNT(ward) DESC ")
var appToken = "&$$app_token=XTzcaicIeaM3s1GDqbUAaUVS5"
var commCrimeQuery = encodeURI("?$select=primary_type,COUNT(primary_type)&$group=primary_type&$limit=10&$order=COUNT(primary_type) DESC ")
var safeHoodsQuery = encodeURI("?$select=community_area,COUNT(community_area)&$group=community_area&$limit=10&$order=COUNT(community_area) DESC ")
var arrestYearlyQuery = encodeURI("?$select=year,count(*),sum(case(arrest=true, 1, true, 0))&$group=year&$order=year DESC ")

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
	$(".dropdown").on("click", "#safeHoods", function(e){
		e.preventDefault()
		console.log("blocked")
		$.getJSON( baseURL+safeHoodsQuery+appToken, function(data) {
			console.log(data)
			var safeTable = "<table> <tr> <th> Neighborhood </th> <th> Crimes reported since 2001 </th> </tr>"
			var safeTableItems = []
			// turn each ward with count into table row
			for (var i = 0; i < data.length; i++) {
				safeTableItems.push("<tr><td>"+data[i].community_area+"</td> <td>"+data[i].COUNT_community_area+"</td></tr>")
			}

			var safeTableItemsString = safeTableItems.join("")
			safeTable += safeTableItemsString+"</table>"
			$("#table-container").html(safeTable)
		})
	})

	$(".dropdown").on("click", "#annualArrest", function(e){
		e.preventDefault()
		console.log("blocked")
		$.getJSON( baseURL+arrestYearlyQuery+appToken, function(data) {
			console.log(data)
			var yearlyTable = "<table> <tr> <th> Year </th> <th> Percent of crimes with an arrest </th> </tr>"
			var yearlyTableItems = []
			// turn each ward with count into table row
			for (var i = 0; i < data.length; i++) {
				yearlyTableItems.push("<tr><td>"+data[i].year+"</td> <td>"+parseFloat(100*(data[i].sum_case_arrest_TRUE_1_TRUE_0/data[i].count)).toFixed(2) +"%</td></tr>")
			}

			var yearlyTableItemsString = yearlyTableItems.join("")
			yearlyTable += yearlyTableItemsString+"</table>"
			$("#table-container").html(yearlyTable)
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