import React from 'react';

import ThumbList from 'components/ThumbList'
import CardImage from 'components/CardImage'
import CardDetail from 'components/CardDetail'


export default ({product, addCart, selectImage}) => (
    <div className="card">
        <ThumbList images={product.images} selectedImage={product.selectedImage} selectImage={(imgIdx) => selectImage(product.id, imgIdx)} />
        <CardImage image={product.images[product.selectedImage]} />
        <CardDetail product={product} addCart={addCart} />
    </div>
)