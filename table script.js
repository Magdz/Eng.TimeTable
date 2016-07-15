function TableColumn(day){
	var block = document.getElementById("ColumnContent").innerHTML;
	for(var i = 0; i < 6; ++i){
		var cell = "<td id="+ (day+i) +">" + block + "</td>";
		document.write(cell);
	}
}

function getSubject(){
	var data = $('#Sat0').find('#Subject').val();
	$('#Sat1').find('#Subject').val(data);
}