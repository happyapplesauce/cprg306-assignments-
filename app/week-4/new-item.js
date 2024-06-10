'use client';

import { useState } from 'react';

export default function NewItem(){
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');

    const handleSubmit = (event) => {
        event.preventDefault();
        const item = {name, quantity, category};
        console.log(item);
        alert('Name: ${name}, Quantity: ${quantity}, Category: ${category}');
        setName('');
        setQuantity(1);
        setCategory('produce');
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
        <form onSubmit={handleSubmit} className="p-4 bg-blue-700 rounded-md w-1/3">
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-white">Item Name</label>
                <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded bg-white text-black"/>
            </div>
            
            <div className="flex mb-4 space-x-4">
                <div className="w-1/4 mr-3">
                <label className="block text-sm font-bold mb-2 text-white">Quantity</label>
                <input 
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min="1"
                max="99"
                required
                className="w-full px-3 py-2 border rounded bg-white text-black"/>
            </div>

            <div className="w-1/3 ml-2">
                <label className="block text-sm font-bold mb-2 text-white">Category</label>
                <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded bg-white text-black" >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen">Frozen</option>
                    <option value="canned">Canned Goods</option>
                    <option value="dry">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                    </select>
            </div>
            </div>
        <button type= "submit" className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-2xl">
            +
        </button>
        </form>
        </div>
    );
}