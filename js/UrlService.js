angular.module('ci-ng-auth')


.service('UrlService', function () {
  var data = {
    baseurl: './api/',
    login: 'auth/login',
    register: 'auth/register',
    profile_update: 'auth/update',
    profile_info: 'auth/info',
  };

  this.get = function (id, single) {
    if (id) {
      return data.baseurl + data[id];
    } else {
      return data.baseurl;
    }
  }
});
