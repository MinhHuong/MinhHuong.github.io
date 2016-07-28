var app = angular.module("PortfolioApp", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/home', {
			controller: "HomeController",
			templateUrl: "views/home.html"
		})
		.when('/experiences', {
			controller: "ExperiencesController",
			templateUrl: "views/experiences.html"
		})
		.when('/contact', {
			controller: "ContactController",
			templateUrl: "views/contact.html"
		})
		.otherwise({
			redirectTo: "/home"
		});
}]);
