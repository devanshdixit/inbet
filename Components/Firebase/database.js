import { firebase, database } from './index'
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";


const usersRef = collection(database, "users");

// export function updateUser(uid, data) {
//   return firestore.collection('users').doc(uid).update(data)
// }

export async function checkUser(uid) {
    const q = query(usersRef, where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    return querySnapshot.empty;
}

export async function createUser(uid, data) {
    return await setDoc(doc(database, "users", uid), data, { merge: true });
}