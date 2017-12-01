'use strict';

angular.module('confusionApp', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider

            // route to #sampleprojects id
            .state('app.sampleprojects', {
                url:'#sampleprojects',
                views: {
                    'header@': {
                        templateUrl : 'views/headeranimate.html'
                    },
                    'content@': {
                        templateUrl : 'views/homepointer.html'

                    },
                    'content2@': {
                        templateUrl : 'views/samplepointer.html',
                        controller  : 'SamplesController'
                    }
                }

            })


            // route for the #sampledetals page ***NEW: 6/7/2017
            .state('app.skillsid', {
                url: '#skills/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/homepointerstatic.html',
                        controller  : 'DishDetailController'
                   },
                    'content2@': {
                        templateUrl : 'views/sampledetailspointer.html',
                        controller  : 'SamplesController'
                    },
                    'content3@': {
                        templateUrl : 'views/creds.html',
                        controller  : ''
                    }
                }
            })




            // route to #skills id
            .state('app.skills', {
                url:'#skills',
                views: {
                    'header@': {
                        templateUrl : 'views/headeranimate.html'
                    },
                    'content@': {
                        templateUrl : 'views/homepointer.html'

                    },
                    'content2@': {
                        templateUrl : 'views/samplepointer.html',
                        controller  : 'SamplesController'
                    }
                }

            })




            // route to #animate page
            .state('app.animateid', {
                url:'#animate',
                views: {
                    'header@': {
                        templateUrl : 'views/header.html'
                    },
                    'content@': {
                        templateUrl : 'views/animatepointer.html'

                    },
                    'content2@': {
                        templateUrl : 'views/samplepointer.html',
                        controller  : 'SamplesController'
                    }
                }

            })





            // route to animate page
            .state('app.animate', {
                url:'animate',
                views: {
                    'header@': {
                        templateUrl : 'views/header.html'
                    },
                    'content@': {
                        templateUrl : 'views/animate.html'

                    }
                }

            })

            // route to animate2 page
            .state('app.animate2', {
                url:'animate2',
                views: {
                    'header@': {
                        templateUrl : 'views/header.html'
                    },
                    'content@': {
                        templateUrl : 'views/animate2.html'

                    }
                }

            })






            // -----NEW CODE 6/13/2017
            // route for DemoDetails page
            .state('app.demodetails', {
                url: '#demodetail/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/demodetails.html',
                        controller  : 'DemoDetailController'
                   },
                    'content2@': {
                        templateUrl : null
                    },
                    'content3@': {
                        templateUrl : null
                    }
                }
            })

            // ---------NEW CODE 6/12/2017----------
            //route for Demo page
            .state('app.demo', {
                url: 'demo',
                views: {
                    'content@': {
                        templateUrl : 'views/demo.html',
                        controller  : 'DemoController'
                    },
                    'content2@': {
                        templateUrl : null
                    },
                    'content3@': {
                        templateUrl : null
                    }
                }
            })

            // route for the demo#demo id in menu page
            .state('app.demoid', {
                url: '#demo',
                views: {
                    'header@': {
                        templateUrl : 'views/headerdemo.html'
                    },
                    'content@': {
                        templateUrl : 'views/demo.html',
                        controller  : 'DemoController'
                    },
                    'content2@': {
                        templateUrl : null
                    },
                    'content3@': {
                        templateUrl : null
                    }
                }
            })

            // route for the /aboutus#aboutme tag in aboutus page
            .state('app.aboutusid', {
                url: '#aboutme',
                views: {
                    'header@': {
                        templateUrl : 'views/headerabout.html'
                    },
                    'content@': {
                        templateUrl : 'views/aboutus.html',
                        controller  : 'AboutController'
                    },
                    'content2@': {
                        templateUrl : null
                    },
                    'content3@': {
                        templateUrl : null
                    }
                }
            })

            // route for the /contactus#contactme tag in contactus page
            .state('app.contactusid', {
                url: '#contactme',
                views: {
                    'header@': {
                        templateUrl : 'views/headercontact.html'
                    },
                    'content@': {
                        templateUrl : 'views/contactus.html',
                        controller  : 'ContactController'
                    },
                    'content2@': {
                        templateUrl : null
                    },
                    'content3@': {
                        templateUrl : null
                    }
                }
            })


           // route for the dishdetail page
            .state('app.dishdetails', {
                url: '#dishdetailid/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/dishdetail.html',
                        controller  : 'DishDetailController'
                   },
                    'content2@': {
                        templateUrl : null
                    },
                    'content3@': {
                        templateUrl : null
                    }
                }
            })

            //-----------------------------------------------



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
                        templateUrl : 'views/header.html'
                    },
                    'content': {
                        templateUrl : 'views/home.html'
                    },
                    'content2': {
                        templateUrl : 'views/samples.html'
                    },
                    'content3': {
                        templateUrl : 'views/creds.html'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html'
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
                        templateUrl : null
                    },
                    'content3@': {
                        templateUrl : null
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
                    },
                    'content2@': {
                        templateUrl : null
                    },
                    'content3@': {
                        templateUrl : null
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
                    },
                    'content2@': {
                        templateUrl : null
                    },
                    'content3@': {
                        templateUrl : null
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
                    },
                    'content2@': {
                        templateUrl : null
                    },
                    'content3@': {
                        templateUrl : null
                    }

                }
            })


            // route for the sampledetals page ***NEW: 6/7/2017
            .state('app.sampledetails', {
                url: 'samples/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/static.html',
                        controller  : 'DishDetailController'
                   },
                    'content2@': {
                        templateUrl : 'views/sampledetails.html',
                        controller  : 'SamplesController'
                    },
                    'content3@': {
                        templateUrl : 'views/creds.html',
                        controller  : ''
                    }
                }
            });


    
        $urlRouterProvider.otherwise('/');
    }])
;
