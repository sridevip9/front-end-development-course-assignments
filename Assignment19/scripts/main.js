$(document).ready(function () {

    //List Titles
    var appendUrl = 'http://jsonplaceholder.typicode.com/posts?userId=1';
    
    $.get(appendUrl,function(result){
        console.log(result);
        var appendnew = $('#append');
        for(var i = 0; i < result.length; i++){
          appendnew.append('<li>' + 'Index:'+ i + 'Title:'+ result[i].title +'</li>'); 
        }
    });
    //
    var prependUrl = 'http://jsonplaceholder.typicode.com/photos?albumId=1';
     
    $.get(prependUrl,function(data){
        var prependnew = $('#prepend');
        for(var i = 0; i < data.length; i++){
          prependnew.prepend('<li>' + 'Index:'+ i + 'Title:'+ data[i].title +'</li>'); 
        }
        });
     
     
     
     
     });