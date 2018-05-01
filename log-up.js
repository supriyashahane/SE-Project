var x,y,z,w;

function validateForm(){
    var Username = document.getElementById("Username").value;
    var re_password = document.getElementById("password").value;
    myObj ={ '1':{ "id" : 1,"username":Username, "password": re_password },'2':{ "id" : 2,"username":"punam", "password": "punam"}, '3':{ "id" : 3,"username":"manisha", "password": "manisha"} };
    var a = myObj['1']
    
    daTa = JSON.stringify(myObj);
    localStorage.setItem("xxx", daTa);
    console.log(daTa)
    console.log(a)

    var phone_number = document.forms["profile-form"]["phone_number"].value
    if (phone_number =="") {
        alert(" Please Enter correct mobile number");
        return false;
    }
    var email = document.forms["profile-form"]["email"].value
    if (email=="") {
        alert("Please Enter valid e-mail id");
        return false;
    }
    var Username = document.forms["profile-form"]["Username"].value
    if (Username =="") {
        alert("Username can't be empty");
        return false;
    }
    var password = document.forms["profile-form"]["password"].value
    if (password =="") {
        alert("Password can't be empty");
        return false;
    }

    var re_password = document.forms["profile-form"]["re-password"].value
    if (re_password =="") {
        alert("Please Re-type password")
        return false;
    }
    if (password == re_password ){
        alert("Singed up Sucessfully with Username = " + Username +" and Password = "+ re_password )
       // alert(y)
       // alert("and Password as ")
        //alert(z)

        return true;
    }

    else {
        alert("Fill Password correctly")
        return false;
    }

    
}
