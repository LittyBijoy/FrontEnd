$(function(){
    $(".header").load("header.html"); 
    $(".footer").load("footer.html");    

    function getParameter(theParameter) { 
        var params = window.location.search.substr(1).split('&');
       
        for (var i = 0; i < params.length; i++) {
          var p=params[i].split('=');
          if (p[0] == theParameter) {
            return decodeURIComponent(p[1]);
          }
        }
        return false;
    }
    var productid=getParameter("id");
    $.ajax({
        url: 'https://oe-final.herokuapp.com/products/'+productid,
        method: 'get', 
        headers: {            
            "Authorization":"Bearer "+localStorage.getItem("token")
        },            
        success: function(product){
            console.log(product);
            $('.active').text(product.displayName);
            $('#pdpimg').attr("src",product.primaryFullImageURL);
            $('#pdpimg').attr("alt",product.displayName);
            $('.add-to-cart').attr("id",product.id);
            $('#pdpheading').text(product.displayName);
            var desc="";
            if(product.description!=null){
                desc=product.description;
            }
            else{
                desc=product.longDescription;
            }
            $('#pdpdesc').html(desc);  
            var price="";
            if(product.listPrice!=null){
                price="$"+product.listPrice;
            }
            if(product.salePrice!=null){
                price="<span style='text-decoration:line-through;color:#9ba7ac;'>"+price
                +"</span><span style='color:#cb1218;font-size=1.25rem;'> $"+product.salePrice+"</span>";
            }
            $("#pdpprice").html(price);                     
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