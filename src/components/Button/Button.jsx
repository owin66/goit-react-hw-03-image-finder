import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

const Button = ({ onClick }) => (
  <button type="button" className={styles.button} onClick={onClick}>
    Load more
  </button>
);
//ww
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
