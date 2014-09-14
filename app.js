/**
 * Created with JetBrains WebStorm.
 * User: dell
 * Date: 14-9-9
 * Time: 下午2:01
 * To change this template use File | Settings | File Templates.
 */
var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');


var app = express();
var port = 8080;
app.use(favicon());
app.use(logger('dev')); // logger模块
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



var userService = require('./service/userService')

app.post('/saveUser',userService.saveUser);
app.post('/uploadFile',userService.uploadFile);
app.listen(port);
console.log("server is listen:"+port);