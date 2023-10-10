function generateLockerUI(){
  var input = document.getElementById("passkeyField");
  // Execute a function when the user presses a key on the keyboard
  input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("submit_access_code").click();
    }
  });
}

function UISubmit(){
  checkServerKeys(passkey = "")
}

function checkServerKeys(passkey = ""){
  //perform url request to this at https://gnome.bv007.repl.co/passw-auth

  //recieve valid passwords & cross check with user's input
}