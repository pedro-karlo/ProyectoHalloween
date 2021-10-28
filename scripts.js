function getDataForm(){
    
    var Name = document.getElementById('Name').value;
    var Email = document.getElementById('email').value;
    var pnumber = document.getElementById('pnumber').value;
    var location_options = document.getElementById('location_options').value;
    var seats = document.getElementById('seats').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    
    alert("Name: " + Name + "\nEmail: " + Email + "\nPhone Number: " + pnumber + 
          "\nLocation: " + location_options + "\nNum. of Seats: " + seats + 
          "\nDate: " + date + "\nTime: " + time + "\nReservation complete!");       
}