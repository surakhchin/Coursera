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

        .controller('ContactController', ['$scope', 'feedbackFactory', function($scope, feedbackFactory) {

            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
            
            var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
            
            $scope.channels = channels;
            $scope.invalidChannelSelection = false;




            feedbackFactory.getFeedback().query(
                                        function(response){
                                            $scope.myFeedback = response;
                                            console.log($scope.myFeedback);
                                        },
                                        function(response) {
                                            $scope.message = "Error: "+response.status + " " + response.statusText;
                                        }
                                    );
        }])

        .controller('FeedbackController', ['$scope', 'feedbackFactory', function($scope, feedbackFactory) {

                console.log($scope.myFeedback);
            $scope.sendFeedback = function() {


                console.log($scope.feedback);
                console.log($scope.myFeedback);


                $scope.myFeedback.push($scope.feedback);
                console.log($scope.myFeedback);
                feedbackFactory.getFeedback().save($scope.myFeedback);
                console.log($scope.myFeedback);



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
            };
        }])

        // implement the IndexController and About Controller here
        .controller('IndexController', ['$scope', 'menuFactory', 'corporateFactory', function($scope, menuFactory, corporateFactory) {


           $scope.leader = corporateFactory.getLeader().get({id:0})
                        .$promise.then(
                            function(response){
                                $scope.leader = response;
                            },
                            function(response) {
                                $scope.message = "Error: "+response.status + " " + response.statusText;
                            }
                        );
            // $scope.promotion = {};
            // menuFactory.getPromotion(0)
            //             .then(
            //                 function(response){
            //                     $scope.promotion = response.data;
            //                     $scope.showDish = true;
            //                 }
            //             );

                        menuFactory.getPromotion().get({id:0})
                        .$promise.then(
                            function(response){
                                $scope.promotion = response;
                            },
                            function(response) {
                                $scope.message = "Error: "+response.status + " " + response.statusText;
                            }
                        );


                        $scope.showDish = false;
                        $scope.message="Loading ...";
                        menuFactory.getDishes().get({id:0})
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


            corporateFactory.getLeader().query(
                function(response) {
                    $scope.leadership = response;
                    console.log($scope.leadership);
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                });

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
