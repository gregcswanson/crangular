/*
 * API.
 */
var gravatar = require('gravatar')
    , repository = require('./repository');

exports.vents = function(req, res){
    repository.VentsFindAll(function(err, items){
        res.send(items);
    });
};

exports.ventAdd = function(req, res){
    repository.VentsAdd({'comment': req.body.comment, 'created': new Date()}, function(err, item){
        res.send(item);
    });
};

exports.organisations = function(req, res){
  res.send([
      {"name": "ACME", "slug":"acme" }, 
      {"name": "Fabrikam", "slug": "fabrikam" } 
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