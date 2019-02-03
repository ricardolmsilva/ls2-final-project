app.factory('AuthenticationService', function($q) {

      return {

        init: function() {

          var users = localStorage.getItem('users');

          if (!users) {

            var users = [{
                'username': '111111111',
                'password': '111111111'

              },
              {
                'username': '111111112',
                'password': '111111112'
              }
            ]

            localStorage.setItem('users', JSON.stringify(users));
          }

        },

        signIn: function(username, password) {

          let defer = $q.defer();

          var users = localStorage.getItem("users");
          users = JSON.parse(users);

          for (var i = 0; i < users.length; i++) {
            var user = users[i];

            if (user.username == username && user.password == password) {

              defer.resolve(user);
              return defer.promise;

            }else{

                defer.reject('Erro');

              }
            }

            return defer.promise;
          }

        }

      });
