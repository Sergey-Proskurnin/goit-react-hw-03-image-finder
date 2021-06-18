import React from 'react';
import { Component } from 'react';

import s from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        this.props.onCloseModal(e);
      }
    });
  }

  render() {
    return (
      <div onClick={this.props.onCloseModal} className={s.Overlay}>
        <div className={s.Modal}>
          <img src={this.props.modalImg} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
