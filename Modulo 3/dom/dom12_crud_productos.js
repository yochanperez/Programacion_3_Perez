const productos = [
    {
        id: 1,
        nombre: "Teclado",
        descripcion: "Teclado mecánico",
        precio: 10.99
    },
    {
        id: 2,
        nombre: "Mouse",
        descripcion: "Mouse",
        precio: 19.99
    },
    {
        id: 3,
        nombre: "Monitor",
        descripcion: "Monitor 19 pulgadas",
        precio: 5.49
    }
];

let idProductoEnEdicion = null;

function renderProductos() {
    const cuerpoTabla = document.getElementById("cuerpoTabla");
    cuerpoTabla.innerHTML = "";

    productos.forEach(producto => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>$${producto.precio.toFixed(2)}</td>
            <td>
                <button onclick="editarProducto(${producto.id})">Editar</button>
                <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
            </td>
        `;

        cuerpoTabla.appendChild(fila);
    });
}

function guardarProducto() {
    const nombre = document.getElementById("nombre").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();
    const precio = document.getElementById("precio").value.trim();

    if (!nombre || !descripcion || !precio) {
        alert("Complete todos los campos");
        return;
    }

    if (idProductoEnEdicion !== null) {
        const producto = productos.find(p => p.id === idProductoEnEdicion);

        if (producto) {
            producto.nombre = nombre;
            producto.descripcion = descripcion;
            producto.precio = parseFloat(precio);
        }

        idProductoEnEdicion = null;
        document.getElementById("btn_agregar").textContent = "Agregar producto";
    } else {
        const nuevoProducto = {
            id: productos.length > 0 ? Math.max(...productos.map(p => p.id)) + 1 : 1,
            nombre,
            descripcion,
            precio: parseFloat(precio)
        };

        productos.push(nuevoProducto);
    }

    limpiarFormulario();
    renderProductos();
}

function editarProducto(id) {
    const producto = productos.find(p => p.id === id);

    if (!producto) return;

    document.getElementById("nombre").value = producto.nombre;
    document.getElementById("descripcion").value = producto.descripcion;
    document.getElementById("precio").value = producto.precio;

    idProductoEnEdicion = id;
    document.getElementById("btn_agregar").textContent = "Actualizar";
}

function eliminarProducto(id) {
    const indice = productos.findIndex(p => p.id === id);

    if (indice !== -1) {
        productos.splice(indice, 1);
        renderProductos();
    }
}

function limpiarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("precio").value = "";

    idProductoEnEdicion = null;
    document.getElementById("btn_agregar").textContent = "Agregar producto";
}

document.getElementById("btn_agregar").addEventListener("click", guardarProducto);

document.getElementById("btn_cancelar").addEventListener("click", limpiarFormulario);

window.onload = renderProductos;