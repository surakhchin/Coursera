'use strict';

angular.module('confusionApp')


        .constant("baseURL","http://localhost:3000/")
        .service('menuFactory', ['$resource','$http', 'baseURL', function($resource, $http, baseURL) {

                this.getDishes = function(){
                                        return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
                                    };



                this.getPromotion = function(){
                                        return $resource(baseURL+"promotions/:id",null,  {'update':{method:'PUT' }});
                 };


                // this.getPromotion = function (index) {
                //     return $http.get(baseURL+"promotions/"+index);
                // };
                        
        }])

        .service('corporateFactory', ['$resource','$http', 'baseURL', function($resource, $http, baseURL) {


            this.getLeader = function(){
                                        return $resource(baseURL+"leadership/:id",null,  {'update':{method:'PUT' }});
                                    };

        }])

        .service('feedbackFactory', ['$resource', 'baseURL', '$http', function ($resource, baseURL, $http) {

            this.getFeedback = function () {
                                return $resource(baseURL+"feedback/:id",null,  {'update':{method:'PUT' }});
            }


        }])

;
