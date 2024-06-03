'use client';
import React from 'react';

const Item = ({name, quantity, category}) => {
    return(
        <li>
            <div style={{ fontWeight: 'bold',fontSize: '25px'}}>{name}</div>
            <div> Buy {quantity} in {category}</div>

        </li>
    );

};
export default Item;