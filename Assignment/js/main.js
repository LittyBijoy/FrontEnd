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
                var price="";
                if(value.listPrice!=null){
                    price="$"+value.listPrice;
                }
                if(value.salePrice!=null){
                    price="<span style='text-decoration:line-through;color:#9ba7ac;'>"+price
                    +"</span><span style='color:#cb1218;font-size=1.25rem;'> $"+value.salePrice+"</span>";
                }
                $('.products .row').append(
                    '<div class="col-12 col-sm-6 col-md-6 col-lg-3">'+
                    '<div class="card" style="margin:5%;height:60%;border:0;"><img class="card-img-top" src="'+
                    value.primaryFullImageURL +'" alt="Card image" style="width:100%;height:100%;"><div class="card-body">'+
                    '<span style="font-weight:500;font-size:95%;">'+value.displayName+
                    '</span>'+
                    '<div><span style="float:left;font-size:80%;"><p style="font-weight:700;">'+price+
                    '</p><a href="product.html?id='+value.id+'" target="_self">More...<a></span>'+
                    '<span class="input-group-btn" style="float:right;">'+
                    '<button class="btn btn-primary" id="'+value.id+'" type="button" onclick="addtocart(this);" style="background-color:#0f65af;font-size:60%;">Buy</button></span> </div>'+
                    '</div></div></div>'
                )                
            })          
        },
        error: function( errorThrown ){
            console.log( errorThrown );
            window.open("index.html","_self");
        }
    });    
});
function addtocart(a){
    var cartitems=localStorage.getItem("cartitems") ? localStorage.getItem("cartitems")+"," : "";
    cartitems=cartitems+a.getAttribute('id');
    localStorage.setItem("cartitems",cartitems);
    var items=localStorage.getItem("cartitems");
    if(items!=null && items!=""){
        var p=items.split(',');
        $(".cartnumber").text("("+p.length+")");
    }
    else{
        $(".cartnumber").text("");
    }
    
}