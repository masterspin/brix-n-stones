import { db } from '../firebase' 
import { query, collection, getDocs} from 'firebase/firestore'

export async function getProjects(){

    let itemsArr = []

    const querySnapshot = await getDocs(collection(db, "projects"));
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        itemsArr.push({loc: doc.data().project_id, lastmod: new Date().toISOString().split('T')[0]});
    });

    return itemsArr;
}