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

exports.configurationLoginPost = function(req, res){
    if(nconf.get('password') == req.body.password)
    {
        req.session.configurationConfirmed = true;
    }
    res.redirect('/configuration');
};

exports.configurationPost = function(req, res){
    req.session.temp = req.body.temp;
    res.redirect('/configuration');
};