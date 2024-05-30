var estacion = prompt("Ingrese la estacion del año");

switch(estacion){
    case "verano":
        alert("Inicio el 21 de diciembre, fin el 21 de marzo.");
        break;
    case "invierno":
        alert("Invierno: Inicio el 21 de junio, fin el 22 de septiembre.");
        break;
    case "primavera":
        alert("Primavera: Inicio el 22 de septiembre, fin el 21 de diciembre.");
        break;
    case "otoño":
        alert("Otoño: Inicio el 21 de marzo, fin el 21 de junio.");
        break;
    default:
        alert("Eso no es una estación.");
}

if(estacion=="verano"){
    alert("Inicio el 21 de diciembre, fin el 21 de marzo.");
}
else if(estacion=="invierno"){
    alert("Invierno: Inicio el 21 de junio, fin el 22 de septiembre.");
}
else if(estacion=="primavera"){
    alert("Primavera: Inicio el 22 de septiembre, fin el 21 de diciembre.");
}
else if(estacion=="otoño"){
    alert("Otoño: Inicio el 21 de marzo, fin el 21 de junio.");
}
else{
    alert("Eso no es una estación.");
}
