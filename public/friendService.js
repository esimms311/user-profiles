angular.module('userProfiles')
.service('friendService', function( $http , $q) {


    this.login = function( user ) {
      return $http.post('/api/login', user);
    };

    this.getFriends = function() {
    	var defer = $q.defer();
      $http.get('/api/profile').then(function(resp){
        var newResp = resp.data;
        defer.resolve(newResp);
      })
      return defer.promise;
    };

});
