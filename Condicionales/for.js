var miArray = ["Hola",2020,"Adios"]

var persona1 = {
    nombre : "Ciapfa",
    edad : 2
}

for (let index = 0; index < miArray.length; index++) {
    const element = miArray[index];
    console.log(element)
}

/*for( i=1; i <= 10; i++ ){
    if(i==1){
        console.log("Hola " + i + " vez")
    }else{
        console.log("Hola " + i + " veces")
    }
}*/

var personas = [persona1,persona2,persona3]

for (let index = 0; index < miArray.length; index++) {
    if(personas[index].edad >= 20){
        break;
    }
    const element = personas[index].nombre;
    console.log(element)
}

miArray.forEach( (d,i) => {
    console.log(i)
    //console.log(element)
})