app.factory('InvoiceService', function() {

  return {
    getInvoices: function() {

      return JSON.parse(localStorage.getItem('faturas'));

    },

    getInvoice: function(nFatura){
      alert(nFatura);
      for(i=0 ; i< faturas.length ; i++){
          if(faturas[i].nFatura == nFatura){
            return faturas[i];
          }
      }

    }

  }


});
