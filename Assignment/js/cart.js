$(function(){
    $(".header").load("header.html"); 
    $(".footer").load("footer.html");    

    var items=localStorage.getItem("cartitems");
    if(items!=null && items!=""){
        var p=items.split(',');
        $(".cartnumber").text("("+p.length+")");   
        var temp=[];
        for (let index = 0; index < p.length; index++) {          

            $.ajax({
                url: 'https://oe-final.herokuapp.com/products/'+p[index],
                method: 'get', 
                headers: {            
                    "Authorization":"Bearer "+localStorage.getItem("token")
                },            
                success: function(product){
                    console.log(product);
                    var price="";
                    if(product.listPrice!=null){
                        price="$"+product.listPrice;
                    }
                    if(product.salePrice!=null){
                        price="$"+product.salePrice;
                    }
                    var desc="";
                    if(product.description!=null){
                        desc=product.description;
                    }
                    else{
                        desc=product.longDescription;
                    }
                    $('.product-row').append(
                        '<div class="product"><div class="product-image"><img src="'+product.primaryFullImageURL+'">'+
                        '</div><div class="product-details"><div class="product-title">'+product.displayName+
                        '</div><p class="product-description">'+desc+
                        '</p></div><div class="product-price">'+price+
                        '</div><div class="product-quantity"><input type="number" value="1" min="1"></div>'+
                        '<div class="product-removal"><button class="remove-product" id="'+product.id+'">Remove</button></div>'+
                        '<div class="product-line-price">'+price+'</div></div>'
                    )                     
                },
                error: function( errorThrown ){
                    console.log( errorThrown );
                    window.open("index.html","_self");
                }
            });
        }
    }
    else{
        $(".cartnumber").text("");
        $('.column-labels').html("")
        $('.shopping-cart').html("<h4>Your cart is empty</h4>");
    }
});
function clearcart(){
    localStorage.setItem("cartitems","");
    $(".cartnumber").text("");
    $('.product-row').html("");
    $('.column-labels').html("")
    $('.shopping-cart').html("<h4>Your cart is empty</h4>");
}