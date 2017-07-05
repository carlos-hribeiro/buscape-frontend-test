import React from 'react';

import Thumb from 'components/Thumb';

export default ({images, selectedImage, selectImage}) => (
    <div className="thumb_list">
        {images.map((img, idx) => <Thumb url={img} key={idx} selected={idx == selectedImage} selectImage={() => selectImage(idx)}/>)}
    </div>
)