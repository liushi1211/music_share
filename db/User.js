/**
 * Created with JetBrains WebStorm.
 * User: dell
 * Date: 14-9-9
 * Time: 下午2:52
 * To change this template use File | Settings | File Templates.
 */
 var sequelize = require('./sequelize');
var Sequelize = require('sequelize');
var User = sequelize.define('user',{
     id:{
         type : Sequelize.INTEGER,
         autoIncrement : true,
         primaryKey : true,
         unique : true
     },
    user_name:{
        type :  Sequelize.STRING,
        allowNull:false
    },
    sex:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    password:{
        type :  Sequelize.STRING,
        allowNull:false
    },
    self_introduction:{
        type :  Sequelize.STRING
    },
    avatar:{
        type :  Sequelize.STRING
    }

},{
    freezeTableName:true,
    timestamps:false
})
module.exports = User;




