const productos = [
    {
        "id": 1,
        "nombre": "Teclado",
        "descripcion": "Teclado mecánico",
        "precio": 10.99
    },
    {
        "id": 2,
        "nombre": "Mouse",
        "descripcion": "Mouse ",
        "precio": 19.99
    },
    {
        "id": 3,
        "nombre": "Monitor",
        "descripcion": "Monitor 19 pulgadas",
        "precio": 5.49
    }
];

let idProductoEnEdicion = null;

function renderProductos() {
    const cuerpoTabla = document.getElementById('cuerpoTabla');
    if (!cuerpoTabla) return;
    
    cuerpoTabla.innerHTML = '';

    productos.forEach(producto => {
        const productoElement = document.createElement('tr');
        productoElement.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>$${producto.precio.toFixed(2)}</td>
            <td>
                <button onclick="editarProducto(${producto.id})">Editar</button>
                <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
            </td>
        `;
        cuerpoTabla.appendChild(productoElement);
    });
}

function guardarProducto() {
    if (idProductoEnEdicion !== null) {
        actualizarProducto();
        return;
    }

    const nombreInput = document.getElementById('nombre').value.trim();
    const descripcionInput = document.getElementById('descripcion').value.trim();
    const precioInput = document.getElementById('precio').value.trim();
    
    if (!nombreInput || !descripcionInput || !precioInput) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const nuevoProducto = {
        id: productos.length > 0 ? Math.max(...productos.map(p => p.id)) + 1 : 1,
        nombre: nombreInput,
        descripcion: descripcionInput,
        precio: parseFloat(precioInput)
    };

    productos.push(nuevoProducto);
    renderProductos();
    limpiarFormulario();
}

function editarProducto(id) {
    const producto = productos.find(p => p.id === id);
    
    if (producto) {
        document.getElementById('nombre').value = producto.nombre;
        document.getElementById('descripcion').value = producto.descripcion;
        document.getElementById('precio').value = producto.precio;
        
        idProductoEnEdicion = id;
        
        const agregarBtn = document.getElementById('btn_agregar');
        if (agregarBtn) agregarBtn.textContent = 'Actualizar';

        const cancelarBtn = document.getElementById('btn_cancelar');
        if (cancelarBtn) cancelarBtn.style.display = 'inline-block';
    }
}

function actualizarProducto() {
    const nombreInput = document.getElementById('nombre').value.trim();
    const descripcionInput = document.getElementById('descripcion').value.trim();
    const precioInput = document.getElementById('precio').value.trim();
    
    if (!nombreInput || !descripcionInput || !precioInput) {
        alert('Por favor, complete todos los campos para actualizar.');
        return;
    }

    const producto = productos.find(p => p.id === idProductoEnEdicion);
    if (producto) {
        producto.nombre = nombreInput;
        producto.descripcion = descripcionInput;
        producto.precio = parseFloat(precioInput);
    }

    cancelarEdicion();
}

function cancelarEdicion() {
    limpiarFormulario();
}

function eliminarProducto(id) {
    const indice = productos.findIndex(p => p.id === id);
    if (indice !== -1) {
        productos.splice(indice, 1);
        renderProductos();
    }
}

function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('precio').value = '';
    idProductoEnEdicion = null;
    
    const agregarBtn = document.getElementById('btn_agregar');
    if (agregarBtn) agregarBtn.textContent = 'Agregar';

    const cancelarBtn = document.getElementById('btn_cancelar');
    if (cancelarBtn) cancelarBtn.style.display = 'none';
}

const agregarBtn = document.getElementById('btn_agregar');
if (agregarBtn) {
    agregarBtn.addEventListener('click', guardarProducto);
}

const cancelarBtn = document.getElementById('btn_cancelar');
if (cancelarBtn) {
    cancelarBtn.addEventListener('click', cancelarEdicion);
}

window.onload = function() {
    renderProductos();
    const cancelarBtnInicial = document.getElementById('btn_cancelar');
    if (cancelarBtnInicial) cancelarBtnInicial.style.display = 'none';
};