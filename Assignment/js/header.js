$(function(){
    var items=localStorage.getItem("cartitems");
    if(items!=null && items!=""){
        var p=items.split(',');
        $(".cartnumber").text("("+p.length+")");
    }
    else{
        $(".cartnumber").text("");
    }    
});

var searchRequest = null;

$(function () {
    var minlength = 3;
    $('#suggesstion-box').html("");
    $("#search-box").focusout(function () {
        setTimeout(
            function(){$('#suggesstion-box').attr("style","display:none; ")},3000);
    });
    $("#search-box").keydown(function () {
        $('#suggesstion-box').html("");
    });
    $("#search-box").keyup(function () {
        var that = this,
        srhstr = $(this).val();
        $('#suggesstion-box').html("");
        if (srhstr.length >= minlength ) {
            if (searchRequest != null) 
                searchRequest.abort();
            $.ajax({
                url: 'https://oe-final.herokuapp.com/products',
                method: 'get', 
                headers: {            
                    "Authorization":"Bearer "+localStorage.getItem("token")
                },            
                success: function(products){
                    $.each(products.items, function(key,value){
                        var str=value.displayName;
                        var pos =case_insensitive_search(str,srhstr);
                        if(pos==1){
                            $('#suggesstion-box').attr("style","display:block;position: absolute;z-index: 1;");
                            $('#suggesstion-box').append(
                                '<div class="srhproduct" ><a href="product.html?id='+value.id+'"><img src="'+value.primaryFullImageURL+'" style="width:20%;"><span style="width:80%;color: #0f65af;">'+value.displayName+'</span></a></div>'
                            )
                        }                                       
                    })          
                },
                error: function( errorThrown ){
                    console.log( errorThrown );
                    window.open("index.html","_self");
                }
            });    
        }
    });
});
function case_insensitive_search(str, search_str)
  {
    var result= str.search(new RegExp(search_str, "i"));
  console.log(str);
  console.log(result);
    if (result>=0)
    return 1;
    else
    return 0;  
   }