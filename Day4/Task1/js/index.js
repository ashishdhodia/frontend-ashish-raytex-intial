function show() {
    let email = document.getElementById("inputEmail4").value ;
    let pass = document.getElementById("inputPassword4").value ;
    let address = document.getElementById("inputAddress").value ;
    let city = document.getElementById("inputCity").value ;
    let zip = document.getElementById("inputZip").value ;

    document.getElementById("formData").innerHTML = `email: ${email} <br> pass: ${pass} <br> address: ${address} <br> city : ${city} <br> zip : ${zip}`;
}