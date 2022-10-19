var maakondApp = angular.module("maakondApp", [])
//-------------------maakonnad
maakondApp.controller("maakonnadCtrl", function($scope, $http){
	$http({
		method: 'GET',
		url: 'js/maakond.json'
	}).then(function (response){
		$scope.maakonnadList = response.data;
console.log($scope.maakonnadList);
	})
})

//------------------------------------cities

maakondApp.controller("cityCtrl", function($scope, $http){
	$http.get('js/databaseCity.php')
	.then(function (response) {$scope.cityList = response.data.records;
		console.log($scope.cityList);
	});
})
//------------------------------------gallery
maakondApp.controller("galleryCtrl", function($scope, $http){
	$http.get('js/databaseGallery.php')
	.then(function (response) {$scope.galleryList = response.data.records;
		console.log($scope.galleryList);
	});
})		
//-----------------управление
maakondApp.controller("manageBlock", function($scope){
		$scope.displayAbout = true;
		$scope.displayMaakond = false;
		$scope.displayCity = false;
		$scope.displayGallery = false;

	$scope.toggleDisplayAbout = function(){
		$scope.displayAbout = true;
		$scope.displayMaakond = false;
		$scope.displayCity = false;
		$scope.displayGallery = false;
	};
	$scope.toggleDisplayMaakond = function(){
		$scope.displayAbout = false;
		$scope.displayMaakond = true;
		$scope.displayCity = false;
		$scope.displayGallery = false;
	};
	$scope.toggleDisplayCity = function(){
		$scope.displayAbout = false;
		$scope.displayMaakond = false;
		$scope.displayCity = true;
		$scope.displayGallery = false;
	};
	$scope.toggleDisplayGallery = function(){
		$scope.displayAbout = false;
		$scope.displayMaakond = false;
		$scope.displayCity = false;
		$scope.displayGallery = true;
	};
})	