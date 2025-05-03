function validateForm() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
  
    if (!email.includes("@")) alert("Invalid email!");
    else if (pass.length < 6) alert("Password too short!");
    else if (pass !== confirm) alert("Passwords don't match!");
    else alert("Form is valid!");
  }
  