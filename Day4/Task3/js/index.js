function show() {
  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;
  let permanentAddress = document.getElementById("permanentAddress").value;
  let officeAddress = document.getElementById("officeAddress").value;

  document.getElementById(
    "formData"
  ).innerHTML = `Email: ${email} <br> Name: ${name} <br>Permanent Address: ${permanentAddress} <br> Office Address : ${officeAddress}`;
}

function sameAddress() {
  if (document.getElementById("checkBox").checked == false) {
    document.getElementById("officeAddress").value = "";
    return;
  }
  let permanentAddress = document.getElementById("permanentAddress").value;
  document.getElementById("officeAddress").value = permanentAddress;
}
