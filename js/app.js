$(function() {

    var model = {
        currentCat: 0,
        cats: [{
            "name": "kittykat",
            "image": "images/kittykat.jpg"
        }, {
            "name": "littlecat",
            "image": "images/littlecat.jpg"
        }, {
            "name": "peekingcat",
            "image": "images/peekingcat.jpg"
        }, {
            "name": "scardycat",
            "image": "images/scardycat.jpg"
        }, {
            "name": "smilelycat",
            "image": "images/smilelycat.jpg"
        }],

        init: function() {
            for (i = 0; i < model.cats.length; i++) {
                model.cats[i].number = i;
                model.cats[i].display = 'none';
                model.cats[i].clicks = 0;
            }
        }
    };


    var controller = {

        getCats: function() {
            return model.cats;

        },

        getCurrentCat: function() {
            return model.currentCat;
        },

        setCurrentCat: function(currentCat) {
            model.currentCat = currentCat;
        },


        init: function() {
            model.init();
            listView.init();
            photoView.init();
        }
    };

    var listView = {

        init: function() {
            this.render();
        },

        render: function() {
            var cats = controller.getCats();


            for (i = 0; i < cats.length; i++) {
                $('#catList').append('<button class="btn btn-lg btn-warning btn-block" id="cat' + i + '"href="#">' + cats[i].name + '</button>');
            }
        }

    };

    var photoView = {
        init: function() {
            this.render();
        },

        render: function() {

            var cats = controller.getCats();
            var currentCat = controller.getCurrentCat();
            $('#photos').hide();


            for (var i = 0; i < cats.length; i++) {
                $('#cat' + i).on('click', (function(catCopy) {
                    return function() {
                        $('#photos').show();
                        $('#cat-photo').attr({
                            src: catCopy.image
                        });

                        $('#cat-name').text(catCopy.name);
                        $('#cat-clicks').text(catCopy.clicks);
                        currentCat = catCopy.number;
                        controller.setCurrentCat(currentCat);

                    }
                })(cats[i]));
            }

            $('#photos').click(function() {
                cats[currentCat].clicks++;

                $('#cat-clicks').text(cats[currentCat].clicks);

            });
        },

        update: function(currentCat) {

            var cats = controller.getCats();

            $('#cat-clicks').text(cats[currentCat.clicks]);
        }
    };




    controller.init();
});
