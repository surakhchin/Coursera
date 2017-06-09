'use strict';

angular.module('confusionApp', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider



             // route for sample projects
            .state('app.samples', {
                url: 'samples',
                views: {
                    'content@': {
                        templateUrl : 'views/samples.html',
                        controller  : 'JumboController'
                   }
                }
            })


            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                        controller  : 'JumboController'
                    },
                    'content2': {
                        templateUrl : 'views/home2.html',
                        controller  : 'JumboController'
                    },
                    'content3': {
                        templateUrl : 'views/samples.html',
                        controller  : 'JumboController'
                    },
                    'content4': {
                        templateUrl : 'views/home3.html',
                        controller  : 'JumboController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }

            })
        
            // route for the aboutus page
            .state('app.aboutus', {
                url:'aboutus',
                views: {
                    'content@': {
                        templateUrl : 'views/aboutus.html',
                        controller  : 'AboutController'                  
                    },
                    'content2@': {
                        templateUrl : '',
                        controller  : ''
                    },
                    'content3@': {
                        templateUrl : '',
                        controller  : ''
                    }

                }
            })
        
            // route for the contactus page
            .state('app.contactus', {
                url:'contactus',
                views: {
                    'content@': {
                        templateUrl : 'views/contactus.html',
                        controller  : 'ContactController'                  
                    }
                }
            })

            // route for the menu page
            .state('app.menu', {
                url: 'menu',
                views: {
                    'content@': {
                        templateUrl : 'views/menu.html',
                        controller  : 'MenuController'
                    }
                }
            })


                // route for the menu#menu id in menu page
            .state('app.menuid', {
                url: 'menu#menu',
                views: {
                    'content@': {
                        templateUrl : 'views/menu.html',
                        controller  : 'MenuController'
                    }
                }
            })



            // route for the dishdetail page
            .state('app.dishdetails', {
                url: 'menu/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/dishdetail.html',
                        controller  : 'DishDetailController'
                   }
                }
            });
    
        $urlRouterProvider.otherwise('/');
    }])
;
