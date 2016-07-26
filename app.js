$(document).ready(function() {

    // function input() {
    // 	var number = prompt('Input a number from 1 to 100');
    // number();
    // };

    // function input(num) {
    // 	var int = num;
    // 	if (int >= 1) {
    // 		return 
    // 	}
    // }



    $('.number-entry-form').submit(function(event) {
        event.preventDefault();

        var input = parseInt($('#number-entry').val(), 10);
        if (input < 0){
        	// do something
        } else {
        	// do the opposite 
        }
        $('.number-entry').val("");
        // months? 1, 2, 4, Credit card
        // CVV -> 345.4
        // 
        // $('#number-entry').val().parseInt(int);
        // var int = parseInt(int);
        // var parse = $('.number-entry').parseInt()

// <p>, <div>, <br/>, <section>

        for (var i = 1; i <= input; i++) {

            if ((i % 3) == 0 && (i % 5) == 0) {
                $('.results').append(' FIZzBuzZ <br/> ');
            } else if ((i % 3) == 0) {
                $('.results').append(' fizz <br/>');
            } else if ((i % 5) == 0) {
                $('.results').append(' buzz <br/>');
            } else
                $('.results').append(i + '  <br/>');
        }



    });

});
