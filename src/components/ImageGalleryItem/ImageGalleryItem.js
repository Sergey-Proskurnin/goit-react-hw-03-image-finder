import React from 'react';

import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = () => {
    return (
        <li key = '1' className={s.ImageGalleryItem}>
  <img src="" alt="" className={s.ImageGalleryItemImage} />
</li>
    )
}

export default ImageGalleryItem