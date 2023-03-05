import React, { Component } from 'react';
import styles from '../styles.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  render() {
    const { onClose, children } = this.props;
    return (
      <div className={styles.modalBackdrop} onClick={onClose}>
        <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
          <button className={styles.modalCloseBtn} onClick={onClose}>
            ×
          </button>
          {children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
