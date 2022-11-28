let nombre = prompt("Bienvenido a Estacion LG, donde realizamos los mejores cortes de pelo! Cual es tu nombre?");
alert(nombre + ", porfavor selecciona un dia de la semana, de martes a sabado, para solicitar un turno!");
let dia = "";
let horario = 0;
let solicitarOtroTurno = false;

do{
    dia = prompt("Que dia queres cortarte?");
    switch (dia){
        case "martes":
        alert("Los horarios disponibles para el dia martes son: 11:00, 14:30, 17:00 y 19:30");
        horario = prompt("Selecciona uno de los horarios indicacos");
            break;
        case "miercoles":
        alert("Los horarios disponibles para el dia miercoles son: 11:30, 15:00, 17:30 y 19:00");
        horario = prompt("Selecciona uno de los horarios indicacos");
            break;
        case "jueves":
        alert("Los horarios disponibles para el dia jueves son: 11:00, 14:30, 17:00 y 19:30");
        horario = prompt("Selecciona uno de los horarios indicacos");
            break;
        case "viernes":
        alert("Los horarios disponibles para el dia viernes son: 11:30, 15:00, 17:30 y 19:00");
        horario = prompt("Selecciona uno de los horarios indicacos");
            break;
        case "sabado":
        alert("Los horarios disponibles para el dia sabado son: 11:00, 14:30, 17:00 y 19:30");
        horario = prompt("Selecciona uno de los horarios indicacos");
            break;
        default: 
        alert("Ingresaste mal algun dato")
            break;
    }
    solicitarOtroTurno = confirm ("Queres reservar otro turno?")
} while (solicitarOtroTurno);

alert(nombre+ ", solicitaste turno para el dia "+dia+" a las "+horario+ " hs!");
alert("Tambien contamos con productos para que te puedas peinar en casa!");


    let producto = "";
    let cantidad = 0;
    let precio = 0;
    let totalCompra= 0;
    let comprarOtroProducto = false;


    const cantidadConfirmada = (cantidad) => {
        while (Number.isNaN(cantidad) || cantidad === 0) {
            if (cantidad !== 0) {
                alert("Tiene que agregar un número")
            } else {
                alert("Porfavor agrega una cantidad de productos")
            }
            cantidad = parseInt(prompt("¿Cuántos querés comprar?"))
        }
    
        return cantidad;
    };


    do {
        producto = prompt("Tenemos stock en: Cera, gel, fijador! Que producto te gustaria comprar?");
        cantidad = prompt("Cuanta cantidad de " + producto + " vas a querer?")
        let cantidadValida = cantidadConfirmada(cantidad);

        switch (producto) {
            case "cera":
                precio = 650;
                break;
            case "gel":
                precio = 500;
                break;
            case "fijador":
                precio = 800;
                break;
            default:
                alert("Alguno de los datos que ingresaste no es correcto!");
                precio = 0
                cantidad = 0
        }
        totalCompra = precio * cantidadValida;
        comprarOtroProducto = confirm("Queres comprar otro de los productos?")

    } while (comprarOtroProducto);

alert("El total de tu compra es de: " +totalCompra);



comprar()
