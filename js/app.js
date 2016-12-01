angular.module('ci-ng-auth', ['ui.router', 'cgNotify'])

.run(function($rootScope, $http, $httpParamSerializer, $state, $window){
	$rootScope.currentState = "";

	$rootScope.lsSet = function(key, value, json) {
		if (typeof(Storage) !== "undefined") {
	    if (json) {
	    	window.localStorage.setItem(key, JSON.stringify(value));
	    	return true;
	    } else {
	    	window.localStorage.setItem(key, value);
	    	return true;
	    }
		} else {
    	return false;
		}
  };

  $rootScope.lsGet = function(key, json) {
  	if (typeof(Storage) !== "undefined") {
	    if (json) {
	    	return JSON.parse(window.localStorage.getItem(key));
	    } else {
	    	return window.localStorage.getItem(key);
	    }
  	} else {
  		return false;
  	}
  };

  $rootScope.ssSet = function(key, value) {
    if (typeof(Storage) !== "undefined") {
      window.sessionStorage.setItem(key, value);
      return true;
    } else {
      return false;
    }
  };

  $rootScope.ssGet = function(key) {
    if (typeof(Storage) !== "undefined") {
      return window.sessionStorage.getItem(key);
    } else {
      return false;
    }
  };

  $rootScope.lsClear = function () {
  	window.localStorage.clear();
  };

  $rootScope.ssClear = function () {
    window.sessionStorage.clear();
  };

  $rootScope.logout = function (toState) {
    $window.localStorage.clear();
    $window.sessionStorage.clear();
    if (toState) {
      $state.go(toState);
    }
    $rootScope.logged = false;
  };

  $rootScope.req = function(r_url, r_method, r_data, r_xapi, succallback, errcallback) {
    var req = {};
    req.url = r_url;
    req.method = r_method;
    req.headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

    if (r_method === "POST") {
      req.data = $httpParamSerializer(r_data);
    } else {
      req.params = r_data;
    }

    if (r_xapi) { req.headers['X-API-KEY'] = $rootScope.user_data['X-API-KEY']; }

    $http(req).then(function(success) { succallback(success.data); }, function(err) { errcallback(err); });
  };

  $rootScope.isLogged = function(lsKey, yesState, noState, callback) {
    if ($rootScope.lsGet(lsKey)) {
      $rootScope.user_data = $rootScope.lsGet(lsKey, true);
      $state.go(yesState);
      $rootScope.logged = true;
    } else {
      $state.go(noState);
      $rootScope.logged = false;
    }

    if (callback) {
      callback();
    }
  };
});