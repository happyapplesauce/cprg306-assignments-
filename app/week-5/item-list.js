'use client';

import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  // Function to sort items based on sortBy state
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="p-4 text-white bg-black ">
      <div className="mb-4">
        <button
          onClick={() => setSortBy('name')}
          className={`mr-2 px-4 py-2 rounded ${
            sortBy === 'name' ? 'bg-orange-500 text-white' : 'bg-orange-300'
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`mr-2 px-4 py-2 rounded ${
            sortBy === 'category' ? 'bg-orange-500 text-white' : 'bg-orange-300'
          }`}
        >
          Sort by Category
        </button>
      </div>
      <div>
        {sortedItems.map((item) => (
            <Item key={item.id} item={item}/>
        ))}
      </div>
    </div>
  );
}
