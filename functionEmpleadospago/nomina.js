var CalcularDatos = document.getElementById("calcularDatos")

CalcularDatos.addEventListener("click", function () {

    var GetN = document.getElementById("empleados").value

    var GetL = document.getElementById("apellidoEmpleado").value

    var GetNetoSalario = document.getElementById("numberEmpleados").value

    // console.log(GetN + " " + GetN + " "+ GetNetoSalario)

    let descuento = 1200
    let incetivo = 2000

    

    document.getElementById("Nomina").innerHTML = `
        
        <h1>${GetN}</h1>
        <h1>${GetL}</h1>
        <h1>${}</h1>
        `;

})

