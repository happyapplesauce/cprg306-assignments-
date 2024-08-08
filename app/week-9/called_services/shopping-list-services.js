import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId){
    const itemsCollection = collection(db, 'users', userId, 'items');
    const itemsSnapshot = await getDocs(query(itemsCollection));
    const itemsList = itemsSnapshot.docs.mao(doc => ({ id: doc.id, ...doc.data()}));
    return itemsList;
}

export async function addItems(userId, item){
    const itemsCollection = collection(db, 'users', userId, 'items');
    const documentReference = await addDoc(itemsCollection, item);
    return documentReference.id;
}
