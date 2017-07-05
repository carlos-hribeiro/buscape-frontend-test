import React from 'react';

import Image from 'components/Image';

export default ({image}) => (
    <div className="card_main_image">
        <Image src={image} />
    </div>
)