function getFormFocus() {
  document.getElementById("fname").focus();
}

function addAsset() { 
  var add_assets_container = document.createElement("DIV");
  add_assets_container.setAttribute("id", "assets_container");
   
  var add_asset = document.createElement("INPUT");
  add_asset.setAttribute("type", "text");
  add_asset.setAttribute("placeholder", "asset tag");
  add_asset.setAttribute("class", "assets")
  add_asset.setAttribute("id", "add_asset");
  
  var add_desc = document.createElement("INPUT");
  add_desc.setAttribute("type", "text");
  add_desc.setAttribute("placeholder", "asset description");
  add_desc.setAttribute("class", "description")
  add_desc.setAttribute("id", "add_desc");
  
  document.getElementById("assets").appendChild(add_assets_container);
  document.getElementById("assets_container").appendChild(add_asset);
  document.getElementById("assets_container").appendChild(add_desc);
  add_asset.focus();
}

function removeAsset(){
  var parent = document.getElementById("assets_container");
  var child1 = document.getElementById("add_asset");
  var child2 = document.getElementById("add_desc");
  parent.removeChild(child1).lastChild;
  parent.removeChild(child2).lastChild;
} 

function resetAssets() {
  var reset_assets = document.getElementById("assets_container");
  
  // Element validation
  if (typeof(reset_assets) != 'undefined' && reset_assets != null) {
    reset_assets.parentNode.removeChild(reset_assets);
  } else {
	  // Element doesn't exist. Do nothing.
  }
}	

function sendEmail() {
  // Form field vars
  var fName = document.getElementById("fname").value;
  var lName = document.getElementById("lname").value;
  var loc = document.getElementById("location").value;
  var mgr = document.getElementById("manager").value;
  var mgr_email = document.getElementById("mgr_email").value;
  var clear = document.getElementById("term_form");
  var email_msg = "mailto:";
  
  // Display default message
  email_msg += mgr_email + "?subject=Termination notice for " + fName + " " + lName + "&body=Hello " + mgr + ",%0D%0A %0D%0AWe have received notice that " + fName + " " + lName + " has been terminated. Please deliver all assets for " + fName + " " + lName + " to " + loc + ". Until the equipment has been received, these devices are currently assigned to you, as the manager, for accountability purposes.";
  
  // Display assigned devices
  email_msg += "%0D%0AAssigned devices%0D%0A %0D%0A";
  
  var assets = document.querySelectorAll(".assets");
  var description = document.querySelectorAll(".description");
  for (var i = 0; i < assets.length; i++) {
    email_msg += assets[i].value + "          " + description[i].value + "%0D%0A";	  
  }   
  parent.location = email_msg;
   
  clear.reset();
  resetAssets();
  getFocus();
}