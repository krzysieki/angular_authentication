'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var services = angular.module('app.services', []);
services.factory('User', function() {
  var _this = this;
  this.authenticated = false;
  this.name = null;
  this.token = null;
  return {
    isAuthenticated: function() {
      return _this.authenticated;
    },
    getName: function() {
      return _this.name;
    },
    getToken: function() {
      return _this.token;
    },
    login: function(useremail, password, callback) {
      return $.post('/api/v1/tokens.json',
                    { user_login: {email: useremail, password: password} }, 'json').
                    done(function(data){
                      console.log('authenticated')
                      _this.name = useremail;
                      _this.token = data.token
                      _this.authenticated = true;
                      return callback(data);
                    }).
                    fail(function(data){
                      var response = jQuery.parseJSON(data.responseText);
                      return callback(response);
                    });
    },
    logout: function(callback) {
      /*if (_this.authenticated) {
        return $.post('/users/sign_out', {_method:'delete'}, (function(data) {
          if (data.result) {
            _this.authenticated = false;
          }
          return callback(data.result);
        }), 'json');
      } else {
        return callback(false);
      }*/
    },


    signUp: function(useremail, password, passwordConfirmation, callback) {

      return $.post('/api/v1/registrations.json',
                    {user:
                      {email: useremail, password: password, password_confirmation: passwordConfirmation}
                    }, 'json').
                    done(function(data){
                      console.log('done');

                    }).
                    fail(function(data){
                      console.log('fails')

                    });
    }
  };
});