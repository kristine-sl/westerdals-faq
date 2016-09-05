'use strict'

var paths = {
    source: 'src',
    build: 'public'
};

require( 'mango-gulp' )( {

    /*
     * Application configuration.
     */
    name: 'Westerdals FAQ',
    description: '',
    url: 'https://faq.kristine.space',
    analyticsId: 'UA-12345678-1',

    /*
     * Language settings
     */
    locale: 'nb',

    /*
     * Server configuration.
     */
    port: 9000,

    /*
     * Path configuration.
     */
    source: paths.source,
    build: paths.build,

    /*
     * Favicon configuration.
     */
    favicon: 'favicon.png',

    /*
     * JavaScript configuration.
     */
    js: {
        source: 'app',
        minify: true,
        revise: true,
        includeBefore: [],
        includeAfter: []
    },

    /*
     * Sass configuration.
     */
    sass: {
        source: 'styles',
        minify: true,
        revise: true
    },

    /*
     * HTML configuration.
     */
    html: {
        minify: true
    },

    assets: {
        source: 'assets'
    }, 

    /*
     * Notifier configuration.
     */
    notify: true,
    sound: 'Pop',

    /*
     * Gulp configuration.
     */
    defaultTask: [ 'lint:js', 'clean', 'build', 'revise', 'watch', 'serve', 'build:favicons', 'minify:html' ]

} );
