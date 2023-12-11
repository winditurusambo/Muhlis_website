document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const searchResultsContainer = document.getElementById('search-results-container');

    // Logika pencarian
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const searchTerm = searchInput.value.toLowerCase();
        searchResultsContainer.innerHTML = '';

        // Lakukan pencarian pada elemen produk
        const products = document.querySelectorAll('.product');
        products.forEach(function(product) {
            const productName = product.dataset.nama.toLowerCase();
            if (productName.includes(searchTerm)) {
                const productContainer = product.cloneNode(true);
                searchResultsContainer.appendChild(productContainer);
            }
        });

        // Jika tidak ada hasil
        if (searchResultsContainer.innerHTML === '') {
            searchResultsContainer.innerHTML = 'Produk tidak ditemukan.';
        }
    });
});
