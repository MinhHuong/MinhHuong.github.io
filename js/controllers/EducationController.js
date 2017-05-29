app.controller("EducationController", ["$scope", function($scope) {
	$scope.masterNetwork = {
		degree: "Master Informatics, specialized in Network",
		school: "French University Pole, Ho Chi Minh city, Vietnam",
		year: "2016 - 2017"
	};
	$scope.bachelorCS = {
		degree: "Bachelor of Computer Science",
		school: "French University Pole, Ho Chi Minh city, Vietnam",
		year: "2013 - 2016"
	};
	$scope.highschool = {
		degree: "High school",
		school: "Le Hong Phong high school, Ho Chi Minh city, Vietnam",
		year: "2010 - 2013"
	};
}]);

app.directive('education', function() {
	return {
		restrict: 'E',
		scope: {
			eduInfo: '=info'
		},
		templateUrl: 'views/templates/edu-info.html'
	}
});