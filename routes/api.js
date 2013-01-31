/*
 * API.
 */
var gravatar = require('gravatar');

exports.organisations = function(req, res){
  res.send([
      {"name": "ACME"}, 
      {"name": "Fabrikam"}
  ]);
};

exports.organisation = function(req, res){
  res.send({"name": "ACME"});
};

exports.profile = function(req, res){
    var urlSmall = gravatar.url('gregcswanson@live.com', {s: '45', r: 'pg', d: 'retro'});
    var urlLarge = gravatar.url('gregcswanson@live.com', {s: '100', r: 'pg', d: 'retro'});
    res.send(
        {
            "email": "john.smith@acme.com",
            "firstname": "John",
            "lastname": "Smith",
            "display" : "John Smith",
            "gravatar": urlSmall,
            "gravatarlarge": urlLarge
        });
};