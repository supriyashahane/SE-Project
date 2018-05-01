function getID(a)
{
    document.getElementById("showid").innerHTML = a;
    document.body.style.backgroundImage = a.id;
    console.log(a.id)
    localStorage.setItem("Image",a.id)
    
    return a.id;
}


//console.log(getID(a))


let activeThemeId = 1;
const themes = [
    {
        id: 1,
        name: "Theme1",
        meta: {
            background: "url(bg1.jpg)",
        }
    },
    {
        id: 2,
        name: "Theme2",
        meta: {
            background: "url(bg33.jpg)",
        }
    },
    {
            id: 3,
            name: "Theme3",
            meta: {
                background: "url(bg3.jpg)",
            }
    },
    {
        id: 4,
        name: "Theme4",
        meta: {
            background: "url(bg4.jpg)",
        }
    },
    {
        id: 5,
        name: "Theme5",
        meta: {
            background: "url(bg5.jpg)",
        }   
    }
];


function getTheme(id) {
    console.log(id)
    return themes.filter(theme => theme.id == id)[0];
}
function setTheme(themeId) {
    activeThemeId = themeId;
    // styling
    let theme = getTheme(activeThemeId);

    console.log("You have selected - ", theme.name,theme.meta);

    styleBody(theme.meta)
    // store locally
    console.log("theme is -",theme.meta)
    console.log(activeThemeId)
    localStorage.setItem("activeThemeId", activeThemeId);
    console.log(activeThemeId)
}
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "ddd", true);
    xhttp.send();
  }

function styleBody(style) {
    console.log("style.background",style.background)
    console.log(document.body)
    document.body.style.backgroundImage = style.background;
}

function login() {
    let themeId = localStorage.getItem("activeThemeId");
    console.log(themeId)
    if(!themeId) themeId = 1;
    setTheme(themeId);
}

login()


