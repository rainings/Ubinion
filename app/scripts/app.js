'use strict';

/**
 * @ngdoc overview
 * @name UbinionApp
 * @description
 * # UbinionApp
 *
 * Main module of the application.
 */
angular
  .module('UbinionApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/templates/pages/about.html',
        controller: 'AboutCtrl'
      })
      .when('/privacy', {
        templateUrl: 'views/templates/pages/privacy.html',
        controller: 'PrivacyCtrl'
      })
      .when('/terms', {
        templateUrl: 'views/templates/pages/terms.html',
        controller: 'TermsCtrl'
      })
      .when('/account-login', {
        templateUrl: 'views/templates/users/account-login.html',
        controller: 'AccountLoginCtrl'
      })
      .when('/account-signup', {
        templateUrl: 'views/templates/users/account-signup.html',
        controller: 'AccountSignupCtrl'
      })
      .when('/account-forgot-pw', {
        templateUrl: 'views/templates/users/account-forgot-pw.html',
        controller: 'AccountForgotPwCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
