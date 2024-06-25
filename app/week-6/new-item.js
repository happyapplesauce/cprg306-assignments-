'use client';

import { useState } from 'react';

export default function NewItem(){
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newItem = {name, quantity, category};
        onAddItem(newItem);
        setName('');
        setQuantity(1);
        setCategory('produce');
    };

    return (
        <div style={{display:'flex', justifyContent: 'center', alignItems:'center', minHeight:'100vh'}}>
        <form onSubmit={handleSubmit} style={{ padding: '16px', backgroundColor: 'blue', borderRadius: '5px', width: '30%'}}>
            <div style={{marginBottom: '15px'}}>
                <label style= {{ display: 'block', fontSize: '14px', fontWeight:'bold', color: 'white', marginBottom: '8px'}}>Item Name</label>
                <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{ width: '100%', padding: '8px', border:'1px solid black', borderRadius: '5px', backgroundColor: 'white', color: 'black' }}/>
            </div>
            
            <div style= {{display: 'flex', marginBottom: '16px', gap:'5px'}}>
                <div style={{ flex: '1'}}>
                <label style={{display: 'block', fontSize: '14px', fontWeight: 'bold', marginBottom:'8px', color:'white'}}>Quantity</label>
                <input 
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min="1"
                max="99"
                required
                style={{ width: '100%', padding:'8px', border: '1px solid black', borderRadius: '5px', backgroundColour:'white', color:'black' }}/>
            </div>

            <div style={{flex: '1'}}>
                <label style={{width: 'block', fontSize: '14px', fontWeight:'bold', marginBottom: '16px', color: 'white'}}>Category</label>
                <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                style= {{ width: '100%', padding:'8px', border: '1px solid black', backroundColour: 'white', color: 'black'}}>
                    <option value="category" disabled>Category</option>
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
        <button type= "submit" style={{width: '100%', backgroundColor: 'green', color: 'white', padding: '8px 16px', borderRadius: '4px', fontSize: '20px', cursor:'pointer'}}>
            +
        </button>
        </form>
        </div>
    );
}