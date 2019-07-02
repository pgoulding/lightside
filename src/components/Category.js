import React from 'react';
import './Category.scss';

const Category = ({title, changeView}) => {
    return (
            <button className='selectCategoryBtn' onClick={changeView}>
                <img src='' alt=''/>
                {title}
            </button>

    )
}

export default Category;