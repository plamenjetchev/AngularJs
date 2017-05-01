angular.module('socialNetwork.home', [
    'socialNetwork.users.authentication',
])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: 'app/home/home.html',
            controller: 'HomeCtrl'
        })
    }])
    .controller('HomeCtrl', [
        '$scope',
        'auth',
    function($scope, auth ) {
        $scope.login = function (loguser) {
            auth.loginUser(loguser)

        };
        $scope.register = function (reguser) {
            auth.registerUser(reguser)
            .then(function(registeredUser) {
                console.log(registeredUser);
            })
        };
    }]);