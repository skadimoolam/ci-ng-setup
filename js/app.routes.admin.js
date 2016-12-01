angular.module('ci-ng-auth')

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		
		.state('admin', {
			url: '/admin',
			templateUrl: 'tpl/admin/admin.html',
			controller: function($rootScope, $scope, $state) {
				$rootScope.currentState = "admin";

				if (!$rootScope.ssGet('loggedIn')) {
					$state.go('login');
				};
			}
		})


		.state('admin.dashboard', {
			url: '/dashboard',
			templateUrl: 'tpl/admin/dashboard.html',
			controller: function($rootScope, $scope) {
				var userData = $rootScope.lsGet('user-data', true);
				$rootScope.currentState = "admin.dashboard";
			}
		})

		.state('admin.addnew', {
			url: '/addnew',
			templateUrl: 'tpl/admin/addnew.html',
			controller: function($rootScope, $scope, UrlService) {
				var userData = $rootScope.lsGet('user-data', true);
				$rootScope.currentState = "admin.addnew";
				$scope.registerForm = {};

				$scope.register = function () {
					$rootScope.req(UrlService.get('register'), "POST", $scope.registerForm, false, function (resp) {
						if (resp.code === "success") {
							notify({ message: resp.message, duration: 2000, position: 'right' });
							$scope.registerForm = {};
						} else {
							notify({ message: resp.message, duration: 2000, position: 'right' });
						}
					});
				};
			}
		})

		.state('admin.settings', {
			url: '/settings',
			templateUrl: 'tpl/admin/settings.html',
			controller: function($rootScope, $scope, UrlService) {
				$rootScope.currentState = "admin.settings";
				$scope.profile = $rootScope.lsGet('user-data', true);

				$scope.updateProfile = function() {
					$rootScope.req(UrlService.get('profile_update'), "POST", $scope.profile, false, function(resp) {
						if (resp.code === "success") {
							notify({ message: resp.message, duration: 2000, position: 'right' });
							$rootScope.req(UrlService.get('profile_info'), "POST", $scope.profile, false, function(resp) {
								$rootScope.lsSet('user-data', resp.data, true);
							});
						} else {
							notify({ message: resp.message, duration: 2000, position: 'right' });
						}
					});
				};
			}
		});
});