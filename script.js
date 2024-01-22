let newmyDate ; 
function logDateValue() {
    // Get the value of the date input
    const selectedDate = document.getElementById('myDate').value;
    newmyDate = new Date(selectedDate) ;
    console.log("My bday in function: " + newmyDate) ; 
    func() ; 
}
function func() {
    let currDate = new Date() ;
    let timediff =  newmyDate - currDate ;
    
    const daysdiff = Math.floor(timediff / (1000 * 60 * 60 * 24));
    const hoursdiff = Math.floor(timediff / (1000 * 60 * 60)) % 24;
    const minutesdiff = Math.floor((timediff / (1000 * 60)) % 60);
    const secondsdiff = Math.floor((timediff / 1000) % 60);

    document.getElementById('days').innerText = daysdiff;
    document.getElementById('hours').innerText = hoursdiff;
    document.getElementById('minutes').innerText = minutesdiff;
    document.getElementById('seconds').innerText = secondsdiff;
    requestAnimationFrame(func) ; 
}
