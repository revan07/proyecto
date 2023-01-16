var array = [2, 4, 6, 8];
var suma = array.map(array => array + 2)
console.log(suma)

/*var a = [0,1,2]

setTimeout(()=>{
    for (var i = 0; i < a.length; i++){
        console.log(a[i])
    }
}, 10000)*/


/*var expires = "Fri, 31 Dec 9999 23:59:59 GMT";

var path = "/";
//Get cookies
function getCookie(nameCookie) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + nameCookie + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

//Check cookies
  function checkCookie(nameCookie) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + nameCookie + "=");
    if (parts.length == 2) return true;
    else return false;
  }

//Check cookie + value
  function checkAndSetCookie(name, value) {
    if (!checkCookie(name)) {
      document.cookie = `${name}=${value}; expires=${expires}; path=${path}`;
    }
  }

//Cookies/Vars
var language = navigator.language;
var theme = "dark";

//Default Cookies
checkAndSetCookie("tpeoficial_policy", false);
checkAndSetCookie("tpeoficial_language", navigator.language);
checkAndSetCookie("tpeoficial_theme", "dark");

//Cookies/Policy
const cookieButtonforCookie = document.querySelector(".cookie-btn");
var tpeoficial_policy = getCookie("tpeoficial_policy");
//Cookies/Policy/Ckecking
cookieButtonforCookie.addEventListener("click", () => {
    var policy = true;
    document.cookie = `tpeoficial_policy=${policy}; expires=${expires}; path=${path}`;
  });*/






