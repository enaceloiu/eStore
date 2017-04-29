import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import 'bootstrap';

import '../sass/style.scss';

// Home Page
import homeCtrl from './home/';
import homeTemplate from './home/template.html';

angular.module('netix', [
    uiRouter,
    ngAnimate
])
    .config(($stateProvider, $urlRouterProvider, $httpProvider) => {

        $stateProvider
            .state('app', {
                templateUrl: homeTemplate,
                controller: homeCtrl,
                controllerAs: 'home',
                url: ''
            });

        $urlRouterProvider.otherwise('/home');

        // $httpProvider.interceptors.push('httpInterceptorService');
    });

angular.bootstrap(document, ['netix']);
