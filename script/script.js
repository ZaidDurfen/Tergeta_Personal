function redirigirConDatos() {
    const nombre = document.getElementById('nombre').value;
    const titulo = document.getElementById('titulo').value;
    const edad = document.getElementById('edad').value;

    if (nombre && titulo && edad) {
        window.location.href = `index.html?nombre=${encodeURIComponent(nombre)}&titulo=${encodeURIComponent(titulo)}&edad=${encodeURIComponent(edad)}`;
    } else {
        alert("Por favor, complete todos los campos.");
    }
}

function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const pairs = queryString.split("&");
    
    pairs.forEach(pair => {
        const [key, value] = pair.split("=");
        params[decodeURIComponent(key)] = decodeURIComponent(value);
    });
    return params;
}

function cargarDatos() {
    const params = getQueryParams();

    if (params.nombre && params.titulo && params.edad) {
        document.getElementById('nombre').textContent = params.nombre;
        document.getElementById('titulo').textContent = params.titulo;
        document.getElementById('edad').textContent = params.edad;
    }
}

function volverAlFormulario() {
    window.location.href = "index2.html"; 
}

window.onload = cargarDatos;
