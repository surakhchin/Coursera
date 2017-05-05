'use strict';

angular.module('confusionApp')

        .controller('MenuController', ['$scope', 'demoFactory', '$window', function($scope, demoFactory, $window) {
            
            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = true;
            $scope.class = "media-top";
            $scope.number = $window.innerWidth;

            $scope.dishes= demoFactory.getDishes();

                        
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

        .controller('DishDetailController', ['$scope', '$stateParams', 'demoFactory', '$window', function($scope, $stateParams, demoFactory, $window) {

            var dish= demoFactory.getDish(parseInt($stateParams.id,10));
            
            $scope.dish = dish;
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

        .controller('DishCommentController', ['$scope', function($scope) {
            
            $scope.mycomment = {rating:5, comment:"", author:"", date:""};
            
            $scope.submitComment = function () {
                
                $scope.mycomment.date = new Date().toISOString();
                console.log($scope.mycomment);
                
                $scope.dish.comments.push($scope.mycomment);
                
                $scope.commentForm.$setPristine();
                
                $scope.mycomment = {rating:5, comment:"", author:"", date:""};
            };
        }])

        // implement the IndexController and About Controller here
        .controller('IndexController', ['$scope', 'demoFactory', 'corporateFactory', function($scope, demoFactory, corporateFactory) {

            var leader= corporateFactory.getLeader(3);

            $scope.leader = leader;

            var promotion = demoFactory.getPromotion(0);

            $scope.promotion = promotion;

            $scope.dish= demoFactory.getDish(0);

            $scope.skills = demoFactory.getSkills();

            $scope.samples = demoFactory.getSamples();

            $scope.cridentials = demoFactory.getCridentials();



        }])

        .controller('AboutController', ['$scope', '$window', 'corporateFactory', 'demoFactory', function($scope, $window, corporateFactory, demoFactory) {

            $scope.leadership= corporateFactory.getLeaders();

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

            $scope.goals = demoFactory.getGoals();

        }])

;
