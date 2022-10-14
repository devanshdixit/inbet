import { firebase, database } from './index'
import { collection, doc, getDocs,updateDoc, query, setDoc, where, getDoc, addDoc } from "firebase/firestore";
import { async } from '@firebase/util';


const usersRef = collection(database, "users");

// export function updateUser(uid, data) {
//   return firestore.collection('users').doc(uid).update(data)
// }

export async function checkUser(uid) {
    const q = query(usersRef, where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    const l = querySnapshot.empty;
    return l;
}

export async function getUser(uid) {
    const docRef = doc(database, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const data = docSnap.data();
        console.log("Document data:", data);
        return data;
    }   else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        return null;
    }
}

export async function setRedeem(uid,amount){
    return await addDoc(collection(database, 'redeem'),{
        uid: uid,
        amount: amount
    });
}

export async function updateUser(uid,data) {
    const userRef = doc(database, "users", uid);
    await updateDoc(userRef,data);
}

export async function createUser(uid, data) {
    return await setDoc(doc(database, "users", uid), data, { merge: true });
}