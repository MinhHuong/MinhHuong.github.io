var translationEN = {
	TEST: "hello"
};

var translationFR = {
	TEST: "bonjour"
};

app.config(['$translateProvider', function ($translateProvider) {
  // add translation tables
  $translateProvider.translations('en', translationEN);
  $translateProvider.translations('fr', translationFR);
  $translateProvider.preferredLanguage('en');
  $translateProvider.fallbackLanguage('en');
}]);
 
app.controller('Ctrl', ['$translate', '$scope', function ($translate, $scope) {
 
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
}]);