'use strict';

/* Controllers */
function HomeCtrl($scope) {
	$scope.message = "Hello!";
}
HomeCtrl.$inject = ['$scope'];

function MainMenuCtrl($scope, User) {
	$scope.menus = [{url: '/#/home', text: 'Home'}];
	$scope.authenticated = User.isAuthenticated();
	$scope.user = {useremail: '', password:'', passwordConfirmation: ''};

	$scope.openSignIn = function () {
    $scope.signInShouldBeOpen = true;
    $scope.signUpShouldBeOpen = false;
	};

	$scope.closeSignIn = function () {
    $scope.signInShouldBeOpen = false;
    $scope.errorMessage = null;
	};

	$scope.signIn = function () {
    User.login($scope.user.useremail, $scope.user.password, function(response) {
	  	$scope.errorMessage = response.message;
	  	$scope.$apply(); //I don't know why the change is not being emmited to the view
		});
	};

	$scope.openSignUp = function () {
    $scope.signUpShouldBeOpen = true;
    $scope.signInShouldBeOpen = false;
	};

	$scope.closeSignUp = function () {
    $scope.signUpShouldBeOpen = false;
    $scope.errorMessage = null;
	};

	$scope.signUp = function () {
    console.log($scope.user)
    User.signUp($scope.user.useremail, $scope.user.password, $scope.user.passwordConfirmation, function(response) {
	  	$scope.errorMessage = response.message;
	  	$scope.$apply(); //I don't know why the change is not being emmited to the view
		});
	};

}
MainMenuCtrl.$inject = ['$scope', 'User'];

function SidebarCtrl($scope) {
	$scope.sidebarTitle = 'Sidebar';
	$scope.menus = [];
}
SidebarCtrl.$inject = ['$scope'];