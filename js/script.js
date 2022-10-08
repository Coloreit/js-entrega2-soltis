let savedMail = "admin@babyboom.com";
let savedPass = "1234";

function login (){

    let ingresar = false;

    for(let i = 2; i >= 0 ; i--){
        let userMail = prompt ("Ingresa tu email");
        if (userMail === savedMail){
            for(let j = 2; j >= 0 ; j--){
                let userPass = prompt ("Ingresa tu contraseña. Tenes " +(j+1)+ " intentos");
                //console.log(ingresar)
                if (userPass === savedPass){
                    ingresar = true;
                    break;
                }else{
                    alert ("Error. Te quedan " + j + " intentos")
                }
            }
            break;
        }else{
            alert ("Error. Envianos un mail a babyboom@gmail.com para crear una cuenta")
        }
    }

    return ingresar;
}

if(login()){
    alert ("Bienvenido administrador, ya podes empezar a cargar productos");
}else{
    alert ("Tu cuenta fue bloqueada, te enviaremos un mail con la nueva contraseña");
}

class Producto {

    constructor(nombre, color, genero, edad, categoria, precio, id){
        this.nombre = nombre;
        this.color = color;
        this.genero = genero;
        this.edad = parseInt(edad);
        this.categoria= categoria;
        this.precio = parseFloat(precio);
        this.id = id;
    }

    asignarId(array){
        this.id = array.length;
    }
}

const productos = [
    new Producto("Remera", "Rosa", "Nena", 10, "Indumentaria", 300, 1),
    new Producto("Remera", "Celeste", "Varón", 12, "Indumentaria", 300, 2),
    new Producto("Remera", "Verde", "Indistinto", 8, "Indumentaria", 250, 3),
    new Producto("Mamadera", "Blanco", "Indistinto", 0, "Accesorios", 800, 4),
    new Producto("Chupete", "Verde", "Indistinto", 1, "Accesorios", 600, 5),
    new Producto("Ladrillitos", "Varios", "Indistinto", 3, "Juguetes", 1500, 6),
    new Producto("Bebe", "Varios", "Indistinto", 3, "Juguetes", 1200, 7),
    new Producto("Shampoo", "Blanco", "Indistinto", 1, "Perfumeria", 350, 8),
]

console.log(productos);

let continuar = true;

while(continuar){
    let ingreso = prompt ("Ingresa: nombre, color, genero, edad, categoria y precio. Separados por (+). Tipea X para finalizar)");

    if (ingreso.toUpperCase() == "X"){
        continuar = false;
        break;
    }

    let datos = ingreso.split("+");
    const productoIngresado = new Producto(datos[0],datos[1],datos[2],datos[3],datos[4],datos[5]);
    
    productos.push(productoIngresado);
    productoIngresado.asignarId(productos);
    console.log(productos);
}

let filtro = prompt("Elegí filtro: \n1 - Precio (Menor a mayor) \n2 - Precio (Mayor a menor) \n3 - Edad (Menor a mayor)");

function ordenar(filtro, array) {
    let arrayOrdenado = array.slice(0);

    switch (filtro) {
        case '1':
            return arrayOrdenado.sort((a, b) => a.precio - b.precio);
        case '2':
            return arrayOrdenado.sort((a, b) => b.precio - a.precio);
        case '3':
            return arrayOrdenado.sort((a, b) => a.edad - b.edad);
        default:
            alert('No es un filtro válido');
            break;
    }
}

function crearStringResultado(array){
    let info = "";
    array.forEach(elemento=>{
        info += "Producto: " + elemento.nombre + "\nCOlor: " + elemento.color + "\nEdad: " + elemento.edad + " años\nPrecio: " + elemento.precio + " pesos.\n\n" 
    })
    return info;
}

alert (crearStringResultado( ordenar(filtro,productos) ) );

let generoElegido = prompt("Elegí un genero - Nena, varón o indistinto")

const filtrado = productos.filter ((producto) => producto.genero.toLowerCase().includes(generoElegido.toLowerCase()) || producto.genero.toLowerCase().includes("indistinto"))

if (filtrado.length==0){
    alert ("Lo sentimos, no fue encontrado");
}else{
    const imprimible = filtrado.map((producto)=>producto.nombre);
    alert ("Los productos son: \n- " +imprimible.join("\n- "))
}

alert("Adiós")