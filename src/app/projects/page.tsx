'use client';
import { useState, useEffect, useReducer } from "react";
import { QuerySnapshot, collection, getDoc, onSnapshot, query } from 'firebase/firestore'
import Header from "@/components/header";
import CardSkeleton from "@/components/cardSkeleton";
import { projectCardsAnimation } from "@/utils/animations";
import { motion } from 'framer-motion'
import { db, storage } from '../firebase'
import { ref, listAll, getDownloadURL } from 'firebase/storage'
import Link from 'next/link'

// async function getProjects(){
//     const querySnapshot = await getDocs(collection(db, "projects"));
//     querySnapshot.forEach((doc) => {
//       // doc.data() is never undefined for query doc snapshots
//     });

//     return querySnapshot;
// }

export default function Home() {

  // const[projects, setProjects] = useState([] as any);
  // const [isLoading, setLoading] = useState(true);
  // const [projectids, setProjectids] = useState([] as any)

  

  // useEffect(() => {
  //   async function getProjects(){
  //     const querySnapshot = await getDocs(collection(db, "projects"));

  //     var arr:any[] = []


  //     querySnapshot.forEach((doc) => {
  //       var tempSlides:any[] = []
  //       const uploadRef = ref(storage, `${doc.data()['project_id']}.${doc.data()['name']}/COVER`);
  //       listAll(uploadRef).then((response) => {
  //           response.items.forEach((item) => {
  //               getDownloadURL(item).then((url) =>{
  //                   tempSlides.push(url);
  //               });
  //           });
  //       });
  //       let index = Math.floor((Math.random() * tempSlides.length));
  //       arr.push({name: doc.data()['name'], project_id: doc.data()['project_id'], image: tempSlides});

  //     });
  //     setProjects(arr);
  //     setLoading(false)

  //   }
  //   getProjects()
  // },[])

  const [items, setItems] = useState([] as any)
  const [urls, setUrls] = useState('')
  const [isLoading, setLoading] = useState(true);
  const [temper, setTemper] = useState([] as any)

  useEffect(() =>{
    const q = query(collection(db, 'projects'))
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let itemsArr = []
      QuerySnapshot.forEach((doc) => {
        let urlsArr = []
        const uploadRef = ref(storage, `${doc.data()['project_id']}.${doc.data()['name']}/COVER/`);
        listAll(uploadRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) =>{
                   setUrls(url)
                   urlsArr.push(url)
                   setTemper(urlsArr)
                });
            });
            itemsArr.push({...doc.data(), url:urlsArr})
        });
      })
      setItems(itemsArr)
      setLoading(false)
      return () => unsubscribe();
    });
  },[])


  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center bg-center bg-cover">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pt-12 pb-12 px-8 md:px-auto"> 
      {isLoading && <CardSkeleton cards={5} />}
      {
        items.map((proj) =>
          <Link href={'/projects/' + proj.project_id} key={proj.project_id}>
          <motion.div variants={projectCardsAnimation} initial='initial' animate='animate' className="font-bold w-full text-black hover:text-orange-800 rounded overflow-hidden shadow-md py-28 mb-0" style={{backgroundImage: `url(${proj.url[Math.floor(Math.random() * proj.url.length)]})`, backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundColor:'transparent'}}>
            <div className="py-4 my-auto py-auto">
              <div className="bg-white text-center text-xl px-4">{proj.name}</div>
            </div>
        </motion.div>
        </Link>
        )
      }
      </div>
      </div>
    </div>
  )
}
