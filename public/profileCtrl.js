angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
  // FIX ME - assign values to $scope.currentUser and $scope.friends
  getFriends = function() {
    friendService.getFriends().then(function(resp){
      $scope.friends = resp.friends;
      $scope.currentUser = resp.user;
    });
  }
  getFriends();
});
