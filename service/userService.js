/**
 * Created with JetBrains WebStorm.
 * User: dell
 * Date: 14-9-9
 * Time: 下午3:24
 * To change this template use File | Settings | File Templates.
 */
var User = require('../db/User');
var log = require('log');
var Constants = require('../util/contant');
var constants = new Constants();

/*
    插入新用户
 */
exports.saveUser = function(req,res,next){
         var new_user = req.body.user;
    User.create(new_user).success(function(err,msg){

        if(err){
            res.end({
                state:constants.FAIL,
                msg:"create user error"
            });
        }else{
            res.end({
                state:constants.SUCCESS,
                data:JSON.stringify(msg),
                msg:"create user success"
            });
        }

    }).on('failure',function(err){
            res.end({
                state:constants.FAIL,
                msg:"create user error"
            });
        });
}

/*

*/