'use strict';

angular.module('confusionApp')
//        now we add the controller using app
//  SECOND PART WITH menuFactory IS EXAMPLE OF D.I., THIS CONTROLLER IS DEPENDENT ON MENUFACTORY
    .controller('MenuController',['$scope', 'menuFactory', function ($scope, menuFactory) {
        $scope.tab = 1;
        //select function that gets called by ng-click, this select function
        //goes and changes the tab value based on what tab number was given by ng-click
        //ex:if user clicks on 2nd tab, tab variable will be equal to two
        $scope.showDetails = false;
        $scope.filtText = '';
        //we create the dishes object here within the menuController



        //CUT DISHES OBJ MOVED TO CONTROLLER.JS GOES HERE
        //NEED TO QUERRY FOR DISHES OBJ. DATA, AFTER THIS WE STILL NEED TO DO D.I. B/C THIS CONTROLLER NEEDS THAT SERVICE INORDER TO FUNCTION
        $scope.dishes= menuFactory.getDishes();




        //Angular Filter Code not whenever we add code we tend to initialize the main variable being used
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

        $scope.isSelected = function (checkTab) {
            return ($scope.tab === checkTab);
        };

        $scope.toggleDetails = function() {
        $scope.showDetails = !$scope.showDetails;
        };

        //IMPORTANT: NOW, I AM GOING OT ASSIGNTHIS DISHES OBJECT TO THIS CONTROLLER
    //            the dishes variable that i created (var = dishes) will now be assigned to
    //            this dishes object for the menu control
        // FROM MY OWN UNDERSTANDING: you can now use the dishes variable to define this object :)
        // this dishes object will be avaiblable to my HTML code later.

        // $scope.dishes = dishes;

    }])

    .controller('ContactController', ['$scope', function($scope) {
        $scope.feedback = {mychannel:"",
                          firstName:"",
                          lastName:"",
                          agree:false,
                          email:""};//javascript object
        $scope.channels = [{value:"tel",  label:"Tel."},
                           {value:"Email",label:"Email"}]; //Javascript Object Array used to store into javascript object my channel variable
        $scope.invalidChannelSelection = false; //Javascript boolean
    }])

    .controller('FeedbackController', ['$scope', function($scope) {
        $scope.sendFeedback = function() { //Javascript Function
            console.log($scope.feedback);

            if ($scope.feedback.agree && ($scope.feedback.mychannel == "")&& !$scope.feedback.mychannel) {
                $scope.invalidChannelSelection = true;
                console.log('incorrect');
            }
            else {
                $scope.invalidChannelSelection = false;
                $scope.feedback = {mychannel:"",
                                   firstName:"",
                                   lastName:"",
                                   agree:false,
                                   email:"" };
                $scope.feedback.mychannel="";
                console.log($scope.feedback);
                $scope.feedbackForm.$setPristine(); //$setPristine is angular way of reseting form, you can do it manually resetting .feedback values
                console.log($scope.feedback);
            }
        };
    }])
    //NEED DEPENDENCY INJECTION TO USE DISH OBJECT STORED IN SERVICES.JS
    .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {
        //------first comments------
        //DISH OBJECT GOES HERE FROM CUT TO SERVICES.JS
        //REPLACE THE DISH OBJECT VARIABLE WITH A CALL TO THE DISH OBJECT FROM DISH FACTORY IN SERVICES.JS
        //------second comments------
        // Angular UI-Router modification of code from ngRoute approach. Here we use stateParams insead of routeParams, we link these params in menu.html code to an image <a> tag with an ui-sref attribute.

        var dish= menuFactory.getDish(parseInt($stateParams.id,10));

        $scope.dish = dish;

    }])
    .controller('DishCommentController', ['$scope', function($scope) {

            //Step 1: Create a JavaScript object to hold the comment from the form
            $scope.comments =  {author: "",
                                 rating: "5",
                                 comment: "",
                                 date: ""
            };

            $scope.submitComment = function () {

                //Step 2: This is how you record the date
                $scope.comments.date = new Date().toISOString();

                // Step 3: Push your comment into the dish's comment array
                $scope.dish.comments.push($scope.comments);

                //Step 4: reset your form to pristine
                $scope.commentForm.$setPristine();
                console.log($scope.comments);

                //Step 5: reset your JavaScript object that holds your comment
                $scope.comments =  {author: "",
                                     rating: "5",
                                     comment: "",
                                     date: ""
                    };
                console.log($scope.comments);
            }
        }])



;
