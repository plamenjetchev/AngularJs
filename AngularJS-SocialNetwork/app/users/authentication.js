'use strict';
angular.module('socialNetwork.users.authentication', [])
    .factory('auth', [
        '$http',
        '$q',
        'BASE_URL',
        function ($http, $q, BASE_URL) {
            function registerUser(users) {
                var deferred = $q.defer();
                $http.post(BASE_URL + 'users/Register', users)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (error) {

                    });

                return deferred.promise;
            };
            function loginUser(users) {
                var deferred = $q.defer()
                $http.post(BASE_URL + 'users/Login', users)
                    .then(function (response) {
                         deferred.resolve(response.data);

                    }, function () {

                    });
                return deferred.promise;
            };
            function logout() {

            };
            return {
                registerUser: registerUser,
                loginUser: loginUser,
                logout: logout
            };
        }]);