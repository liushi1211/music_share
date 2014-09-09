/**
 * Created with JetBrains WebStorm.
 * User: dell
 * Date: 14-9-9
 * Time: 下午3:20
 * To change this template use File | Settings | File Templates.
 */
var sequelize = require('./sequelize');
var Sequelize = require('sequelize');
var Comment = sequelize.define('comment',{
    id:{
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true,
        unique : true
    },
    time:{
        type :  Sequelize.STRING,
        allowNull:false
    },
    content:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    user_id:{
        type :  Sequelize.INTEGER,
        allowNull:false
    },
    music_id:{
        type :  Sequelize.INTEGER,
        allowNull:false
    }
})
module.exports = Comment;
