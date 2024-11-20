function goToPDP(productId) {
    const productDetails = {
        '1': {
            title: 'Speaker',
            description: 'This is a Speaker priced at ₹299.',
            image: 'download.jfif',
            price: '299 only'
        },
        '2': {
            title: 'Smartwatch',
            description: 'This is a Smartwatch priced at ₹499.',
            image: 'second.webp',
            price: '499 only'
        },
        '3': {
            title: 'Projector',
            description: 'XElectron S2 (8400 lm / 2 Speaker / Wireless / Remote Controller) Full HD 720p Native Resolution with 1080p Support, WiFi Enabled | 150-Inches (381 cm) Display | 240 ANSI | Screen Mirroring, YouTube | HDMI, AV, USB, Audio Out Connectivity Projector  (Blue).',
            image: 'projector.jfif',
            price: '1999 only'
        },
        '4': {
            title: 'Monitor',
            description: 'Lenovo 60.45 cm (23.8 inch) Full HD VA Panel 3-Side Near Edgeless with TUV Eye Care Monitor (D24-20/D24-40)  (Response Time: 4 ms, 75 Hz Refresh Rate)',
            image: 'monitor.webp',
            price: '9888 only'
        },
        '5': {
            title: 'Men Printed Round Neck Cotton Blend Black T-Shirt',
            description: 'Men Printed Round Neck Cotton Blend Black T-Shirt priced at ₹199 only.',
            image: 'cloth.webp',
            price: '₹199'
        },
       
    };

    if (productDetails[productId]) {
        const product = productDetails[productId];
        document.getElementById("modalProductTitle").textContent = product.title;
        document.getElementById("modalProductImage").src = product.image;
        document.getElementById("modalProductDescription").textContent = product.description;
        document.getElementById("modalProductPrice").textContent = product.price;
        document.getElementById("productModal").style.display = "block";
    } else {
        alert('Product not found.');
    }
}

function closeModal() {
    document.getElementById("productModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("productModal");
    if (event.target === modal) {
        closeModal();
    }
}
