(function(){
    $.ajax({
        url: 'https://api.github.com/users',
        // url:'./json/users.json',
        method: 'GET',
        success: function(users){
            $.each(users, function(key,value){
                $('.row').append(
                    '<div class="col-12 col-sm-6 col-md-3">'+
                    '<div class="card" style="margin:5%" onclick=display(this);><img class="card-img-top" src="'+
                    value.avatar_url +'" alt="Card image" style="width:100%"><div class="card-body">'+
                    '<h4 class="card-title" style="color:blue;text-align:center;">'+value.login+
                    '</h4></div></div></div>'
                )  
                                
            })
        },
        error: function(err){
            console.error(err);
        }
    });    
   
})();
function display(a) {
    var myWindow = window.open("./html/display.html?id="+a.children[1].children[0].innerHTML, "_self");
   
}