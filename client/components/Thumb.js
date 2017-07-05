import React from 'react';
import Image from 'components/Image'

export default ({url, selected, selectImage}) => (
    <div className={`thumb_item ${selected ? 'thumb_selected' : ''}`} onClick={() => selectImage()}>
        <Image src={url} />
    </div>
)