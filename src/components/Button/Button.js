import React from 'react';

import s from './Button.module.css';

const Button = ({ onLoadMore }) => {
  return (
    <button onClick={onLoadMore} className={s.Button} type="button">
      Load more
    </button>
  );
};

export default Button;
