function TableColumn(day, id){
	var block = document.getElementById(id).innerHTML;
	for(var i = 0; i < 6; ++i){
		var cell = "<td id="+ (day+i) +">" + block + "</td>";
		document.write(cell);
	}
}

function getSubject(sender){
	var dayID = sender.parentNode.getAttribute('id');
	var data = $('#edit-table').find("#"+dayID).find('#Subject').val();
	$('#preview-table').find("#"+dayID).find('#Subject').text(data);
}

function getType(sender){
	var dayID = sender.parentNode.getAttribute('id');
	var data = $('#edit-table').find("#"+dayID).find('#Period-Type').val();
	$('#preview-table').find("#"+dayID).find('#Period-Type').text(data);
	Recolor();
}

function getPlace(sender){
	var dayID = sender.parentNode.getAttribute('id');
	var data = $('#edit-table').find("#"+dayID).find('#Place').val();
	$('#preview-table').find("#"+dayID).find('#Place').text(data);
}

function onImport(){
	var days = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
	for(var i = 0; i < 6; ++i){
		for(var j = 0; j < 6; ++j){
			var subject = $('#preview-table').find("#"+days[i]+j).find('#Subject').text();
			$('#edit-table').find("#"+days[i]+j).find('#Subject').val(subject);
			var period = $('#preview-table').find("#"+days[i]+j).find('#Period-Type').text();
			$('#edit-table').find("#"+days[i]+j).find('#Period-Type').val(period);
			var place = $('#preview-table').find("#"+days[i]+j).find('#Place').text();
			$('#edit-table').find("#"+days[i]+j).find('#Place').val(place);
		}
	}
}