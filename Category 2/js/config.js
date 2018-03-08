(function() {
    'use strict';
    angular.module('Fibonacci')
    .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {
        
        var fibonacciState = {
            name : 'fibonacci',
            url : '/fibonacci',
            component : 'fibonacciComponent'
        }
       

        $stateProvider.state(fibonacciState);
        $urlRouterProvider.otherwise("/fibonacci");
    }
})();