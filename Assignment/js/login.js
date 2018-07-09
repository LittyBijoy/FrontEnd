    (function(){
        $('.button').click(function(){
            $.ajax({
                url: 'https://ccstore-z1ma.oracleoutsourcing.com/ccstore/v1/login',
                dataType: 'json',
                type: 'post',
                contentType: 'application/x-www-form-urlencoded',
                data: JSON.stringify({"grant_type": 'password',"username": $('#login-email').val(), "password": $('#login-password').val()}),
                header: {
                    "Content-Type":"application/x-www-form-urlencoded",
                    "Authorization":"Basic YWRtaW46YWRtaW4="
                },            
                success: function( data, textStatus, jQxhr ){
                    console.log( data );
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
                }
            });
        })
        
    })();