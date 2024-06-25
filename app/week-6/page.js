'use client';
import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

const Page = () =>
    {
        const [items, setItems] = useState(itemsData);

        const handleAddItem = (newItem) => {
            setItems([...items, newItem]);
        };
        return(
            <div style={{ padding: '10px'}}>
            <h1 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom:'20px'}}>Shopping List</h1>
            <NewItem onAddItem= {handleAddItem} />
            <ItemList items={items} />
            </div>
        );

    };

    export default Page;