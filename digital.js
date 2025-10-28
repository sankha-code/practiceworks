 
function clock(){
       let dateobj=new Date();
        let hours=dateobj.getHours();
        let minutes=dateobj.getMinutes();
        let seconds=dateobj.getSeconds();
        let hour=(hours<10)?"0"+hours:hours;
        let min=(minutes<10)?"0"+minutes:minutes;
        let sec=(seconds<10)?"0"+seconds:seconds;
      
            let timestame=`${hour}:${min}:${sec}`;
            //console.log(timestame);
            document.body.innerText=timestame;
        }
        clock();
        setInterval(clock, 1000);
        
