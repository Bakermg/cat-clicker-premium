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
        	//$('#photos').toggle('#photos').prepend('<img id="cat1" class="img-responsive" src="images/kittykat.jpg">');
        	$('img').attr('id', 'kitty')
        });
        $('#kitty').click(function(){
        	var click1 = 0;
        	click1 ++;
        	$('#clickNumber').html(click1);
        })

        $('#littlecat').click(function() {
        	$('img').attr('src', 'images/littlecat.jpg')
        	//$('#photos').toggle('#photos').prepend('<img id="cat1" class="img-responsive" src="images/littlecat.jpg">');
        	$('img').attr('id', 'little')
        });

        $('#peekingcat').click(function() {
        	$('img').attr('src', 'images/peekingcat.jpg')
        	//$('#photos').prepend('<img id="cat1" class="img-responsive" src="images/peekingcat.jpg">');
        	$('img').attr('id', 'peeking')
        });

        $('#scardycat').click(function() {
        	$('img').attr('src', 'images/scardycat.jpg')
        	//$('#photos').prepend('<img id="cat1" class="img-responsive" src="images/scardycat.jpg">');
        	$('img').attr('id', 'scardy')
        });

        $('#smilelycat').click(function() {
        	$('img').attr('src', 'images/smilelycat.jpg')
        	//$('#photos').prepend('<img id="cat1" class="img-responsive" src="images/smilelycat.jpg">');
        	$('img').attr('id', 'smilely')
        });

        /*$('#clickNumber').data('count', 0);
        $('#kitty').click(function(){
        	$('clickNumber').html(function(){
        		var $this = $('this'),
        		count = $this.data('count') + 1;

        			this.data('count', count);
        			return count;
        	});
        });*/

});
