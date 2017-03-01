
        angular.module('confusionApp',[])
//        now we add the controller using app
        .controller('MenuController',['$scope',function ($scope) {
            $scope.tab = 1;
            //select function that gets called by ng-click, this select function
            //goes and changes the tab value based on what tab number was given by ng-click
            //ex:if user clicks on 2nd tab, tab variable will be equal to two

            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };
            //Angular Filter Code not whenever we add code we tend to initialize the main variable being used
            $scope.showDetails = false;
            $scope.filtText = '';
            $scope.select = function(setTab) {
                $scope.tab = setTab;

                if (setTab === 2)
                    $scope.filtText = "appetizer";
                else if (setTab === 3)
                    $scope.filtText = "mains";
                else if (setTab === 4)
                    $scope.filtText = "dessert";
                else
                    $scope.filtText = "";
            };
            //we create the dishes object here within the menuController
           $scope.dishes=[
                 {
                   name:'Uthapizza',
                   image: 'images/uthapizza.png',
                   category: 'mains',
                   label:'Hot',
                   price:'4.99',
                   description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                   comment: ''
                },
                {
                   name:'Zucchipakoda',
                   image: 'images/zucchipakoda.png',
                   category: 'appetizer',
                   label:'',
                   price:'1.99',
                   description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
                   comment: ''
                },
                {
                   name:'Vadonut',
                   image: 'images/vadonut.png',
                   category: 'appetizer',
                   label:'New',
                   price:'1.99',
                   description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
                   comment: ''
                },
                {
                   name:'ElaiCheese Cake',
                   image: 'images/elaicheesecake.png',
                   category: 'dessert',
                   label:'',
                   price:'2.99',
                   description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                   comment: ''
                }
                ];
            $scope.toggleDetails = function() {
            $scope.showDetails = !$scope.showDetails;
            };

            //IMPORTANT: NOW, I AM GOING OT ASSIGNTHIS DISHES OBJECT TO THIS CONTROLLER
//            the dishes variable that i created (var = dishes) will now be assigned to
//            this dishes object for the menu control
            // FROM MY OWN UNDERSTANDING: you can now use the dishes variable to define this object :)
            // this dishes object will be avaiblable to my HTML code later.

            // $scope.dishes = dishes;

        }]);
