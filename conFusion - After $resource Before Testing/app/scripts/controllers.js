'use strict';

angular.module('confusionApp')

        .controller('MenuController', ['$scope', 'menuFactory', '$window', function($scope, menuFactory, $window) {
            
            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = true;
            $scope.class = "media-top";
            $scope.number = $window.innerWidth;

                        $scope.showMenu = false;
            $scope.message = "Loading ...";
                        menuFactory.getDishes().query(
                function(response) {
                    $scope.dishes = response;
                    $scope.showMenu = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                });

                        
            $scope.select = function(setTab) {
                $scope.tab = setTab;
                
                if (setTab === 2) {
                    $scope.filtText = "appetizer";
                }
                else if (setTab === 3) {
                    $scope.filtText = "mains";
                }
                else if (setTab === 4) {
                    $scope.filtText = "dessert";
                }
                else {
                    $scope.filtText = "";
                }
            };

            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };
    
            $scope.toggleDetails = function() {
                $scope.showDetails = !$scope.showDetails;
            };

            $scope.changeClass = function () {

                if ($scope.number > 500) {
                    $scope.class = "media-left";
                    return $scope.class;
                }
                else {
                    $scope.class = "media-top";
                    return $scope.class;
                }
            };
            $scope.changeClass();


        }])

        .controller('ContactController', ['$scope', function($scope) {

            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
            
            var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
            
            $scope.channels = channels;
            $scope.invalidChannelSelection = false;
                        
        }])

        .controller('FeedbackController', ['$scope', function($scope) {
            
            $scope.sendFeedback = function() {
                
                console.log($scope.feedback);
                
                if ($scope.feedback.agree && ($scope.feedback.mychannel === "")) {
                    $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                    $scope.feedback.mychannel="";
                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
            };
        }])

        .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', '$window', function($scope, $stateParams, menuFactory, $window) {

            var dish= menuFactory.getDishes(parseInt($stateParams.id,10));

            $scope.showDish = false;
            $scope.message="Loading ...";
                        $scope.dish = menuFactory.getDishes().get({id:parseInt($stateParams.id,10)})
            .$promise.then(
                            function(response){
                                $scope.dish = response;
                                $scope.showDish = true;
                            },
                            function(response) {
                                $scope.message = "Error: "+response.status + " " + response.statusText;
                            }
            );

            $scope.class = "media-top";
            $scope.number = $window.innerWidth;

            $scope.changeClass = function () {

                if ($scope.number > 500) {
                    $scope.class = "media-left media-middle";
                    return $scope.class;
                }
                else {
                    $scope.class = "media-top";
                    return $scope.class;
                }
            };
            $scope.changeClass();

            
        }])

        .controller('DishCommentController', ['$scope', 'menuFactory', function($scope,menuFactory) {
            
            $scope.mycomment = {rating:5, comment:"", author:"", date:""};
            
             $scope.submitComment = function () {
                                $scope.mycomment.date = new Date().toISOString();
                console.log($scope.mycomment);
                                $scope.dish.comments.push($scope.mycomment);

                menuFactory.getDishes().update({id:$scope.dish.id},$scope.dish);
                                $scope.commentForm.$setPristine();
                                $scope.mycomment = {rating:5, comment:"", author:"", date:""};
            }
        }])

        // implement the IndexController and About Controller here
        .controller('IndexController', ['$scope', 'menuFactory', 'corporateFactory', function($scope, menuFactory, corporateFactory) {

           $scope.leader = corporateFactory.getLeader(0);

            $scope.promotion = {};
            menuFactory.getPromotion(0)
                        .then(
                            function(response){
                                $scope.promotion = response.data;
                                $scope.showDish = true;
                            }
                        );
                        $scope.showDish = false;
                        $scope.message="Loading ...";
                        $scope.dish = menuFactory.getDishes().get({id:0})
                        .$promise.then(
                            function(response){
                                $scope.dish = response;
                                $scope.showDish = true;
                            },
                            function(response) {
                                $scope.message = "Error: "+response.status + " " + response.statusText;
                            }
                        );


        }])

        .controller('AboutController', ['$scope', '$window', 'corporateFactory', function($scope, $window, corporateFactory) {

            $scope.leadership= corporateFactory.getLeaders();

            $scope.leader = corporateFactory.getLeader(0);

            $scope.class = "dl-horizontal";
            $scope.number = $window.innerWidth;

            $scope.changeClass = function () {

                if ($scope.number < 992) {
                    $scope.class = "dl-vertical";
                    return $scope.class;
                }
                else {
                    $scope.class = "dl-horizontal";
                    return $scope.class;
                }
            };
            $scope.changeClass();

        }])

;
