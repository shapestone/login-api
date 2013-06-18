var loginService = require('../services/login-service');
var log   = require('../../config/log-config');

module.exports = function(app){
    app.post('/login-api/api/authenticate',function(req, res){
        loginService.authenticate(req,res);
    });

//    app.post('/api/logout',function(req, res){
//        //restHandler.authenticate.post({},req.body);
//    });
//
//    app.put('/api/change-password',function(req, res){
//
//    });
//
//    app.post('/api/forgot-password',function(req, res){
//
//    });
};


