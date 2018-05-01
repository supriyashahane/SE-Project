
function getID(a)
{
    document.getElementById("showid").innerHTML = a;
    document.body.style.backgroundImage = a.id;
    console.log(a.id)
    localStorage.setItem("Image",a.id)
    
    //return a.id;
}

function getsize(b)
{
    document.getElementById("sizeid").innerHTML = b;
    document.body.style.fontSize = b.id;
    console.log(b.id)
    localStorage.setItem("size",b.id)
    
    //return a.id;
}

function login(){
    text = localStorage.getItem("xxx");
    obj = JSON.parse(text);
    console.log("sigup-data")
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

    var myObj = localStorage.getItem("yyy")
    var data = JSON.parse(myObj);
    console.log("login-data")
    console.log(data.username)
    console.log(Img)
    let Img = "url(bg1.jpg)"
    let size = '12'
    
    var myOBJ = {name:myObj.username,password:myObj.passwrod,Image:Img,Fsize:size}

    if (info1 == data.username){
        document.body.style.backgroundImage = myOBJ.Image;
     }
    if (info2 == data.username){
        document.body.style.backgroundImage = myOBJ.Image;
    }

    if (info3 == data.username){
        document.body.style.backgroundImage = myOBJ.Image;
    }

    
    
    console.log(Img)
     Img = localStorage.getItem("Image")
     size = localStorage.getItem("size")
    document.body.style.backgroundImage = Img;
    document.body.style.fontSize = size;
    console.log(Img)
    
}

login()