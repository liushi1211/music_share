/**
 * Created with JetBrains WebStorm.
 * User: dell
 * Date: 14-9-9
 * Time: 下午3:24
 * To change this template use File | Settings | File Templates.
 */
var User = require('../db/User');
var log = require('log');
exports.saveUser = function(req,res,next){
         var new_user = req.body.user;
    User.create(new_user).success(function(msg){

               res.end(JSON.stringify(msg));

    }).on('failure',function(err){
            console.log(err);
        });
}