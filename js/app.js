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
                    view1.init();
                    //view2.init();
                }
            };

            var view1 = {

                init: function() {
                    this.render();
                },

                render: function() {
                    var cats = controller.getCats();


                    $('#photos').hide();

                    for (i = 0; i < cats.length; i++) {
                        $('#catList').append('<button class="btn btn-lg btn-warning btn-block" id="cat' + i + 'href="#">' + cats[i].name + '</button>');
                    }
                }

            };




                    controller.init();
                });
