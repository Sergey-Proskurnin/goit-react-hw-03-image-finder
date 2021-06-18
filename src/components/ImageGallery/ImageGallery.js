import React from 'react';

import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <ul className={s.ImageGallery} id="imagesList">
      <ImageGalleryItem onOpenModal={onOpenModal} images={images} />
    </ul>
  );
};

export default ImageGallery;
