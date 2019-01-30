var app = angular.module("portalFinancas", ["ngRoute"]);

//, "ui.bootstrap"

app.run(function($rootScope, $route, AuthenticationService) {

    $rootScope.$on('$routeChangeSuccess', function() {
        $rootScope.href = $route.current.href;
        document.title = $route.current.title;
    });

    AuthenticationService.init();

});

app.config(['$routeProvider', function AppConfig($routeProvider) {

    $routeProvider.when("/",{
        templateUrl:"views/portal.html",
        controller:"homeCtrl",
        title:"Faturas e Recibos Verdes"
    })
    .when("/recibos/emitirfatura",{
        templateUrl:"views/emitirfatura.html",
        controller:"homeCtrl",
        title:"Faturas e Recibos Verdes",
    })
    .when("/recibos/consultarfatura",{
        templateUrl:"views/consultar.html",
        controller:"homeCtrl",
        title:"Faturas e Recibos Verdes"
    })
    .otherwise({
        templateUrl:"views/login.html",
        controller:"loginCtrl"
    });
}]);

/*app.config(['$translateProvider', function($translateProvider){

    $translateProvider.useStaticFilesLoader({
        prefix:'/i18n',
        suffix:'.json'
    })

    $translateProvider.preferredLanguage('pt');

}])*/
