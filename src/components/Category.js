import React from 'react';

const Category = ({title, changeView}) => {
    return (
        <div>
            <button className='selectCategoryBtn' onClick={changeView}>
                {title}
                
            </button>
        </div>
    )
}

export default Category