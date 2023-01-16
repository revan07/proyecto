/*let expr = "a";

switch (expr) {
    case "naranja":
        console.log("las naranjas cuestan 50 $RD")
        break;
    case "platano":
        console.log("los platanos cuestan 30 $RD")
        break;
    case "yuca":
        console.log("las yukas cuestan 200 $RD")
        break;
    case "yautia coco":
        console.log("las yautia coco cuestan 200 $RD")
        break;
    default:
        console.log("no hay nada ven al otro dia")

}*/

const array = [1, 2, 3, 4, 5, 6];

function cont_delete() {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])

        const display = document.getElementById('display').innerHTML = `
    <h1> ${array[i]} </h1>
    `;
    }
}

function clear() {
   

   
}