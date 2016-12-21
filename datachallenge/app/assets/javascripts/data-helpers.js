// make an API call to Chicago crime data 
var baseURL = "https://data.cityofchicago.org/resource/6zsd-86xi.json"
var basicQuery = encodeURI("?$select=ward,COUNT(ward)&$group=ward&$limit=10&$order=COUNT(ward) DESC ")
var appToken = "&$$app_token=XTzcaicIeaM3s1GDqbUAaUVS5"

$(document).ready(function(){
	//test click on dead link to get top ten crime wards
	$("a").on("click", function(e){
		e.preventDefault()
		console.log(baseURL+basicQuery+appToken)
		$.getJSON( baseURL+basicQuery+appToken, function (data) {
			console.log(data)
			var table = "<table> <tr> <th> Number of Crimes </th> <th> Ward </th> </tr>"
			var tableItems = []
			// turn each ward with count into table row
			for (var i = 0; i < data.length; i++) {
				tableItems.push("<tr><td>"+data[i].COUNT_ward+"</td> <td>"+data[i].ward+"</td></tr>")
			}

			tableItemsString = tableItems.join("")
			table += tableItemsString+"</table>"
			$("#table-container").html(table)
		})
	})
})