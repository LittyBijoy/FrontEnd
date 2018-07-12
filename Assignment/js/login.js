    (function(){
        localStorage.setItem("token","");
        $('.button').click(function(){
            $.ajax({
                url: 'https://oe-final.herokuapp.com/auth',
                method: 'post',                
                data: {"access_token": "fiOA4CojZ0wP5QcLStQLw1PnjZAtGEuX"},
                headers: {                
                    "Authorization":"Basic "+btoa($('#login-email').val()+':'+$('#login-password').val())
                },            
                success: function(data){
                    console.log(data.token);
                    localStorage.setItem("token",data.token);
                    window.open("home.html","_self");
                },
                error: function( errorThrown ){
                    console.log( errorThrown );
                    $('.error').text("Login Failed");
                }
            });
        })
        
    })();