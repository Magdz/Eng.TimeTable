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