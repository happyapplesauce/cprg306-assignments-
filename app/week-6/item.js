import React from 'react';

const Item = ({ item }) => (
    <div className="border p-2 mb-2 rounded bg-white text-black">
      <h3 className="font-bold">{item.name}</h3>
      <p>Quantity: {item.quantity}</p>
      <p>Category: {item.category}</p>
    </div>
  );

  export default Item;