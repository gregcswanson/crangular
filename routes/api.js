/*
 * API.
 */

exports.organizations = function(req, res){
  res.send([
      {"name": "ACME"}, 
      {"name": "Fabrikam"}
  ]);
};

exports.organization = function(req, res){
  res.send({"name": "ACME"});
};

exports.profile = function(req, res){
  res.send({"email": "john.smith@acme.com"});
};