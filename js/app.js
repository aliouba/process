angular.module("CreerCompany", [ "ngSanitize", "ui.tinymce"])
.controller("creerCompanyCtrl", function($scope, $location, $filter) {
	//Les différentes parties (Home , Entreprise et Configuration)
	$scope.showConf = false;
	$scope.showEntr = false;
	$scope.showHome = true;

	$scope.suivHome = function(){
		$scope.showHome = false;
		$scope.showEntr = true;
		$scope.showConf = false;
	};
	$scope.suivEntr = function(){
		$scope.showHome = false;
		$scope.showEntr = false;
		$scope.showConf = true;
	};
	$scope.precEntr = function(){
		$scope.showHome = true;
		$scope.showEntr = false;		
		$scope.showConf = false;
	};
	$scope.suivConf = function(){
		$scope.showHome = false;
		$scope.showEntr = false;		
		$scope.showConf = false;		
	};
	$scope.precConf = function(){
		$scope.showHome = false;
		$scope.showEntr = true;		
		$scope.showConf = false;		
	};
});