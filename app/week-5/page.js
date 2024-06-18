import React from 'react';
import ItemList from './item-list';

const Page = () =>
    {
        return(
            <div style={{ padding: '10px'}}>
            <h1 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom:'20px'}}>Shopping List</h1>
            <ItemList />
            </div>
        );

    };

    export default Page;