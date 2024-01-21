const currDate = new Date() ; 
// console.log(currDate) 
const myDate = new Date('3/4/2024') ;
const timediff =  myDate - currDate ;
// console.log("Time difference is " + timediff) 

function func() {
    const currDate = new Date() ;
    const timediff =  myDate - currDate ;
    const daysdiff = Math.ceil(timediff / (1000*60*60*24)) ; 
    const hoursdiff = Math.ceil((timediff / (1000*60*60))%24) ; 
    const minutesdiff = Math.ceil((timediff / (1000*60))%60) ; 
    const secondsdiff = Math.ceil((timediff / (1000))%60) ; 
    // console.log("Days: " + daysdiff) ; 
    // console.log("Hours: " + hoursdiff) ; 
    // console.log("Minutes: " + minutesdiff) ; 
    // console.log("Seconds: " + secondsdiff) ; 

    document.getElementById('days').innerText = daysdiff;
    document.getElementById('hours').innerText = hoursdiff;
    document.getElementById('minutes').innerText = minutesdiff;
    document.getElementById('seconds').innerText = secondsdiff;
    requestAnimationFrame(func) ; 
}

func() ; 