app.controller('LanguagesController', ["$scope", function($scope) {
	$scope.vn = { 
		img: "img/vn_flag.png", 
		nameLang: "Vietnamese", 
		description: "My native language" 
	};
	$scope.en = {
		img: "img/en_flag.png",
		nameLang: "English",
		description: "Working proficiency"
	};
	$scope.fr = {
		img: "img/fr_flag.png",
		nameLang: "French",
		description: "Bilingual proficinecy"
	};
}]);

app.directive('language', function() {
	return {
		restrict: 'E',
		scope: {
			langInfo: '=info'
		},
		templateUrl: 'views/templates/lang-info.html'
	}
});