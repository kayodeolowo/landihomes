import {collection, getFirestore} from 'firebase/firestore'
import {app} from './firebase'

export const firestore = getFirestore(app);

//Reserve collection
export const reservecollection = collection
(firestore, "reserve")