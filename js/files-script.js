var canvas = {};
var img = new Image();

function DownloadPNG(){
	html2canvas($('#preview-table'), {
		onrendered: function(canvas){
			img.src = canvas.toDataURL("image/png");
			var url = img.src.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
			if (navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) 
			{
				var blob = canvas.msToBlob();
				window.navigator.msSaveBlob(blob,'timetable.png');
			}
			else{
				var trigger = $("<a>")
			      .attr("href", url)
			      .attr("download", "timetable.png")
			      .appendTo("body");

				trigger[0].click();
				trigger.remove();
			}
		}
	});
}

function ExportExcel(){
	$("#preview-table").table2excel({
		// exclude CSS class
	  	exclude: ".noExl",
	  	name: "Eng.Timetable",
	  	filename: "Eng.Timetable"
	});
}

function ImportExcel(){
	var fileInput = document.getElementById("xls");
	var validExts = new Array(".xlsx", ".xls");
    var fileExt = fileInput.value;
    fileExt = fileExt.substring(fileExt.lastIndexOf('.'));
    if (validExts.indexOf(fileExt) < 0) {
      return false;
    }
	var reader = new FileReader();
    reader.onload = function () {
        document.getElementById('preview-table').innerHTML = reader.result;
        onImport();
	};
	// start reading the file. When it is done, calls the onload event defined above.
	reader.readAsBinaryString(fileInput.files[0]);
}