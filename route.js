myapp.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'views/indexview.html',
		controller:'gotcontroller',
		controllerAs:'got'
	})
	.when('/books/:name',{
		templateUrl:'views/bookview.html',
		controller:'bookcontroller',
		controllerAs:'book'
	})
	.when('/house/:name',{
		templateUrl:'views/houseview.html',
		controller:'housecontroller',
		controllerAs:'house'
	})
	.when('/character/:name',{
		templateUrl:'views/characterview.html',
		controller:'charactercontroller',
		controllerAs:'character'
	})
	.otherwise({
		template:"<h4>Page Not Found</h4>"
	})
}])