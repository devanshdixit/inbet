import { firebase, database } from './index'
import { collection, doc, getDocs,updateDoc, query, setDoc, where } from "firebase/firestore";
import { async } from '@firebase/util';


const usersRef = collection(database, "users");

// export function updateUser(uid, data) {
//   return firestore.collection('users').doc(uid).update(data)
// }

export async function checkUser(uid) {
    const q = query(usersRef, where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    return querySnapshot.empty;
}

export async function updateUser(uid,data) {
    const userRef = doc(database, "users", uid);
    await updateDoc(userRef,data);
}

export async function createUser(uid, data) {
    return await setDoc(doc(database, "users", uid), data, { merge: true });
}