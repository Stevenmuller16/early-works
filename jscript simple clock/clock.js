var time = new Date();

function display() {
	var hours = time.getHours();
	if (hours < 10) { 
		hours = "0" + hours;
	}
	
	
	var minutes = time.getMinutes();
	if (minutes < 10) { 
		minutes = "0" + minutes;
	}
	
	
	var seconds = time.getSeconds();
	if (seconds < 10) {
		seconds = "0" + seconds;
	}


	var month = time.getMonth() + 1;

	document.write ("<b>" + time.getDate()
		+ "/" + month + "/" + time.getFullYear() +"<br/>"
		+ " " + hours + ":" + minutes
		+ ":" + seconds + "</b>");
}

display();
	