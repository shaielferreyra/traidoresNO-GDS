import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, X } from 'lucide-react';
import './Tienda.css';

// Importar imágenes de productos
import remeraLogo from '../assets/images/products/remera-logo.jpg';
import hoodieSuenos from '../assets/images/products/hoodie-suenos.jpg';
import cdPresagio from '../assets/images/products/cd-presagio.jpg';
import viniloSuenos from '../assets/images/products/vinilo-suenos.jpg';
import gorra from '../assets/images/products/gorra.jpg';
import posterTour from '../assets/images/products/poster-tour.jpg';

const Tienda = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Remera Logo Clásico',
      price: 8500,
      image: remeraLogo,
      category: 'Remeras',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 2,
      name: 'Hoodie Sueños de Desvelos',
      price: 15000,
      image: hoodieSuenos,
      category: 'Buzos',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 3,
      name: 'CD Presagio',
      price: 3500,
      image: cdPresagio,
      category: 'Música'
    },
    {
      id: 4,
      name: 'Vinilo Sueños de Desvelos',
      price: 12000,
      image: viniloSuenos,
      category: 'Música'
    },
    {
      id: 5,
      name: 'Gorra Bordada',
      price: 6000,
      image: gorra,
      category: 'Accesorios'
    },
    {
      id: 6,
      name: 'Poster Tour 2025',
      price: 2500,
      image: posterTour,
      category: 'Accesorios'
    }
  ];

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, change) => {
    setCart(cart.map(item => {
      if (item.id === productId) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <section id="tienda" className="tienda">
      <h2 className="section-title">TIENDA OFICIAL</h2>
      
      <button className="cart-button" onClick={() => setShowCart(!showCart)}>
        <ShoppingCart size={24} />
        {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
      </button>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <span className="product-category">{product.category}</span>
            </div>
            
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-price">${product.price.toLocaleString('es-AR')}</p>
              
              {product.sizes && (
                <div className="product-sizes">
                  {product.sizes.map(size => (
                    <span key={size} className="size-tag">{size}</span>
                  ))}
                </div>
              )}
              
              <button 
                className="btn-add-cart"
                onClick={() => addToCart(product)}
              >
                <ShoppingCart size={18} /> AGREGAR AL CARRITO
              </button>
            </div>
          </div>
        ))}
      </div>

      {showCart && (
        <div className="cart-modal" onClick={() => setShowCart(false)}>
          <div className="cart-content" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <h3>CARRITO DE COMPRAS</h3>
              <button onClick={() => setShowCart(false)}>
                <X size={24} />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="cart-empty">
                <ShoppingCart size={48} />
                <p>Tu carrito está vacío</p>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                      <img src={item.image} alt={item.name} />
                      <div className="cart-item-info">
                        <h4>{item.name}</h4>
                        <p>${item.price.toLocaleString('es-AR')}</p>
                      </div>
                      <div className="cart-item-controls">
                        <button onClick={() => updateQuantity(item.id, -1)}>
                          <Minus size={16} />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)}>
                          <Plus size={16} />
                        </button>
                      </div>
                      <button 
                        className="btn-remove"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <X size={20} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="cart-footer">
                  <div className="cart-total">
                    <span>TOTAL:</span>
                    <span className="total-price">
                      ${getTotalPrice().toLocaleString('es-AR')}
                    </span>
                  </div>
                  <button className="btn-checkout">
                    FINALIZAR COMPRA
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Tienda;