import React from 'react';

import BestPrice from 'components/BestPrice'
import CardPrice from 'components/CardPrice'

export default ({product, addCart}) => (
    <div className="card_detail">
        <span className="title">{product.name}
            <svg viewBox="0 0 21 20" width="15" height="15" aria-labelledby="title">
                <title id="title">Ícone de Favorito</title>
                <path d="M6.14 1C3.336 1 1.053 3.46 1.032 6.492c-.04.473-.13 3.225 2.993 5.734 2.936 2.36 5.674 5.26 5.7 5.29l.673.713.67-.715c.03-.03 2.763-2.93 5.7-5.29 3.122-2.508 3.033-5.26 2.99-5.733C19.74 3.46 17.456 1 14.652 1c-1.763 0-3.324.956-4.254 2.41C9.466 1.957 7.906 1 6.14 1" strokeWidth="2" stroke="#FEC53A" fill="none" >
                </path>
            </svg>
        </span>
        <hr />
        <BestPrice />
        <CardPrice product={product} addCart={addCart} />
    </div>
)