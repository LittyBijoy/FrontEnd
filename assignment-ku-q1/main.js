

    for (let i = 0; i <= document.getElementsByClassName('outer1').length - 1; i++) {
        let innerchildren = document.getElementsByClassName('outer1')[i].children;
        for (let index = 0; index <= innerchildren.length-1; index++) {
          let row1btn=innerchildren[index].getElementsByTagName("button");
              
            for (let j = 0; j < row1btn.length; j++) {
                let currentelement=row1btn[j]; 
                currentelement.onclick= (function() {                   
                    let count = 0;                
                    return function() { 
                        count++;
                        this.innerHTML="Click me "+count;
                    };
                })();                
            }
        }
        
    }
function outer2divfun(){
    let outer2div  = document.getElementsByClassName('outer2');
    let count = 0;
    for (let i = 0; i <= outer2div.length - 1; i++) {
        let innerchildren = outer2div[i].children;
        for (let index = 0; index <= innerchildren.length-1; index++) {
            let row1btn=innerchildren[index].getElementsByTagName("button");
            for (let j = 0; j < row1btn.length; j++) {
                let currentelement=row1btn[j];                 
                currentelement.onclick= (function() {                                                            
                    return function() { 
                        count++;
                        this.innerHTML="Click me "+count;
                    };
                })();               
            }            
        }        
    }
}
outer2divfun();
function outer3divfun(){
    var outer3div  = document.getElementsByClassName('outer3');
    var count = 0; 
    for (let i = 0; i <= outer3div.length - 1; i++) {
        var innerchildren = outer3div[i].children;
        for (let index = 0; index <= innerchildren.length-1; index++) {
          var row1btn=innerchildren[index].getElementsByTagName("button");
          
            for (let j = 0; j < row1btn.length; j++) {
                var currentelement=row1btn[j]; 
                currentelement.onclick= (function() {                                        
                    return function() { 
                         count++;
                        for (let y = 0; y <= innerchildren.length-1; y++) {
                            var row1btn=innerchildren[y].getElementsByTagName("button");                     
                            for (var x = 0; x < row1btn.length; x++) {
                                row1btn[x].innerHTML="Click me "+count;
                            }
                        }
                    };
                })();               
            }
        }
        
    }
}
outer3divfun();
   

