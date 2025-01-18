import React, { useState, useEffect } from 'react';
import './ShopPage.css';

const ShopPage = () => {
  const initialProducts = [
    { id: 1, name: 'Face Oil', price: 10, image: './assets/product1.png', description: 'Un soin nourrissant pour une peau radieuse et hydratée. Ce sérum léger pénètre rapidement pour offrir une hydratation en profondeur et un éclat naturel.' },
    { id: 2, name: 'Day Cream', price: 20, image: './assets/product2.png', description: 'Crème légère et hydratante pour une utilisation quotidienne. Elle protège votre peau contre les agressions extérieures tout en offrant une hydratation longue durée.' },
    { id: 3, name: 'Face Pack', price: 30, image: './assets/produit3.png', description: 'Un masque revitalisant pour un teint éclatant. Formulé pour purger les impuretés et redonner à votre peau son éclat naturel.' },
    { id: 4, name: 'Berry Refined Scrub', price: 40, image: './assets/produit4.png', description: 'Gommage raffiné aux baies pour une peau douce et lisse. Ses particules naturelles exfolient en douceur tout en laissant une fragrance agréable.' },
    { id: 5, name: 'Day Cream', price: 50, image: './assets/produit5.png', description: 'Crème hydratante idéale pour le jour. Enrichie en ingrédients nourrissants pour maintenir l\'hydratation et protéger votre peau tout au long de la journée.' },
    { id: 6, name: 'Brighten Cream', price: 60, image: './assets/produit6.png', description: 'Crème éclaircissante pour un teint uniforme et radieux. Réduit les imperfections et améliore l\'éclat de votre peau pour un look lumineux et frais.' },
  ];

  const [products] = useState(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBuyClick = () => {
    alert('Success! Product has been bought.');
    setSelectedProduct(null); // Retourne à la liste des produits
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setSelectedProduct(null);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="shop-page">
      <h1>Our Products</h1>
      {selectedProduct === null ? (
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-item" onClick={() => handleProductClick(product)}>
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="product-details">
          <img src={selectedProduct.image} alt={selectedProduct.name} className="product-details-image" />
          <h3>{selectedProduct.name}</h3>
          <p className="product-details-description">{selectedProduct.description}</p>
          <button className="buy-button" onClick={handleBuyClick}>Buy Now</button>
        </div>
      )}
    </div>
  );
};

export default ShopPage;
