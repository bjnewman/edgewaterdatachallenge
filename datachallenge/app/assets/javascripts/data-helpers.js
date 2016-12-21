// make an API call to Chicago crime data 
var baseURL = "https://data.cityofchicago.org/resource/6zsd-86xi.json"
var basicQuery = encodeURI("?$select=community_area,COUNT(community_area)&$group=community_area&$limit=10&$order=COUNT(community_area) DESC ")
var appToken = "&$$app_token=XTzcaicIeaM3s1GDqbUAaUVS5"

$(document).ready(function(){
	//test click on dead link to get top ten crime community_areas
	$("a").on("click", function(e){
		e.preventDefault()
		console.log(baseURL+basicQuery+appToken)
		//turn data into tables
		$.getJSON( baseURL+basicQuery+appToken, function(data) {
			// console.log(data)
			var table = "<table> <tr> <th> Number of Crimes </th> <th> Community Area </th> </tr>"
			var tableItems = []
			// turn each community_area with count into table row
			for (var i = 0; i < data.length; i++) {
				tableItems.push("<tr><td>"+data[i].COUNT_community_area+"</td> <td>"+data[i].community_area+"</td></tr>")
			}

			tableItemsString = tableItems.join("")
			table += tableItemsString+"</table>"
			$("#table-container").html(table)
		})
	})
})