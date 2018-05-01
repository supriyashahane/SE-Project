function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function VisitCounter(){

    var visits = getCookie("counter");
    if (!visits) { visits = 1;
    
    document.write("These page is visited first time.");
    
    }
    
    else {
    
    visits = parseInt(visits) + 1;
    
    document.write("These website has been visited " + visits + " times.");}
    
    setCookie("counter", visits,365);
    localStorage.setItem("visits",visits);
    var visits = localStorage.getItem("visits")
    console.log(visits)
}


function getID(a)
{
    document.getElementById("showid").innerHTML = a;
    document.body.style.backgroundImage = a.id;
    console.log(a.id)
    sessionStorage.setItem("Image",a.id)
    //localStorage.setItem("Img",a.id)
}

function getsize(b)
{
    document.getElementById("sizeid").innerHTML = b;
    document.body.style.fontSize = b.id;
    console.log(b.id)
    sessionStorage.setItem("size",b.id)   
}

function logOut(){
    signIn = localStorage.getItem("yyy");
    myobj = JSON.parse(signIn);
    console.log("sign in data",myobj)
    var signUp = localStorage.getItem("xxx")
    obj = JSON.parse(signUp);
    console.log(obj)
    //console.log(obj['2'])

    var user1 = obj['1']
    var user2 = obj['2']
    console.log(user2.username)
    var user3 = obj['3']

    if (user1.username === myobj.username){
        var Img = sessionStorage.getItem("Image");
        var siez = sessionStorage.getItem("size");
        myobj.sized = siez
        myobj.img = Img
        console.log(myobj)
        daTA = JSON.stringify(myobj);
        localStorage.setItem("zzz", daTA);
        console.log(Img)
        console.log(myobj.username)
    }
    if (user2.username === myobj.username){
        var Img = sessionStorage.getItem("Image");
        var siez = sessionStorage.getItem("size");
        myobj.sized = siez
        myobj.img = Img
        console.log(myobj)
        daTA2 = JSON.stringify(myobj);
        localStorage.setItem("aaa", daTA2);
        console.log(Img)
        console.log(myobj.username)
    }


    if (user3.username === myobj.username){
        var Img = sessionStorage.getItem("Image");
        var siez = sessionStorage.getItem("size");
        myobj.sized = siez
        myobj.img = Img
        console.log(myobj)
        daTA3 = JSON.stringify(myobj);
        localStorage.setItem("bbb", daTA3);
        console.log(Img)
        console.log(myobj.username)
    }
}


function login(){
    
    var newObj = localStorage.getItem("zzz")
    nobj = JSON.parse(newObj)
    console.log("logout data "+ nobj.username)

    var newObj2 = localStorage.getItem("aaa")
    nobj2 = JSON.parse(newObj2)
    console.log("logout data "+ nobj2.username)

    var newObj3 = localStorage.getItem("bbb")
    nobj3 = JSON.parse(newObj3)
    console.log("logout data "+ nobj3.username)
    
    

    var signUp = localStorage.getItem("xxx")
    obj = JSON.parse(signUp);
    console.log(obj)
    //console.log(obj['2'])

    var user1 = obj['1']
    var user2 = obj['2']
    var user3 = obj['3']
    console.log(user1)

    var signIn = localStorage.getItem("yyy")
    myobj = JSON.parse(signIn);
    console.log("sign-in data"+ myobj.username)
    console.log (nobj.username)
    


    //var size = sessionStorage.getItem("size")
    //document.body.style.fontSize = size;
    //var Img = sessionStorage.getItem("Image")
    //document.body.style.backgroundImage = Image;
    
    if (nobj.username === myobj.username){
        document.body.style.backgroundImage = nobj.img
        document.body.style.fontSize = nobj.sized
          
    }

    if (nobj2.username === myobj.username){
        document.body.style.backgroundImage = nobj2.img
        document.body.style.fontSize = nobj2.sized
        
    }

    if (nobj3.username === myobj.username){
        document.body.style.backgroundImage = nobj3.img
        document.body.style.fontSize = nobj3.sized
         
       }


    //if (nobj.username == user2.username){
    //    document.body.style.backgroundImage = nobj.img
    //    document.body.style.fontSize = nobj.sized
    //    document.write("from local storage")   
   //}
    //if (nobj.username == user3.username){
    //    document.body.style.backgroundImage = nobj.img
    //    document.body.style.fontSize = nobj.sized
    //    document.write("from local storage")   
   //}
    
    
    console.log(Image)
    
      
}





VisitCounter()
login()
