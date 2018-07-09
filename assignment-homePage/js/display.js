(function(){
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
    var login=getParameter("id");
   // alert(login);
    $.ajax({
        url: 'https://api.github.com/users/'+login,
        // url:'../json/user.json',
        method: 'GET',
        success: function(user){
        //    $.each(user, function(key,user){
            $('img').attr("src",user.avatar_url)
            if(user.name === null){
                $('#name').text("Name : "+user.name);
            }
            $('#name').text((user.name===null) ? "Name : " : "Name : "+user.name);
            $('#company').text((user.company === null) ? "Company : " :"Company : "+user.company);
            $('#location').text((user.location===null) ? "Location : " : "Location : "+user.location);
            $('#email').text((user.email===null) ? "Email : " : "Email : "+user.email);
            $('#followers').text((user.followers===null) ? "Folloers :" : "Followers : "+user.followers);
            $('#following').text((user.following===null) ? "Following :" : "Following : "+user.following);
        //    })
        },
        error: function(err){
            console.error(err);
        }
    });    
   
})();