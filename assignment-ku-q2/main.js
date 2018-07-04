$(document).ready(function(){
    var obj = [];
    $('.candidate').each(function(){
        this.children[2].onclick=function(){
            var name = (this.parentElement).children[0].innerHTML;
            var acttag = (this.parentElement).children[1];
            var act = acttag.options[acttag.selectedIndex].text;
            var register = new Register(name,act);
            saveObj(register);
        }       
    });       
    $(".mainstage > div").each(function(){   
        this.children[2].onclick=function(){    
            var stage = (this.parentElement).children[0].innerHTML;
            (this.parentElement).children[3].innerHTML="";
            var activitytag = (this.parentElement).children[1];
            var activity = activitytag.options[activitytag.selectedIndex].text; 
            for (let index = 0; index < obj.length; index++) {
                if(obj[index].performerAct==activity){                                        
                    var name = obj[index].performerName;
                    var act = obj[index].performerAct;                   
                    var bound = comeToStage.bind((this.parentElement).children[3]);
                    bound(stage,activity, perform.bind(null,name,act));
                }                
            }
        }       
    });    
    function Register(name,act){
        this.performerName = name;
        this.performerAct = act;
    }
    function saveObj(object){
        var flag=0;
        for (let index = 0; index < obj.length; index++) {
            if(obj[index].performerName === object.performerName && obj[index].performerAct===object.performerAct){
                flag=1;
                break;
            }            
        }
        if(flag==0)
            obj.push(object);
    }
    function perform(performerName,performerAct)
    {
        return " & " + performerName + " is ready to do " + performerAct;
    }

    function comeToStage(stageName,activityName,perform)
    {
        this.innerHTML = this.innerHTML + "<br>" +stageName + " is reserved for activity " + activityName + perform(); 
    }
});