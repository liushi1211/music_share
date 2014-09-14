/**
 * Created with JetBrains WebStorm.
 * User: dell
 * Date: 14-9-9
 * Time: 下午2:08
 * To change this template use File | Settings | File Templates.
 */

 $(document).ready(function(){

 });

function sign_in(){
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
}

function fileSelected(){
    var file = document.getElementById('fileToUpload').files[0];
    if (file) {
        var fileSize = 0;
        if (file.size > 1024 * 1024)
            fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
        else
            fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';

        document.getElementById('fileName').innerHTML = 'Name: ' + file.name;
        document.getElementById('fileSize').innerHTML = 'Size: ' + fileSize;
        document.getElementById('fileType').innerHTML = 'Type: ' + file.type;
    }

}
 var name ;
function uploadFile(){

    var file =  document.getElementById('fileToUpload').files;
     name = file[0].name;
    for(var i=0;i<file.length;i++){
        var fd = new FormData();
        fd.append('fileForm', file[i]);
        var xhr = new XMLHttpRequest();
        xhr.open("post",'/uploadFile',true);
        xhr.upload.addEventListener("progress", uploadProgress, false);
        xhr.addEventListener("load", uploadComplete, false);
        xhr.addEventListener("error", uploadFailed, false);
        xhr.addEventListener("abort", uploadCanceled, false);
        xhr.send(fd);
    }

    console.log(xhr.responseText);

}

function uploadProgress(evt) {
    if (evt.lengthComputable) {
        var percentComplete = Math.round(evt.loaded * 100 / evt.total);
        document.getElementById('progressNumber').innerHTML = percentComplete.toString() + '%';
    }
    else {
        document.getElementById('progressNumber').innerHTML = 'unable to compute';
    }
}

function uploadComplete(evt) {
    /* This event is raised when the server send back a response */
    alert("上传成功！");
    var show = document.getElementById('show');
    var ContentList = "<video id='my_video' loop='true' onclick='star()'>" +
        "<source src='../upload/"+name+"'>"
        "+</video>";
    show.innerHTML =  ContentList;

}

function uploadFailed(evt) {
    alert("上传文件错误！请重试");
}

function uploadCanceled(evt) {
    alert("The upload has been canceled by the user or the browser dropped the connection.");
}

function star(){

    var video = document.getElementById('my_video');
    if(video.paused) {
        video.play();
    }else{
        video.pause();
    }
}