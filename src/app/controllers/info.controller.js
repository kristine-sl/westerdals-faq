/* eslint-disable */
angular.module( 'app' )
    .controller( 'InfoController', function ($location) {

        var vm = this;

        vm.infoActive = false;

        vm.infoOptions = {
            // '/faculties': 'Klikk deg inn på avdelingene faget du er ute etter hører til.',
            // '/teacher': 'Her kan du opprette nye fag, samt klikke deg inn på fag du allerede er registrert på.',
            '/': 'Dette er en side hvor du kan stille spørsmål under forelesningen. ' 
                + 'Alle spørsmål som stilles på denne siden er anonyme, og modereres av foreleser. ' 
                + 'Foreleser velger selv hvilke svar som skal besvares, og står fritt til å slette upassende spørsmål.'
            // '/courses/a': 'Dette er en side hvor du kan stille spørsmål under forelesningen. ' 
            //     + 'Alle spørsmål som stilles på denne siden er anonyme, og modereres av foreleser. ' 
            //     + 'Foreleser velger selv hvilke svar som skal besvares, og står fritt til å slette upassende spørsmål.', 
            // '/faq': 'Denne siden monitoreres av Kristine, og besvares så fort hun ser at spørsmålene har kommet inn. '
            //     + 'Om det haster og du trenger svar umiddelbart, send mail til sunkri@westerdals.no.',
            // '/register/student': 'Her kan du registrere deg en studentkonto, hvor du kan lage lister over dine fag for enkel oversikt, '
            //     + 'samt søke om å bli satt som moderator eller veileder på et fag. Vi ber deg om å oppgi navn her, men det er kun for de '
            //     + 'sistnevnte funksjonene vedrørende moderator og veileder. Ingen av spørsmålene som blir sendt opp er knyttet opp mot '
            //     + 'en bruker, og det er ikke mulig å se hvem som har spurt hva.'
        }

        var url = $location.path(); 

        vm.info = vm.infoOptions[ url ]; 

        vm.toggleInfoActive = function() {
            vm.infoActive = !vm.infoActive;
        }
    } );