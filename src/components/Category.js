import React from 'react';
import './Category.scss';

const Category = ({title, changeView}) => {
    return (
        <section className='btnContainer'>
            <button className='selectCategoryBtn' onClick={changeView}>
                <img src='' alt=''/>
                {title}
            </button>
        </section>
    )
}

export default Category;