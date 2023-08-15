import { getDocs, collection } from "firebase/firestore";
import { db,storage } from './firebase'
import { ref, listAll } from 'firebase/storage'

export default async function sitemap(){

    const querySnapshot = await getDocs(collection(db, "projects"));
    var posts = []
    querySnapshot.forEach((doc) => {
        posts.push({
            url: process.env.SITE_URL + '/projects/' + doc.data().type.replaceAll('&', '&amp;').replaceAll(' ', '-') + '/' + doc.data().id.replaceAll(' ', '-').replaceAll('&', '&amp;') + '/',
            lastModified: new Date()
        })
    });


    return [
        {
            url: process.env.SITE_URL + '/',
            lastModified: new Date()
        },
        {
            url: process.env.SITE_URL + '/projects/',
            lastModified: new Date()
        },
        {
            url: process.env.SITE_URL + '/about/',
            lastModified: new Date()
        },
        {
            url: process.env.SITE_URL + '/contact/',
            lastModified: new Date()
        },
        {
            url: process.env.SITE_URL + '/thankyou/',
            lastModified: new Date()
        },
        ...posts,
    ]
}