var canvas = {};
var img = new Image();

function DownloadPNG(){
	html2canvas($('#preview-table'), {
		onrendered: function(canvas){
			img.src = canvas.toDataURL("image/png");
			var url = img.src.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
			var trigger = $("<a>")
		      .attr("href", url)
		      .attr("download", "timetable.png")
		      .appendTo("body");

			trigger[0].click();

			trigger.remove();
		}
	});
}