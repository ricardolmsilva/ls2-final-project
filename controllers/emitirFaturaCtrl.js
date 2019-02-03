app.controller('emitirFaturaCtrl', function($rootScope, $scope, $location) {

  $scope.emitirssFatura = function() {


    var fatura = {
      "dataPrestacao": $scope.fatura.dataPrestacao,
      "tipo": $scope.fatura.tipo,
      "nifPrestador": $rootScope.authenticatedUser.nif,
      "nomePrestador": $rootScope.authenticatedUser.nome,
      "moradaPrestador": $rootScope.authenticatedUser.morada,
      "atividadePrestador": $rootScope.authenticatedUser.atividade,
      "nifAdquirente": $scope.fatura.nifAdquirente,
      "nomeAdquirente": $scope.fatura.nomeAdquirente,
      "moradaAdquirente": $scope.fatura.moradaAdquirente,
      "paisAdquirente": $scope.fatura.paisAdquirente,
      "descricao": $scope.fatura.descricao,
      "regimeIva": $scope.fatura.regimeIva,
      "valorBase": $scope.fatura.valorBase,
      "totalFatura": $scope.fatura.totalFatura
    }

    var faturas = localStorage.getItem('faturas');

    if (!faturas) {

      var faturas = [];
      faturas.push(fatura);
      localStorage.setItem('faturas', JSON.stringify(faturas));


    } else {

      var faturas = [];
      faturas = JSON.parse(localStorage.getItem('faturas'));
      faturas.push(fatura);
      localStorage.setItem('faturas', JSON.stringify(faturas));

    }
    $location.path('/portal');
  }


  function Ctrl($scope) {
    $scope.date = new Date();
  };

  $scope.addPlanData = function() {
    if (new Date() < new Date($scope.date)) {
      alert('Please select todays date or previous date');
    }
  };

});
