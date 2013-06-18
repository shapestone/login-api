var db = require("../../config/db_user_store"),
log   = require('../../config/log-config');

exports.authenticate = function(req, res){
    var userName = req.body.userName;
    var password = req.body.password;

    log.debug("Finding user in users collection for given userName"+ userName);

    db.users.find({userName: userName,password: password }, function(err, user) {
        if( err || !user || user.length<=0){
           db.users.find({userName: userName}, function(err, user1) {
                if( !user1 || user.length>0){
                    updateLoginFailures(user1);
                }
             });
            res.send({});

        }else{
            res.send(user);
        }
    });
};


function updateLoginFailures(user){

    // failied attemptes/locking user
}
