const myDate = new Date('3/4/2024') ;
function func() {
    const currDate = new Date() ;
    const timediff =  myDate - currDate ;
    const daysdiff = Math.floor(timediff / (1000 * 60 * 60 * 24));
    const hoursdiff = Math.floor(timediff / (1000 * 60 * 60)) % 24;
    const minutesdiff = Math.floor((timediff / (1000 * 60)) % 60);
    const secondsdiff = Math.floor((timediff / 1000) % 60);
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
