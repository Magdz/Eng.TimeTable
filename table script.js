function TableColumn(){
	var block = document.getElementById("ColumnContent").innerHTML
	for(var i = 0; i < 6; ++i){
		document.write("<td>" + block + "</td>");
	}
}