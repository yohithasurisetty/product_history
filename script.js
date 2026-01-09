const products = [
    {
        name: "iPhone",
        category: "tech",
        description: "The evolution of Apple's smartphone.",
        timeline: [
            "2007: First iPhone released.",
            "2010: iPhone 4 with Retina display.",
            "2020: iPhone 12 with 5G support."
        ]
    },
    {
        name: "Coca-Cola",
        category: "food",
        description: "A classic beverage's journey.",
        timeline: [
            "1886: Invented by John Pemberton.",
            "1915: Contour bottle introduced.",
            "1985: New Coke fiasco and return to original."
        ]
    },
    {
        name: "Levi's Jeans",
        category: "fashion",
        description: "Iconic denim wear history.",
        timeline: [
            "1853: Founded by Levi Strauss.",
            "1873: Patented riveted jeans.",
            "2010s: Eco-friendly materials introduced."
        ]
    }
];

const productsContainer = document.getElementById('products');
const searchInput = document.getElementById('search');

function displayProducts(filteredProducts) {
    productsContainer.innerHTML = '';
    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h2><i class="fas fa-history"></i> ${product.name}</h2>
            <p>${product.description}</p>
            <button class="toggle-timeline">View Timeline</button>
            <div class="timeline">
                <ul>
                    ${product.timeline.map(event => `<li>${event}</li>`).join('')}
                </ul>
            </div>
        `;
        productsContainer.appendChild(productDiv);

        // Toggle timeline visibility
        const toggleBtn = productDiv.querySelector('.toggle-timeline');
        const timeline = productDiv.querySelector('.timeline');
        toggleBtn.addEventListener('click', () => {
            timeline.style.display = timeline.style.display === 'block' ? 'none' : 'block';
        });
    });
}

displayProducts(products);

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    displayProducts(filtered);
});
