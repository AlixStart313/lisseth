function declararVar(){
    var materia = "web"

    if (true){
        var materia = "BD"
        console.log(materia)
    }
}

function declararLet(){
    let materia = "web"
    if (true){
        let materia = "BD"
        console.log(materia)
    }
    console.log(materia)
}

function declararConst(){
    const materia = "web"
    if (true){
        const materia = "BD"
        console.log(materia)
    }
    console.log(materia)
}

function declarOBJ(){
    const  persona  = {
        nombre :"Juan",
        apellido1 :"Vicente",
        colorf:"Red"
    }
console.log(persona)
console.log(persona.apellido1)

persona.nombre="Arturo"
console.log(persona)

Object.defineProperty(persona, "nombre",{configurable: false, writable: false})
persona.nombre="Mario"
console.log(persona)
}

function sumanormal(a,b){
    return (a+b);
}

console.log(sumanormal(4,19));

let sumaFlecha =(a,b) => a+b;

console.log(sumaFlecha(10,10));

let sumaFlechaEx=(a,b) => {
    return (a+b);
}

console.log(sumaFlechaEx(5,5));

let multiplicar = (a,b) => console.log(a*b)
multiplicar (5,6);

//--------------------------Template literals------------------------

let dia = "martes :(";
let concatenado= `hoy es : ${dia}`;

console.log(concatenado)

let musica =(nombre,artista) => `Hola estoy escuchando ${nombre} de ${artista}`;

console.log(musica("plan a","Paulo Londra"))

console.log("primera linea \n segunda linea")

console.log(`primera linea 
 segunda linea`)


 //-------------spread operator------------------

 let miArreglo=[1,2,3,4,5];


 let sumarArreglo= (a,b,c,d,e) => console.log(a+b+c+d+e);
 console.log(miArreglo)
  console.log(...miArreglo)

  sumarArreglo(...miArreglo)

  let otroArray = [10,11,12]

  let miArreglo2 = [...miArreglo,7,8,9,...otroArray]

  console.log(...miArreglo2)

  //-----------Destructoracion------------------
  const  celular={
    modelo :"Galaxy note 10+",
    marca: "samsumg",
    precio: 10000,
    color :"blanco",
    memoria:{
        ram: 2,
        rom:16
    }
  }

  let modelo = celular.modelo;

  console.log(`el celular ${modelo} cuesta ${celular.precio}`);

  const{marca,color} = marca;
  console.log(marca);
const{ram,rom}= celular;
  console.log(`èl celular ${marca} es de color ${color}`)


  
