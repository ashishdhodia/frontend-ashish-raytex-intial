function show() {
    let fname = document.getElementById("fname").value ;
    let lname = document.getElementById("lname").value ;
    let email = document.getElementById("email").value ;
    let mnumber = document.getElementById("mnumber").value ;

    document.getElementById("formData").innerHTML = `First Name: ${fname} <br> Last Name: ${lname} <br> email: ${email} <br> Mobile : ${mnumber}`;
}