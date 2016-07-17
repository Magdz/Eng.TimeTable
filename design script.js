function ColorPicker(){
	$(document).ready(function () {
    	$(".pick-a-color").pickAColor();
    });
}

function getHexColor(){
	var hex = $('#color-input').val();
	return "#" + hex;
}

function getTarget(){
	return $('#color-target').val();
}

function Coloring() {
	if(getTarget() == "Background"){
		$("#preview-table").css('background-color', getHexColor());
	}
    else if(getTarget() == "Corner"){
    	var cells = document.getElementById("preview-table").getElementsByTagName("th");
    	cells[0].style.backgroundColor = getHexColor();   
    }
    else if(getTarget() == "Days"){
    	$("#preview-table").find("tbody").find("th").css('background-color', getHexColor());
    }
    else if(getTarget() == "Time"){
    	$("#preview-table").find("thead").find("th").css('background-color', getHexColor());
    }
    else if(getTarget() == "Lectures"){
    	$("#preview-table").find("td").find('#Period-Type:contains("Lecture")').parent().css('background-color', getHexColor());
    }
    else if(getTarget() == "Tutorials"){
    	$("#preview-table").find("td").find('#Period-Type:contains("Tutorial")').parent().css('background-color', getHexColor());
    }
    else if(getTarget() == "Labs"){
    	$("#preview-table").find("td").find('#Period-Type:contains("Lab")').parent().css('background-color', getHexColor());
    }
    else if(getTarget() == "Border Font"){
    	$("#preview-table").find("th").css('color', getHexColor());
    }
    else if(getTarget() == "Content Font"){
    	$("#preview-table").find("td").css('color', getHexColor());
    }
}

function FontSize(){
	var size = $('#font-input').val();
	$('#preview-table').css('font-size', size + "px");
}