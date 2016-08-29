/* eslint-disable */
angular.module( 'app' )
    .controller( 'HeaderController', function () {
      
        var vm = this; 

        vm.infoHidden = false;
        vm.infoAvailable = true;

        vm.info = {
        	'questions': 'Dette er en side hvor du kan stille spørsmål under forelesningen. ' 
        				+ 'Alle spørsmål som stilles på denne siden er anonyme, og modereres av foreleser. ' 
        				+ 'Foreleser velger selv hvilke svar som skal besvares, og står fritt til å slette upassende spørsmål.'
        }

        vm.toggleInfoHidden = function() {
            vm.infoHidden = !vm.infoHidden; 
        }
    } );