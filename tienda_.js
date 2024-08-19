document.addEventListener("DOMContentLoaded",() =>{
            
    const funkos=[          
            {
                id: 1,
                nombre: "Charmander Exclusive(focado)",
                precio: 125.25,
                imagen: "https://m.media-amazon.com/images/I/51jUFKdYV0L._SL500_.jpg",
            },
            {
                id: 2,
                nombre: "Charmander Silver",
                precio: 19.39,
                imagen: "https://m.media-amazon.com/images/I/31ePkmw1wBS._SL500_.jpg",
            },
            {
                id: 3,
                nombre: "Mewtwo",
                precio: 14.00,
                imagen: "https://m.media-amazon.com/images/I/21bRU5YW6vL._SL500_.jpg",
            },
            {
                id: 4,
                nombre: "Lapras",
                precio: 29.90,
                imagen: "https://m.media-amazon.com/images/I/41iCR4XnfYL._SL500_.jpg",
            },
            {
                id: 5,
                nombre: "Alakazam",
                precio: 24.92,
                imagen: "https://m.media-amazon.com/images/I/41Maxd2i+QL._SL500_.jpg",
            },
            {
                id: 6,
                nombre: "Pikachu (Atack stance)",
                precio: 21.32,
                imagen: "https://m.media-amazon.com/images/I/31uDkWb90HL._SL500_.jpg",
            },
            {
                id: 7,
                nombre: "Meowth Vinyl Figure",
                precio: 24.99,
                imagen: "https://m.media-amazon.com/images/I/31JJ2ALdyqS._SL500_.jpg",
            },
            {
                id: 8,
                nombre: "Sylveon",
                precio: 39.99,
                imagen: "https://m.media-amazon.com/images/I/31dNi5tIVcL._SL500_.jpg",
            },
            {
                id: 9,
                nombre: "Raichu",
                precio: 39.90,
                imagen: "https://m.media-amazon.com/images/I/41RUk+7Oa1L._SL500_.jpg",
            },
            {
                id: 10,
                nombre: "Eevee Vinyl Figure",
                precio: 39.90,
                imagen: "https://m.media-amazon.com/images/I/41w4TmejnfL.jpg",
            },
            {
                id: 11,
                nombre: "Vaporeon",
                precio: 19.47,
                imagen: "https://m.media-amazon.com/images/I/41CFYH-B9SL.jpg",
            },
            {
                id: 12,
                nombre: "Bulbasaur Vinyl Figure",
                precio: 19.99,
                imagen: "https://m.media-amazon.com/images/I/31yA8-svavL.jpg",
            }   
    ]
    const mochilas = [          
            {
                id: 100,
                nombre: "Diseño Pikachu, Negro",
                precio: 42.99,
                imagen: "https://m.media-amazon.com/images/I/41cifPLtxBL._SL500_.jpg",
            },
            {
                id: 101,
                nombre: "Mochila Pokeball, Negro",
                precio: 26.84,
                imagen: "https://m.media-amazon.com/images/I/418Y2r8pDPS._SL500_.jpg",
            },
            {
                id: 102,
                nombre: "Mochila Pokeball",
                precio: 26.95,
                imagen: "https://m.media-amazon.com/images/I/41ITIGJWT0L._SL500_.jpg",
            },
            {
                id: 103,
                nombre: "Mochila Unisex, Gris",
                precio: 51.99,
                imagen: "https://m.media-amazon.com/images/I/41f888Pe8cS._SL500_.jpg",
            },
            {
                id: 104,
                nombre: "Mochila escolar Pokémon",
                precio: 56.34,
                imagen: "https://m.media-amazon.com/images/I/41dXIXHxDxL._SL500_.jpg",
            },
            {
                id: 105,
                nombre: "Mochila Pokémon Trainer",
                precio: 17.99,
                imagen: "https://m.media-amazon.com/images/I/51Lp3aEpLWS._SL500_.jpg",
            },
            {
                id: 106,
                nombre: "Mochila Team Pokémon",
                precio: 30.72,
                imagen: "https://m.media-amazon.com/images/I/51rEaglOasL._SL500_.jpg",
            },
            {
                id: 107,
                nombre: "Mochila Pokeball",
                precio: 16.75,
                imagen: "https://m.media-amazon.com/images/I/41FgvE-kKRL._SL500_.jpg",
            },
            {
                id: 108,
                nombre: "Mochila bolsa Pikachu",
                precio: 13.99,
                imagen: "https://m.media-amazon.com/images/I/51nlL5hzbBL._SL500_.jpg",
            },
            {
                id: 109,
                nombre: "Mochila Eevee, Rosa",
                precio: 41.99,
                imagen: "https://m.media-amazon.com/images/I/41Oul0sISiL._SL500_.jpg",
            },
            {
                id: 110,
                nombre: "Mochila Pikachu, Amarilla",
                precio: 44.23,
                imagen: "https://images-eu.ssl-images-amazon.com/images/I/31%2BbhRH-cYL.jpg",
            }   
    ]

    const Tazas = [          
            {
                id: 300,
                nombre: "Taza desayuno pokémon",
                precio: 12.99,
                imagen: "https://images-eu.ssl-images-amazon.com/images/I/51DQg6c3lEL.jpg",
            },
            {
                id: 301,
                nombre: "Taza desayuno Pikachu",
                precio: 21.20,
                imagen: "https://m.media-amazon.com/images/I/31nOk19TGmL._SL500_.jpg",
            },
            {
                id: 302,
                nombre: "Taza Eevee Face",
                precio: 14.91,
                imagen: "https://images-na.ssl-images-amazon.com/images/I/51JqQgdzYYL.jpg",
            },
            {
                id: 303,
                nombre: "Taza Eevee Evolution",
                precio: 9.95,
                imagen: "https://images-eu.ssl-images-amazon.com/images/I/51Hj5UYy4JL.jpg",
            },
            {
                id: 304,
                nombre: "Taza Pokémon Multicolor",
                precio: 13.25,
                imagen: "https://images-eu.ssl-images-amazon.com/images/I/51Yab%2BlievL.jpg",
            },
            {
                id: 306,
                nombre: "Taza Pikachu",
                precio: 18.87,
                imagen: "https://images-eu.ssl-images-amazon.com/images/I/41uMoW-LZoL.jpg",
            },
            {
                id: 307,
                nombre: "Taza Pikachu Face",
                precio: 9.76,
                imagen: "https://images-na.ssl-images-amazon.com/images/I/41UzZdEnDbL.jpg",
            },
            {
                id: 308,
                nombre: "Taza Pikachu Negro",
                precio: 13.99,
                imagen: "https://m.media-amazon.com/images/I/410pVq410iL._SL500_.jpg",
            },
            {
                id: 309,
                nombre: "Taza Pokémon Ball",
                precio: 9.99,
                imagen: "https://images-eu.ssl-images-amazon.com/images/I/51pdogaQpxL.jpg",
            },
            {
                id: 305,
                nombre: "Taza Snorlax",
                precio: 9.99,
                imagen: "https://images-eu.ssl-images-amazon.com/images/I/41ZpPQVMN7L.jpg",
            },
            {
                id: 310,
                nombre: "Water Bottle Black",
                precio: 20.99,
                imagen: "https://m.media-amazon.com/images/I/41vwaRiOMvL._SL500_.jpg",
            },
            {
                id: 311,
                nombre: "Water Bottle Red",
                precio: 19.99,
                imagen: "https://m.media-amazon.com/images/I/41auPL4BdJL._SL500_.jpg",
            } 
    ]

    const Videojuegos = [          
            {
                id: 200,
                nombre: "Pokémon Legends: ARCEUS",
                precio: 55.50,
                imagen: "https://m.media-amazon.com/images/I/51Lus4002aL._SL500_.jpg",
            },
            {
                id: 201,
                nombre: "Pokémon Escudo",
                precio: 44.99,
                imagen: "https://m.media-amazon.com/images/I/51+ZGO+1sAL._SL500_.jpg",
            },
            {
                id: 202,
                nombre: "Pokémon Sword",
                precio: 55.06,
                imagen: "https://m.media-amazon.com/images/I/51TE-Qhsz4L._SL500_.jpg",
            },
            {
                id: 203,
                nombre: "Pokémon Diamante Brillante",
                precio: 38.90,
                imagen: "https://m.media-amazon.com/images/I/51eMdogAMfL._SL500_.jpg",
            },
            {
                id: 204,
                nombre: "Pokémon Zafiro Alfa",
                precio: 119.15,
                imagen: "https://images-eu.ssl-images-amazon.com/images/I/51GaOiU99ZL.jpg",
            },
            {
                id: 205,
                nombre: "Pokémon Mundo Misterioso: Equipo de rescate DX",
                precio: 56.61,
                imagen: "https://m.media-amazon.com/images/I/51BfGIEAP9L.jpg",
            },
            {
                id: 206,
                nombre: "Pokémon Sole",
                precio: 59.07,
                imagen: "https://images-eu.ssl-images-amazon.com/images/I/61fEvTWyaEL.jpg",
            },
            {
                id: 207,
                nombre: "Pokémon Luna",
                precio: 34.97,
                imagen: "https://images-eu.ssl-images-amazon.com/images/I/61N6Q9E18OL.jpg",
            },
            {
                id: 208,
                nombre: "Pokémon Tekken DX",
                precio: 69.99,
                imagen: "https://images-eu.ssl-images-amazon.com/images/I/61Nen6V%2BSyL.jpg",
            },
            {
                id: 209,
                nombre: "Pokémon Tournament",
                precio: 14.99,
                imagen: "https://images-eu.ssl-images-amazon.com/images/I/61u3JAHiHWL.jpg",
            },
            {
                id: 210,
                nombre: "Pokémon White Versión 2",
                precio: 205.52,
                imagen: "https://images-eu.ssl-images-amazon.com/images/I/514xno6hiLL.jpg",
            },
            {
                id: 211,
                nombre: "Pokémon Versión Negra 2",
                precio: 139.99,
                imagen: "https://images-eu.ssl-images-amazon.com/images/I/51YYBXnPO1L.jpg",
            }  
    ]

    let carrito = [];
    const divisa = "€";
    const DOMitems = document.querySelector("#items");
    const DOMcarrito = document.querySelector("#carrito");
    const DOMtotal = document.querySelector("#total");
    const DOMbotonLimpiar = document.querySelector("#vaciar");
    const DOMpagar = document.querySelector("#pagar");

    function miVideojuego(){
        document.getElementById("items").innerHTML = "";
        document.querySelector(".menu").style.display = "none";
        Videojuegos.forEach((info) => {
            const miNodo = document.createElement("div");
            miNodo.classList.add("card","col-4");

            const miNodoCard = document.createElement("div");
            miNodoCard.classList.add("card-body");

            const miNodoTitle = document.createElement("h5");
            miNodoTitle.classList.add("card-title");
            miNodoTitle.textContent = info.nombre;

            const miNodoImagen = document.createElement("img");
            miNodoImagen.classList.add("img-fluid");
            miNodoImagen.setAttribute("src",info.imagen);

            const miNodoPrecio = document.createElement("p");
            miNodoPrecio.classList.add("card-text");
            miNodoPrecio.textContent = `${info.precio}${divisa}`;

            const miNodoBoton = document.createElement("button");
            miNodoBoton.classList.add("btn","btn-primary");
            miNodoBoton.textContent = "Añadir";
            miNodoBoton.setAttribute("marcador",info.id);
            miNodoBoton.addEventListener("click",añadirProductoAlCarrito);

            miNodoCard.appendChild(miNodoImagen);
            miNodoCard.appendChild(miNodoTitle);
            miNodoCard.appendChild(miNodoPrecio);
            miNodoCard.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCard);
            DOMitems.appendChild(miNodo);
        });
    }

    function miTaza(){
        document.getElementById("items").innerHTML = "";
        document.querySelector(".menu").style.display = "none";
        Tazas.forEach((info) => {
            const miNodo = document.createElement("div");
            miNodo.classList.add("card","col-4");

            const miNodoCard = document.createElement("div");
            miNodoCard.classList.add("card-body");

            const miNodoTitle = document.createElement("h5");
            miNodoTitle.classList.add("card-title");
            miNodoTitle.textContent = info.nombre;

            const miNodoImagen = document.createElement("img");
            miNodoImagen.classList.add("img-fluid");
            miNodoImagen.setAttribute("src",info.imagen);

            const miNodoPrecio = document.createElement("p");
            miNodoPrecio.classList.add("card-text");
            miNodoPrecio.textContent = `${info.precio}${divisa}`;

            const miNodoBoton = document.createElement("button");
            miNodoBoton.classList.add("btn","btn-primary");
            miNodoBoton.textContent = "Añadir";
            miNodoBoton.setAttribute("marcador",info.id);
            miNodoBoton.addEventListener("click",añadirProductoAlCarrito);

            miNodoCard.appendChild(miNodoImagen);
            miNodoCard.appendChild(miNodoTitle);
            miNodoCard.appendChild(miNodoPrecio);
            miNodoCard.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCard);
            DOMitems.appendChild(miNodo);
        });
    }

    function miMochila(){
        document.getElementById("items").innerHTML = "";
        document.querySelector(".menu").style.display = "none";
        mochilas.forEach((info) => {
            const miNodo = document.createElement("div");
            miNodo.classList.add("card","col-4");

            const miNodoCard = document.createElement("div");
            miNodoCard.classList.add("card-body");

            const miNodoTitle = document.createElement("h5");
            miNodoTitle.classList.add("card-title");
            miNodoTitle.textContent = info.nombre;

            const miNodoImagen = document.createElement("img");
            miNodoImagen.classList.add("img-fluid");
            miNodoImagen.setAttribute("src",info.imagen);

            const miNodoPrecio = document.createElement("p");
            miNodoPrecio.classList.add("card-text");
            miNodoPrecio.textContent = `${info.precio}${divisa}`;

            const miNodoBoton = document.createElement("button");
            miNodoBoton.classList.add("btn","btn-primary");
            miNodoBoton.textContent = "Añadir";
            miNodoBoton.setAttribute("marcador",info.id);
            miNodoBoton.addEventListener("click",añadirProductoAlCarrito);

            miNodoCard.appendChild(miNodoImagen);
            miNodoCard.appendChild(miNodoTitle);
            miNodoCard.appendChild(miNodoPrecio);
            miNodoCard.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCard);
            DOMitems.appendChild(miNodo);
        });
    }

    function miFunkos(){
        document.getElementById("items").innerHTML = "";
        document.querySelector(".menu").style.display = "none";
        funkos.forEach((info) => {
            const miNodo = document.createElement("div");
            miNodo.classList.add("card","col-4");

            const miNodoCard = document.createElement("div");
            miNodoCard.classList.add("card-body");

            const miNodoTitle = document.createElement("h5");
            miNodoTitle.classList.add("card-title");
            miNodoTitle.textContent = info.nombre;

            const miNodoImagen = document.createElement("img");
            miNodoImagen.classList.add("img-fluid");
            miNodoImagen.setAttribute("src",info.imagen);

            const miNodoPrecio = document.createElement("p");
            miNodoPrecio.classList.add("card-text");
            miNodoPrecio.textContent = `${info.precio}${divisa}`;

            const miNodoBoton = document.createElement("button");
            miNodoBoton.classList.add("btn","btn-primary");
            miNodoBoton.textContent = "Añadir";
            miNodoBoton.setAttribute("marcador",info.id);
            miNodoBoton.addEventListener("click",añadirProductoAlCarrito);

            miNodoCard.appendChild(miNodoImagen);
            miNodoCard.appendChild(miNodoTitle);
            miNodoCard.appendChild(miNodoPrecio);
            miNodoCard.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCard);
            DOMitems.appendChild(miNodo);
        });
    }

    function miMenu(){
        document.getElementById("items").innerHTML = "";
        document.querySelector(".menu").style.display ="";
    }
    
    function añadirProductoAlCarrito(evento) {

        carrito.push(evento.target.getAttribute("marcador"))

        renCarrito();
    }
    var inventario1 = funkos.concat(mochilas);
    var inventario2 = Tazas.concat(Videojuegos);
    var inventario = inventario1.concat(inventario2);

    function renCarrito(){
        DOMcarrito.textContent = "";
        
        const carritoSinDupli = [...new Set(carrito)];
        carritoSinDupli.forEach((item) => {
            const miItemFun = inventario.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            
            const numeroUnidades = carrito.reduce((total, itemId) =>{
                return itemId === item ? total += 1 : total;
            }, 0);

            const miNodo = document.createElement("li");
            miNodo.classList.add("list-group-item","texto-derecha","mx-2");
            miNodo.textContent = `${numeroUnidades} x ${miItemFun[0].nombre} - ${miItemFun[0].precio}${divisa}`;
            

            const miBoton = document.createElement("button");
            miBoton.classList.add("btn","btn-danger","mx-5");
            miBoton.textContent = "x";
            miBoton.style.marginLeft = "1rem";
            miBoton.dataset.item = item;
            miBoton.addEventListener("click", borrarItemCarrito);

            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });

        DOMtotal.textContent = calcularTotal();
    }

    function borrarItemCarrito(evento){
        const id = evento.target.dataset.item;

        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });

        renCarrito();
    }

    function calcularTotal(){
        return carrito.reduce((total,item) =>{
            const miItem = inventario.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }

    function vaciarCarrito(){
        carrito = [];
        renCarrito();
    }
    var conte = document.querySelector(".ticket");
    function pagar(){
        
        var productos = [];
        productos.push(DOMcarrito.textContent+"\n");
        
        conte.productos;
        window.open("form.html","formulario","width=500px,height=500px");
        // window.alert("*****TICKET*****\n\n"+"Has comprado: \n"+productos+"\n\nHas pagado un total de: "+calcularTotal()+"\n\nGracias por comprar en nuestra tienda");
        }
    
        
    

    DOMbotonLimpiar.addEventListener("click",vaciarCarrito);
    DOMpagar.addEventListener("click",pagar);
    
    document.getElementById("menu").addEventListener("click",miMenu);
    document.getElementById("funkos").addEventListener("click",miFunkos);
    document.getElementById("mochilas").addEventListener("click",miMochila);
    document.getElementById("tazas").addEventListener("click",miTaza);
    document.getElementById("videojuego").addEventListener("click",miVideojuego);

    document.getElementById("img1").addEventListener("click",miFunkos);
    document.getElementById("img2").addEventListener("click",miMochila);
    document.getElementById("img3").addEventListener("click",miTaza);
    document.getElementById("img4").addEventListener("click",miVideojuego);
    
    renCarrito();
})