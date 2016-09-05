/* eslint-disable */
angular.module( 'app' )
    .controller( 'SiteController', function ($interval, $scope, $routeParams) {

        console.log( $routeParams.title ); 
      
        var vm = this; 

        vm.loggedIn = false; 

        vm.toggleLoggedIn = function() {
        	vm.loggedIn = !vm.loggedIn; 
        }

        vm.infoActive = false;

        vm.info = {
            faculties: 'Klikk deg inn på avdelingene faget du er ute etter hører til.',
            questions: 'Dette er en side hvor du kan stille spørsmål under forelesningen. ' 
                        + 'Alle spørsmål som stilles på denne siden er anonyme, og modereres av foreleser. ' 
                        + 'Foreleser velger selv hvilke svar som skal besvares, og står fritt til å slette upassende spørsmål.'
        }

        vm.toggleInfoActive = function() {
            vm.infoActive = !vm.infoActive;
        }

        vm.defaultLogo = 1; 
        vm.currentLogo = 1;
        vm.maxLogo = 6; 

        var interval;

        function updateLogo() {
            if (vm.currentLogo === vm.maxLogo) {
                vm.currentLogo = vm.defaultLogo;
            } else {
                vm.currentLogo++;
            }
        }

        vm.animateLogo = function() {
            interval = $interval(updateLogo, 100);
        }

        vm.resetLogo = function() {
            $interval.cancel(interval);
        }
} );