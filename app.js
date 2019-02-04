var app = angular.module("portalFinancas", ["ngRoute"]);


app.run(function($rootScope, $route, AuthenticationService, $location) {

  AuthenticationService.init();

  $rootScope.$on('$routeChangeSuccess', function() {

    if ($rootScope.authenticatedUser == null) {
      event.preventDefault();
      $location.path('/login');
    }

    $rootScope.currentPath = $location.path();
    $rootScope.href = $route.current.href;
    document.title = $route.current.title;

  });
});


app.config(['$routeProvider', function AppConfig($routeProvider) {

  $routeProvider.when("/login", {
      templateUrl: "views/login.html",
      controller: "loginCtrl",
      title: "Login"
    })

    .when("/portal", {
      templateUrl: "views/portal.html",
      controller: "homeCtrl",
      title: "Finanças - Portal"
    })

    .when("/recibos/emitirfatura", {
      templateUrl: "views/emitirfatura.html",
      controller: "emitirFaturaCtrl",
      title: "Finanças - Emitir Fatura",
    })

    .when("/recibos/consultarfatura", {
      templateUrl: "views/consultar.html",
      controller: "consultarFaturaCtrl",
      title: "Finanças - Consultar Fatura"
    })

    .when("/recibos/detalhesfatura/:nFatura", {
      templateUrl: "views/detalhefatura.html",
      controller: "consultarFaturaCtrl",
      title: "Finanças - Detalhes Fatura"
    })

    .otherwise({
      templateUrl: "views/portal.html",
      controller: "homeCtrl",
      title: "Finanças - Portal"
    });

}]);

/*app.config(['$translateProvider', function($translateProvider){

    $translateProvider.useStaticFilesLoader({
        prefix:'/i18n',
        suffix:'.json'
    })

    $translateProvider.preferredLanguage('pt');

}])*/
