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

$(document).ready(function() {
	$("#my-portrait").click(function() {
		$(this).animate({
			marginLeft: '-=450px'
		}, 1200);
	});
});
