var nconf = require('nconf');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.configuration = function(req, res){
    if(!req.session.configurationConfirmed || !req.session.configurationConfirmed){
        res.render('configurationLogin', { title: 'Configuration' });
    }else{
        var temp = req.session.temp;
        if (!temp) temp = "";
        res.render('configuration', { title: 'Configuration', secret: nconf.get('http:secret'), temp: temp });  
    }
};

exports.configurationLogin = function(req, res){
    if(nconf.get('password') == req.body.password)
    {
        req.session.configurationConfirmed = true;
    }
    res.redirect('/configuration');
};

exports.congifurationLogout = function(req, res){
    req.session.configurationConfirmed = false;
    res.redirect('/');
};

exports.configurationPost = function(req, res){
    req.session.temp = req.body.temp;
    nconf.set('http:secret', req.body.secret);
    nconf.save(function(){
        res.redirect('/configuration');
    });
};