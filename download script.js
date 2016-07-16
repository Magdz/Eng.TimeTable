// JQuery scripts is linked in index.html
function downloadPNG(){
	var img = $('#preview-table').tableExport({type:'png',escape:'false'});
}