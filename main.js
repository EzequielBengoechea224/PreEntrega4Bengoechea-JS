//arranco el proyecto

//Seccion de bienvenida co sweet alert

//Creacion de variables
let suma_tot = 0;


//functions
const actualizarPrecio = () =>{
    const precioTotal = document.getElementById("precioTotal");
    precioTotal.textContent = `El precio total de su carrito es: $${suma_tot}`;
}




function agregarAlCarrito(prod) {
    
    console.log(prod);
    const prodCar = document.createElement("div");
    prodCar.className = "col-sm-6"; //agregado de clases para que sea responsive
    prodCar.classList.add("col-md-4","col-xl-3","borderProds");
    /* console.log(`Se agregó ${prod.nombre} al carrito`); */
    prodCar.innerHTML = `
    <img src=${prod.urlImg} alt="imagen de muestra" class="imgSize shadow">
    <h4>Prod: ${prod.nombre}</h4>
    <b>Precio: ${prod.precio} </b>
    `;
    carritoHTML.append(prodCar);

    //utilizacion de toastify para que se vea mejor la pagina :3

    Toastify({
        text: "Su producto se cargo con exito!!",
        duration: 3000,
        gravity: "top",
        position: "right",
        style:{
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
    }).showToast();

    //actualizacion de precio
    suma_tot = suma_tot + prod.precio;
    actualizarPrecio(suma_tot);
};

//declaracion de variables
const carritoHTML = document.getElementById("carrito");

//Creacion de vectores
const vecCarrito = [];

//Traigo productos de data.json
const prodsDom = document.getElementById("productos")
const traerProductos = async () =>{
    try{
        const response = await fetch('data.json');
        const data = await response.json();
        
        let nbt = 1;
        data.forEach(obj => {
            vecCarrito.push(obj);
            let divProds = document.createElement("div");
            divProds.className = "col-sm-6";
            divProds.classList.add("col-md-4","col-xl-3");
            divProds.innerHTML = `
            <img src=${obj.urlImg} alt="imagen de muestra" class="imgSize shadow">
            <h4>Prod: ${obj.nombre}</h4>
            <b>Precio: ${obj.precio} </b>
            <input type="button" value="Click para agregar a carrito" id="button${nbt}">
            `;
            prodsDom.appendChild(divProds);
            nbt++;   
        });

        //seccion de bienvenida
        


        //seccion para los addEventListener
        const boton1 = document.getElementById(`button1`);
        const boton2 = document.getElementById(`button2`);
        const boton3 = document.getElementById(`button3`);
        const boton4 = document.getElementById(`button4`);
        boton1.addEventListener("click", () => agregarAlCarrito(vecCarrito[0]));
        boton2.addEventListener("click", () => agregarAlCarrito(vecCarrito[1]));
        boton3.addEventListener("click", () => agregarAlCarrito(vecCarrito[2]));
        boton4.addEventListener("click", () => agregarAlCarrito(vecCarrito[3]));
    }catch(error){
        console.log(error);
    }
};

traerProductos();












