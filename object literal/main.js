var lua = prompt('introduce estos datos: mango, fresa, guineo, aguacate, platanos, queso, yautia coco')

function preciosCaros(caro) {
    const productos = {

        "platanos": console.log("estan caros 35RD$"),

    }

    //  return productos[caro] ?? "price not found";
}

switch (lua) {
    case "platanos":
        document.getElementById("display").innerHTML = `<h2>platanos estan a 30$RD</h2>`
        break;

    case "mango":
        document.getElementById("display").innerHTML = `<h2>Los mangos caros a 50$RD</h2>`
        break;

    default:
        document.getElementById("display").innerHTML = `<h1>INTRODUCE LOS DATOS</h1>`
}