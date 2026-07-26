const productos = [
    {
        id: 1,
        nombre: "Moisés Caicedo",
        descripcion: "MCD / Pivote",
        precio: 116.00
    },
    {
        id: 2,
        nombre: "Piero Hincapié",
        descripcion: "DFC / Central",
        precio: 42.00
    },
    {
        id: 3,
        nombre: "Kendry Páez",
        descripcion: "MCO / Mediocentro",
        precio: 12.00
    }
];

let idProductoEnEdicion = null;

function renderProductos() {
    const cuerpoTabla = document.getElementById("cuerpoTabla");
    if (!cuerpoTabla) return;
    
    cuerpoTabla.innerHTML = "";

    productos.forEach(producto => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>$${producto.precio.toFixed(2)}M</td>
            <td>
                <button onclick="editarProducto(${producto.id})">Editar</button>
                <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
            </td>
        `;

        cuerpoTabla.appendChild(fila);
    });
    actualizarEstadisticas();
}

function actualizarEstadisticas() {
    const total = productos.length;
    
    const statTotal = document.getElementById('stat_total');
    const statPromedio = document.getElementById('stat_promedio');
    const statCaro = document.getElementById('stat_caro');
    const statBarato = document.getElementById('stat_barato');

    if (!statTotal || !statPromedio || !statCaro || !statBarato) return;

    if (total === 0) {
        statTotal.textContent = '0';
        statPromedio.textContent = '$0.00M';
        statCaro.textContent = '-';
        statBarato.textContent = '-';
        return;
    }

    const sumaPrecios = productos.reduce((acc, p) => acc + p.precio, 0);
    const promedio = sumaPrecios / total;

    const productoMasCaro = productos.reduce((max, p) => p.precio > max.precio ? p : max, productos[0]);
    const productoMasBarato = productos.reduce((min, p) => p.precio < min.precio ? p : min, productos[0]);

    statTotal.textContent = total;
    statPromedio.textContent = `$${promedio.toFixed(2)}M`;
    statCaro.textContent = `${productoMasCaro.nombre} ($${productoMasCaro.precio.toFixed(2)}M)`;
    statBarato.textContent = `${productoMasBarato.nombre} ($${productoMasBarato.precio.toFixed(2)}M)`;
}

function guardarProducto() {
    const nombreInput = document.getElementById("nombre");
    const descripcionInput = document.getElementById("descripcion");
    const precioInput = document.getElementById("precio");

    if (!nombreInput || !descripcionInput || !precioInput) return;

    const nombre = nombreInput.value.trim();
    const descripcion = descripcionInput.value.trim();
    const precio = precioInput.value.trim();

    if (!nombre || !descripcion || !precio) {
        alert("Complete todos los campos del jugador");
        return;
    }

    const btnAgregar = document.getElementById("btn_agregar");

    if (idProductoEnEdicion !== null) {
        const producto = productos.find(p => p.id === idProductoEnEdicion);

        if (producto) {
            producto.nombre = nombre;
            producto.descripcion = descripcion;
            producto.precio = parseFloat(precio);
        }

        idProductoEnEdicion = null;
        if (btnAgregar) btnAgregar.textContent = "Agregar Jugador";
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

    const nombreInput = document.getElementById("nombre");
    const descripcionInput = document.getElementById("descripcion");
    const precioInput = document.getElementById("precio");
    const btnAgregar = document.getElementById("btn_agregar");

    if (nombreInput) nombreInput.value = producto.nombre;
    if (descripcionInput) descripcionInput.value = producto.descripcion;
    if (precioInput) precioInput.value = producto.precio;

    idProductoEnEdicion = id;
    if (btnAgregar) btnAgregar.textContent = "Actualizar Jugador";
}

function eliminarProducto(id) {
    const indice = productos.findIndex(p => p.id === id);

    if (indice !== -1) {
        productos.splice(indice, 1);
        renderProductos();
    }
}

function limpiarFormulario() {
    const nombreInput = document.getElementById("nombre");
    const descripcionInput = document.getElementById("descripcion");
    const precioInput = document.getElementById("precio");
    const btnAgregar = document.getElementById("btn_agregar");

    if (nombreInput) nombreInput.value = "";
    if (descripcionInput) descripcionInput.value = "";
    if (precioInput) precioInput.value = "";

    idProductoEnEdicion = null;
    if (btnAgregar) btnAgregar.textContent = "Agregar Jugador";
}

document.addEventListener("DOMContentLoaded", () => {
    const btnAgregar = document.getElementById("btn_agregar");
    const btnCancelar = document.getElementById("btn_cancelar");

    if (btnAgregar) btnAgregar.addEventListener("click", guardarProducto);
    if (btnCancelar) btnCancelar.addEventListener("click", limpiarFormulario);

    renderProductos();
});