'use strict';

angular.module('confusionApp')
        //this factory is going to serve up the info about the items in the menu
        .service('menuFactory', function() {
            //NEED TO CREATE AN OBJECT WHEN DEFINING FACTORIES BECAUSE YOU NEED TO RETURN AN OBJECT WHEN USING FACTORY

            //move all info about dishes into here.
            var dishes=[
             {
               name:'Uthapizza',
               image: 'images/uthapizza.png',
               category: 'mains',
               label:'Hot',
               price:'4.99',
               description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
               comments: [
                           {
                               rating:5,
                               comment:"Imagine all the eatables, living in conFusion!",
                               author:"John Lemon",
                               date:"2012-10-16T17:57:28.556094Z"
                           },
                           {
                               rating:4,
                               comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                               author:"Paul McVites",
                               date:"2014-09-05T17:57:28.556094Z"
                           },
                           {
                               rating:3,
                               comment:"Eat it, just eat it!",
                               author:"Michael Jaikishan",
                               date:"2015-02-13T17:57:28.556094Z"
                           },
                           {
                               rating:4,
                               comment:"Ultimate, Reaching for the stars!",
                               author:"Ringo Starry",
                               date:"2013-12-02T17:57:28.556094Z"
                           },
                           {
                               rating:2,
                               comment:"It's your birthday, we're gonna party!",
                               author:"25 Cent",
                               date:"2011-12-02T17:57:28.556094Z"
                           }

                       ]
            },
            {
               name:'Zucchipakoda',
               image: 'images/zucchipakoda.png',
               category: 'appetizer',
               label:'',
               price:'1.99',
               description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
               comments: [
                           {
                               rating:5,
                               comment:"Imagine all the eatables, living in conFusion!",
                               author:"John Lemon",
                               date:"2012-10-16T17:57:28.556094Z"
                           },
                           {
                               rating:4,
                               comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                               author:"Paul McVites",
                               date:"2014-09-05T17:57:28.556094Z"
                           },
                           {
                               rating:3,
                               comment:"Eat it, just eat it!",
                               author:"Michael Jaikishan",
                               date:"2015-02-13T17:57:28.556094Z"
                           },
                           {
                               rating:4,
                               comment:"Ultimate, Reaching for the stars!",
                               author:"Ringo Starry",
                               date:"2013-12-02T17:57:28.556094Z"
                           },
                           {
                               rating:2,
                               comment:"It's your birthday, we're gonna party!",
                               author:"25 Cent",
                               date:"2011-12-02T17:57:28.556094Z"
                           }

                       ]
            },
            {
               name:'Vadonut',
               image: 'images/vadonut.png',
               category: 'appetizer',
               label:'New',
               price:'1.99',
               description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
               comments: [
                           {
                               rating:5,
                               comment:"Imagine all the eatables, living in conFusion!",
                               author:"John Lemon",
                               date:"2012-10-16T17:57:28.556094Z"
                           },
                           {
                               rating:4,
                               comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                               author:"Paul McVites",
                               date:"2014-09-05T17:57:28.556094Z"
                           },
                           {
                               rating:3,
                               comment:"Eat it, just eat it!",
                               author:"Michael Jaikishan",
                               date:"2015-02-13T17:57:28.556094Z"
                           },
                           {
                               rating:4,
                               comment:"Ultimate, Reaching for the stars!",
                               author:"Ringo Starry",
                               date:"2013-12-02T17:57:28.556094Z"
                           },
                           {
                               rating:2,
                               comment:"It's your birthday, we're gonna party!",
                               author:"25 Cent",
                               date:"2011-12-02T17:57:28.556094Z"
                           }

                       ]
            },
            {
               name:'ElaiCheese Cake',
               image: 'images/elaicheesecake.png',
               category: 'dessert',
               label:'',
               price:'2.99',
               description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
               comments: [
                           {
                               rating:5,
                               comment:"Imagine all the eatables, living in conFusion!",
                               author:"John Lemon",
                               date:"2012-10-16T17:57:28.556094Z"
                           },
                           {
                               rating:4,
                               comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                               author:"Paul McVites",
                               date:"2014-09-05T17:57:28.556094Z"
                           },
                           {
                               rating:3,
                               comment:"Eat it, just eat it!",
                               author:"Michael Jaikishan",
                               date:"2015-02-13T17:57:28.556094Z"
                           },
                           {
                               rating:4,
                               comment:"Ultimate, Reaching for the stars!",
                               author:"Ringo Starry",
                               date:"2013-12-02T17:57:28.556094Z"
                           },
                           {
                               rating:2,
                               comment:"It's your birthday, we're gonna party!",
                               author:"25 Cent",
                               date:"2011-12-02T17:57:28.556094Z"
                           }

                       ]
            }
            ];
            // to the empty javascript object we created earlier we are attaching 2 functions to it. this is like delivery mechanism lol
            this.getDishes = function () {
                return dishes;
            };
            this.getDish = function (index) {
                return dishes[index];
            };

        });

