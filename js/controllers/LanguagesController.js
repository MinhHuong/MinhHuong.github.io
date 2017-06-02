app.controller('LanguagesController', ["$scope", function($scope) {
	/*$scope.vn = { 
		img: "img/vn_flag.png", 
		nameLang: "Vietnamese", 
		description: "Mother tongue",
		certificate: "",
		certificateLink: ""
	};
	$scope.en = {
		img: "img/en_flag.png",
		nameLang: "English",
		description: "Working proficiency: I can read, write and engage in daily communication.",
		certificate: "IELTS 8.0",
		certificateLink: "https://www.google.com"
	};
	$scope.fr = {
		img: "img/fr_flag.png",
		nameLang: "French",
		description: "Bilingual proficiency: I have learnt French since I was 6.",
		certificate: "DELF B2",
		certificateLink: "https://tinyurl.com/yc3qdyeq"
	};*/
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