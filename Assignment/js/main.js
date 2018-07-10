$(function(){
    $(".header").load("header.html"); 
    $(".footer").load("footer.html");    

    $.ajax({
        url: 'https://oe-final.herokuapp.com/products',
        method: 'get', 
        headers: {            
            "Authorization":"Bearer "+localStorage.getItem("token")
        },            
        success: function(products){
            $.each(products.items, function(key,value){
                console.log(value.displayName);
                $('.products .row').append(
                    '<div class="col-12 col-sm-6 col-md-3">'+
                    '<div class="card" style="margin:5%;height:60%;border:0;" onclick=display(this);><img class="card-img-top" src="'+
                    value.primaryFullImageURL +'" alt="Card image" style="width:100%;height:100%;"><div class="card-body">'+
                    // '<div class="card" style="margin:5%;height:90%;border:0;" onclick=display(this);><img class="card-img-top" src="./img/product1.jpg'+
                    // '" alt="Card image" style="width:100%;height:100%;"><div class="card-body">'+
                    '<span>'+value.displayName+
                    '</span>'+
                    '<div><a href="#">More...<a>'+
                    '<span class="input-group-btn" style="float:right;"><button class="btn btn-primary" type="submit">Buy</button></span> </div>'+
                    '</div></div></div>'
                )                
            })          
        },
        error: function( errorThrown ){
            console.log( errorThrown );
        }
    });

});
