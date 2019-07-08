function getFocus() {
  document.getElementById("fname").focus();
}

function sendMail() {
  // Form field vars
  fName = document.getElementById("fname").value;
  lName = document.getElementById("lname").value;
  gName = document.getElementById("gname").value;
  loc = document.getElementById("location").value;
  mgr = document.getElementById("manager").value;
  mgr_email = document.getElementById("mgr_email").value;
  clear = document.getElementById("term_form");

  // Display message
  parent.location="mailto:" + mgr_email + "&subject=Termination assets for " + fName + " " + lName + "&body=Hello " + mgr + ",%0D%0A %0D%0AWe have received notice that " + fName + " " + lName + " – " + gName + " has been terminated. Please deliver all assets for " + fName + " " + lName + " to " + loc + ". Until the equipment has been received, these devices are currently assigned to you, as the manager, for accountability purposes.";
   
  clear.reset();
  getFocus();
}