angular.module('socialNetwork.home', [])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: 'app/home/home.html',
            controller: 'HomeCtrl'
        })
    }])
    .controller('HomeCtrl', [
        '$scope',
    function($scope) {
        $scope.login = function (loguser) {
            console.log(loguser) 
        };
        $scope.register = function (reguser) {
            console.log(reguser)   
        };
    }]);