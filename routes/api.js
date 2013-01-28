/*
 * API.
 */

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
    res.send(
        {
            "email": "john.smith@acme.com",
            "firstName": "John",
            "lastName": "Smith",
            "display" : "John Smith",
            "gravatar": "?"
        });
};