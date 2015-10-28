var commonPhotos = {};

commonPhotos.key = "aHzY0l0zXlgjF7PMDP7ark6KwW4oVRWy";

$(document).ready(function() {

    $("#signup_form").bind("submit", function() {
    
        var params = {
           username: $("#new_username").val(),
           password: $("#new_password").val(),
           password_confirmation: $("#new_password").val()
        };
        
        $.ajax({
            url: "https://api.cloud.appcelerator.com/v1/users/create.json?key=" + commonPhotos.key,
            type: "POST",
            data: params,
            statusCode: {
                400: function(data) {
                    var responseJSON = JSON.parse(data.responseText);
                    if (responseJSON.meta) {
                        alert(responseJSON.meta.message);
                    }
                }
            }
        
        });
    
    });
    
});

