var Hapi = require('hapi');
var Grads = require('grads');

var hapi = new Hapi.Server();

hapi.connection({
    host: '0.0.0.0',
    port: process.env.PORT || 5000
});

hapi.route({
    method: 'GET',
    path: '/forecast',
    handler: function ( req, res ) {
        var lat = req.query.lat;
        var lon = req.query.lon;
        var alt = req.query.alt;
        var vars = req.query.vars;
        var model = req.query.model || 'gfs';
        var time = req.query.time || Date.now();

        var instance = new Grads( lat, lon, alt, time, model );

        if ( vars.indexOf(':') !== -1 ) {
            instance.bulkFetch( vars.split(':'), false, function( values, config ) {
                res( values );
            });
        } else {
            instance.fetch( vars, false, function( values, config ) {
                res( values );
            });
        }
    }
});

// Start the server
hapi.start(function( error ) {
    if ( !error ) {
        console.log('Server running at:', hapi.info.uri);
    }
});
