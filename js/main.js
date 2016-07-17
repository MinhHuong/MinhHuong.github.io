var app = angular.module("PortfolioApp", ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: "HomeController",
			templateUrl: "views/home.html"
		})
		.when('/contact', {
			controller: "ContactController",
			templateUrl: "views/contact.html"
		})
		.otherwise({
			redirectTo: "/"
		});
}]);