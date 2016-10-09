/* eslint-disable */
angular.module( 'app' )
    .controller( 'LogoController', function ( $interval, Faculty ) {

        var vm = this;

        var faculties = {
            none: 1, 
            management: 2, 
            technology: 3, 
            arts: 4, 
            communication: 5,
            film_tv_games: 6
        }

        var defaultLogo = faculties.technology; 
        var currentLogo = defaultLogo;
        var maxLogo = 6; 

        var interval;

        function updateLogo() {
            if (currentLogo === maxLogo) {
                currentLogo = 1;
            } else {
                currentLogo++;
            }
        }

        vm.animateLogo = function() {
            interval = $interval(updateLogo, 100);
        }

        vm.resetLogo = function() {
            $interval.cancel(interval);
            currentLogo = defaultLogo; 
        }

        vm.getSource = function( faculty ) {
            // defaultLogo = faculties[ faculty ];
            return 'logo-' + currentLogo + '.png'; 
        }
} );