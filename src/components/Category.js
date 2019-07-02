import React from 'react';
import './Category.scss';

const Category = ({title, changeView}) => {
    return (
        <div>
            <button className='selectCategoryBtn' onClick={changeView}>
                {title}

            </button>
        </div>
    )
}

export default Category;