import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Button.scss';


const Button = (props) => {
    const {link, title, img, animateButtons} = props;

    return (
          <Link to={link}>
            <button className='selectCategoryBtn' onClick={() => animateButtons()}>
              <span className='selectCategoryBtnText'>{title}</span>
              <img className='icon' src={img} alt='' />
            </button>
          </Link>
      )
}

export default Button;