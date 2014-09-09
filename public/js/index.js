/**
 * Created with JetBrains WebStorm.
 * User: dell
 * Date: 14-9-9
 * Time: 下午2:08
 * To change this template use File | Settings | File Templates.
 */

 $(document).ready(function(){
     var user = {
         user_name:"liushi",
         sex:0,
         password:"123456" ,
         self_introduction:"ls",
         avatar :"image/a.jpg"
     }
     $.ajax({
         url: "/saveUser",
         data: {user: user},
         type: "POST",
         timeout: 40000,
         success: function (serviceResponse) {
             console.log(serviceResponse);
         },
         error: function (data) {
             console.log("saveUser  error" + JSON.stringify(data));
         }
     });
 });