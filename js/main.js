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
		.when('/education', {
			controller: "EducationController",
			templateUrl: "views/education.html"
		})
		.when('/projects', {
			controller: "ProjectsController",
			templateUrl: "views/projects.html"
		})
		.when('/languages', {
			controller: "LanguagesController",
			templateUrl: "views/languages.html"
		})
		.when('/activities', {
			controller: "ActivitesController",
			templateUrl: "views/activities.html"
		})
		.when('/contact', {
			controller: "ContactController",
			templateUrl: "views/contact.html"
		})
		.otherwise({
			redirectTo: "/home"
		});
}]);
