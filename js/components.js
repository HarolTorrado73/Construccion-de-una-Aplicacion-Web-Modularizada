// Función para cargar un componente HTML en un contenedor
function loadComponent(url, containerId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(error => console.error('Error cargando componente:', error));
}

// Cargar componentes
function loadAllComponents() {
    loadComponent('components/header.html', 'header-container');
    loadComponent('components/menu.html', 'menu-container');
    loadComponent('components/footer.html', 'footer-container');
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', loadAllComponents);