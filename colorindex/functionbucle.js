
var color = ["yellow", "red", "blue", "orange", "green", "cyan"]

var divColor = document.getElementById("bonechange")

var diablo = document.getElementById("diablo");

diablo.addEventListener('click', tao(), false);

function tao(count = 0) {

    return function () {

        if (count < color.length) {
            
            divColor.style.background = color[count];
            
            ++count;

        }
    }
}


/*setTimeout(()=>{
    for(var i = 0; i < arrayNumber.length; i++){
        if(i = 0){
            document.getElementById("bonechange").style.color = "red"
        
        }else{
            document.getElementById("bonechange").style.color = "blue"
        }
    };

    console.log("dis code is execute in 2 segundo")
}, 2000)*/