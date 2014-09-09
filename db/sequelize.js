/**
 * Created with JetBrains WebStorm.
 * User: dell
 * Date: 14-9-9
 * Time: 下午3:18
 * To change this template use File | Settings | File Templates.
 */
var Sequelize = require('sequelize');
var config = require('./config').mysql;
var sequelize = new Sequelize(config.database,config.username,config.password,config.info);
module.exports = sequelize;