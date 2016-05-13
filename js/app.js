$(document).ready(function() {

    var cats = ["kittykat", "littlecat", "peekingcat", "scardycat", "smilelycat"];

    $.each(cats, function(i) {
        $('#catList').append(
            $('<button>')
            .addClass('btn btn-warning btn-lg btn-block')
            .attr('id', cats[i])
            .text(cats[i]));
    });



        $('#kittykat').click(function() {
        	$('img').attr('src' , 'images/kittykat.jpg')

        	$('img').attr('id', 'kitty')
        });

        $('#littlecat').click(function() {
        	$('img').attr('src', 'images/littlecat.jpg')

        	$('img').attr('id', 'little')
        });

        $('#peekingcat').click(function() {
        	$('img').attr('src', 'images/peekingcat.jpg')

        	$('img').attr('id', 'peeking')
        });

        $('#scardycat').click(function() {
        	$('img').attr('src', 'images/scardycat.jpg')

        	$('img').attr('id', 'scardy')
        });

        $('#smilelycat').click(function() {
        	$('img').attr('src', 'images/smilelycat.jpg')

        	$('img').attr('id', 'smilely')
        });



});
