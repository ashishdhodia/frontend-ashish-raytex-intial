function auth() {
  let id = document.getElementById("id").value;
  let pass = document.getElementById("pass").value;
  
  if(id == "ashishdhodia" && pass == "qwerty") {
    document.getElementById("ans").innerHTML = "Authentication Successful";
  } else {
    document.getElementById("ans").innerHTML = "Authentication Failed";
  }
}
