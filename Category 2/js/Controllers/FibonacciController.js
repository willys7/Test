(function () {
    'use strict';
    
        angular.module('Fibonacci')
            .controller('FibonacciController',fibonacciController)
            .component('fibonacciComponent',{
                templateUrl: '/views/fibonacci.html',
                controller: 'FibonacciController',
                controllerAs: 'vmHome'
            });
            //Nuevos servicios y repositorios
            fibonacciController.$inject = [
                "$scope",
                '$uibModal',
                '$state',
            ];
    
            function fibonacciController($scope,$uibModal, $state){
                var vm = this;
                vm.fibo = fibo;
                console.log(vm.numberF)
                function fibo(){
                    var fibonacci_series = function (n) 
                    {
                    if (n===1) 
                    {
                        return [0, 
                                1];
                    } 
                    else 
                    {
                        var s = fibonacci_series(n - 1);
                        s.push(s[s.length - 1] + s[s.length - 2]);
                        return s;
                    }
                    };

                    console.log(fibonacci_series(vm.numberF));

                    

                }
    
            }
    })();