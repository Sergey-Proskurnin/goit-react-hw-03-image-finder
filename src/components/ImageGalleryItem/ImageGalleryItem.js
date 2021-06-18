import React from 'react';

import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images, onOpenModal }) => {
  return images.map(({ id, webformatURL, user, largeImageURL }) => (
    <li key={id} onClick={onOpenModal} className={s.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={user}
        data-source={largeImageURL}
        className={s.ImageGalleryItemImage}
      />
    </li>
  ));
};

export default ImageGalleryItem;
