import React from 'react';

export default ({src}) => (
    <img src={src} onError={(el) => el.target.src='images/img_erro.jpg'} />
)