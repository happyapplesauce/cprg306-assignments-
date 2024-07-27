"use client";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
 import { useEffect, useState} from 'react';
 import { getItems, addItem} from '../services/shopping-list-services';

// Use the useUserAuth hook to get the user object and the login and logout functions
const Page = () => {
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
const [items, setItems] = useState([]);
const[newItem, setNewItem] = useState({ name: '', quantity: 1, category: ''});

// Sign in to Firebase with GitHub authentication
const handleLogin = async () => {
await gitHubSignIn();
};
 
// Sign out of Firebase
const handleLogout = async () => {
await firebaseSignOut();
};

useEffect(() => {
  const loadItems = async () => {
    if (user) {
          const itemsList = await getItems(user.uid);
          setItems(itemsList);
        }
      };

      loadItems();
    }, [user]);
  
const handleAddItem = async () => {
  if (user) {
    const id = await addItem(user.uid, newItem);
    setItems([...items, {id, ...newItem}]);
    setNewItem({name:'', quantity: 1, category: '' });
  }
};

const handleInputChange = (e) => {
  const {name, value } = e.target;
  setNewItem({ ...newItem, [name]: value});
};


return (
  <div>
    {user ? (
      <div>
        <p>Welcome, {user.displayName} ({user.email})</p>
        <button onClick={handleLogout}>Sign out</button>
        <h1>Shopping List</h1>
        <ul>
          {items.map(item => (
            <li key = {item.id}>{item.name} - {item.quantity} - {item.category}</li>
          ))}
        </ul>
      <div>
<input
type="text"
name= "name"
value = {newItem.name}
onChange={handleInputChange}
placeholder = "Item Name"
/>
<input
type="number"
name= "quantity"
value = {newItem.quantity}
onChange={handleInputChange}
placeholder = "Quantity"
/>
<input
type="text"
name= "category"
value = {newItem.category}
onChange={handleInputChange}
placeholder = "Category"
/>
<button onClick={handleAddItem}>Add Item</button>
</div>
</div>
        ) : (
          <button onClick = {handleLogin}> Login with Github</button>

        )}
        </div>
);
};

export default Page;