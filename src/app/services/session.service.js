/* eslint-disable */
angular.module( 'app' )
    .service('Session', function( $http ) {

        function post( parameters ) {
            return $http.post( 'http://faq.flugg.space/sessions', parameters ).then( function( response ) {
                return response.data.data; 
            }); 
        }

        function destroy() {
            return $http.delete( 'http://faq.flugg.space/sessions' ).then( function( response ) {
                return response.data.data;
            });
        }

        return {
            post: post,
            destroy: destroy
        };
    }); 