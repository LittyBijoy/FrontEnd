function perform(performerName,performerAct)
{
    return " & " + performerName + " is ready to do " + performerAct;
}

function comeToStage(stageName,activityName,perform)
{
    this.innerHTML = this.innerHTML + "<br>" +stageName + " is reserved for activity " + activityName + perform(); 
}

$(document).ready(function(){

    localStorage.setItem
});