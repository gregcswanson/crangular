
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , api = require('./routes/api')
  , http = require('http')
  , path = require('path')
  , fs    = require('fs')
  , nconf = require('nconf');
  
// First consider commandline arguments and environment variables, respectively.
nconf.argv().env();

// Then load configuration from a designated file.
nconf.file({ file: 'config.json' });

// Provide default values for settings not provided above.
nconf.defaults({
    'password' : 'password'
    , 'http': {
        'port': 3000
        , 'secret' : 'your secret here'
    }
});

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/api/vents', api.vents);
app.post('/api/vents', api.ventAdd);
app.get('/api/organisations', api.organisations);
app.get('/api/organisation/:id', api.organisation);
app.get('/api/profile', api.profile);
app.get('/configuration', routes.configuration);
app.post('/configuration/login', routes.configurationLogin);
app.post('/configuration', routes.configurationPost);
app.get('/configuration/logout', routes.congifurationLogout)

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
