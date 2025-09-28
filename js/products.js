// Definir Web Component para product-card
class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    set product(data) {
        this.shadowRoot.innerHTML = `
            <style>
                .card { border: 1px solid #ccc; padding: 10px; margin: 10px; }
                img { max-width: 100px; }
            </style>
            <div class="card">
                <img src="${data.imagen}" alt="${data.nombre}">
                <h3>${data.nombre}</h3>
                <p>${data.descripcion}</p>
                <p>Precio: $${data.precio}</p>
            </div>
        `;
    }
}

customElements.define('product-card', ProductCard);

// Función para cargar y renderizar productos
function loadProducts() {
    fetch('data/productos.json')
        .then(response => response.json())
        .then(products => {
            const container = document.getElementById('products-container');
            products.forEach(product => {
                const card = document.createElement('product-card');
                card.product = product;
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error cargando productos:', error));
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', loadProducts);