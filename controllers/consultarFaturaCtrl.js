app.controller('consultarFaturaCtrl', function($rootScope, $scope, $routeParams, InvoiceService) {

  $scope.faturas = InvoiceService.getInvoices();



      var nFatura = $routeParams.nFatura

      var faturas = [];
      faturas = JSON.parse(localStorage.getItem('faturas'));
      
      for(i=0 ; i< faturas.length ; i++){
          if(faturas[i].nFatura == nFatura){
            $scope.fatura = faturas[i];
          }
      }



  function Ctrl() {
    $scope.date = new Date();
  };

  $scope.addPlanData = function() {
    if (new Date() < new Date($scope.date)) {
      alert('Please select todays date or previous date');
    }
  };

});
