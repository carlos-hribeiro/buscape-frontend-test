import React  from 'react';

import Card from 'components/Card'


export default ({items, addCart, selectImage}) => (
     <div className="content">
        {items.map((it, idx) => <Card product={it.product} key={idx} addCart={addCart} selectImage={selectImage} />)}

        
    </div>
)