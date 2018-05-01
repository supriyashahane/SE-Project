function check_info() {
    //Retrieving data:
    text = localStorage.getItem("xxx");
    obj = JSON.parse(text);
    console.log(obj)
    //console.log(obj['2'])

    var user1 = obj['1']
    var user2 = obj['2']
    var user3 = obj['3']
    
    var info1 = user1.username;
    var info2 = user2.username;
    var info3 = user3.username;

    var info4 = user1.password;
    var info5 = user2.password;
    var info6 = user3.password;

    console.log(info4)
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var myObj = { username:username, password: password };


    mydaTa = JSON.stringify(myObj);
    localStorage.setItem("yyy", mydaTa);

    if(username == "" && password == "") {
       
        alert("Username or Password cant be Empty");
        return false;
    }
    if (info1 === myObj.username && info4 === myObj.password) {
        alert("Loged in Sucessfully Username =" + myObj.username +" password = "+info4)
        document.body.style.backgroundImage = "url(bg1.jpg)";
        return true;
    }
    if (info2 === myObj.username && info5 === myObj.password) {
        alert("Loged in Sucessfully Username ="+ info2 + " password = "+ info5)
        document.body.style.backgroundImage = "url(bg2.jpg)";
        return true;
    }
    if ( info3 === myObj.username && info3 === myObj.password) {
        alert("Loged in Sucessfully Username ="+ info3 + " password = "+info6)
        document.body.style.backgroundImage = "url(bg33.jpg)";
        return true;
    }
    
    else {
        alert("Wrong Username or Passward");
        //window.open("hello.html ")
        return false;
    }
}