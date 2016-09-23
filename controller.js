angular.module('userProfiles').controller('MainController', function($scope, mainService) {

  	$scope.getUsers = function () {
      mainService.getUsers()
      .then( function ( users ) {
        $scope.users = users;
        console.log( users );
      })
    }

    $scope.getUsers();


});
