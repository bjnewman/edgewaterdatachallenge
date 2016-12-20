// make an API call to Chicago crime data 
var baseURL = "https://data.cityofchicago.org/resource/6zsd-86xi.json"
var basicQuery = encodeURI("?$select=ward,COUNT(ward)&$group=ward&limit=10")
var appToken = "&$$app_token="+CHIAPPKEY

$(document).ready() {
	//test click on dead link to get top ten crime wards
	$("a").on("click", function(e){
		e.preventDefault()
		$.getJSON( baseURL+basicQuery+appToken, function (data) {
			console.log(data)
			var table = "<table id = ''> <tr> <th> Ward </th> <th> Number of crimes </th> </tr>"
			var tableItems = []
			// turn each ward with count into table row
			$.each(data, function( ward, count) {
				tableItems.push("<tr><td>"+ward+"</td> <td>"+count+"</td></tr>")
			})
			tableItemsString = tableItems.join("")
			table += tableItemsString+"</table>"
			table.appendTo("#table-container")
		})
	})
}