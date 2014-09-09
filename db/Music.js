/**
 * Created with JetBrains WebStorm.
 * User: dell
 * Date: 14-9-9
 * Time: 下午3:19
 * To change this template use File | Settings | File Templates.
 */
var sequelize = require('./sequelize');
var Sequelize = require('sequelize');
var Music = sequelize.define('music',{
    id:{
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true,
        unique : true
    },
    name:{
        type :  Sequelize.STRING,
        allowNull:false
    },
    duration:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    type:{
        type :  Sequelize.STRING,
        allowNull:false
    },
    path:{
        type :  Sequelize.STRING,
        allowNull:false
    },
    user_id:{
        type :  Sequelize.STRING,
        allowNull:false
    }
})
module.exports = Music;
