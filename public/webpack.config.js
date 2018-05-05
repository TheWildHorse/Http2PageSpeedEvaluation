var Encore = require('@symfony/webpack-encore');

Encore
    // the project directory where all compiled assets will be stored
    .setOutputPath('./build')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    // will create public/build/app.js and public/build/app.css
    .addEntry('app', [
        './node_modules/jquery/dist/jquery.js',
        './node_modules/bootstrap/dist/js/bootstrap.bundle.js',
        './node_modules/chartjs/chart.js',
        './node_modules/moment/min/moment-with-locales.js',
        './node_modules/select2/dist/js/select2.js',
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './node_modules/animate.css/animate.css',
        './node_modules/font-awesome/css/font-awesome.css',
        './node_modules/select2/dist/css/select2.css',
    ])

    // allow legacy applications to use $/jQuery as a global variable
    .autoProvidejQuery()

    // enable source maps during development
    .enableSourceMaps(!Encore.isProduction())

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    // show OS notifications when builds finish/fail
    .enableBuildNotifications()

// create hashed filenames (e.g. app.abc123.css)
// .enableVersioning()

// allow sass/scss files to be processed
// .enableSassLoader()
;

// export the final configuration
module.exports = Encore.getWebpackConfig();