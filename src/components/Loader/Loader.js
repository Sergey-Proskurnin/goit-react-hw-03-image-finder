import React from 'react';
import Loader from 'react-loader-spinner';

const LoaderOn = () => {
  return (
    <Loader
      type="Audio"
      color="#00BFFF"
      height={80}
      width={80}
      timeout={3000}
    />
  );
};

export default LoaderOn;
