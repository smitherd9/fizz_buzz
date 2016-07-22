$(document).ready(function(){


var myArray = new Array(100);


for (var i = 1; i <= myArray.length; i++) {
	
	if ( (i % 3) == 0 && (i % 5) == 0) {
	 	$('body').append(' FIZzBuzZ ');
	}

	else if ( ( i % 3) == 0) {
		$('body').append(' fizz ');
	}

	else if ( (i % 5) == 0) {
		$('body').append(' buzz ');
	}

	else $('body').append(i + ' ');
	

	
	

	
};

});