import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Button.scss';


const Button = ({ link, title, img }) => {

    return (
        <>
          <Link to={link}>
            <button className='selectCategoryBtn'>
              <span className='selectCategoryBtnText'>{title}</span>
              <img className='icon' src={img} alt='' />
            </button>
          </Link>

        </>
      )
}

export default Button;