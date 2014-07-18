// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//= require angular/angular
//= require angular-ui/ui-bootstrap-tpls-0.1.0
//= require_tree .

// Declare app level module which depends on filters, and services
var app = angular.module('app', ['app.services', 'app.directives', 'ui.bootstrap']);
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	//$locationProvider.html5Mode(true);
	$routeProvider.when('/home', {templateUrl: '/partials/home.html', controller: HomeCtrl});
    $routeProvider.otherwise({redirectTo: '/home'});


$.ajaxSetup({
  headers: {
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
  }
});


}]);
