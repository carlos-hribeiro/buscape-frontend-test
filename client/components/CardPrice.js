import React from 'react';


export default ({product, addCart}) => (
    <div className="card_price">
        <div className="price">
            <span>
                <span className="installments">{product.price.installments}x R$ </span>
                <span className="installments_value">{product.price.installmentValue}</span>
            </span>
            <span className="full_price_text">ou <span className="full_price">R$ {product.price.value}</span> &agrave; vista</span>
        </div>
        <button className="primary" onClick={(evt) => addCart(product)}>Adicionar ao carrinho</button>
    </div>
)