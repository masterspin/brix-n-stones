'use client';
import { useState, useEffect } from "react";
import Header from "@/components/header";
import { db, storage } from '../firebase'
import { collection, getDocs } from "firebase/firestore";
import test from '@/../public/images/homepage/image1.jpeg'
import CardSkeleton from "@/components/cardSkeleton";
import { projectCardsAnimation } from "@/utils/animations";
import { motion } from 'framer-motion'
import { ref, listAll, getDownloadURL } from 'firebase/storage';


async function getProjects(){
    const querySnapshot = await getDocs(collection(db, "projects"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });

    return querySnapshot;
}

export default function Home() {

  const[projects, setProjects] = useState([] as any);
  const [isLoading, setLoading] = useState(true);
  // const [projectids, setProjectids] = useState([] as any)

  

  useEffect(() => {
    async function getProjects(){
      const querySnapshot = await getDocs(collection(db, "projects"));

      var arr:any[] = []


      querySnapshot.forEach((doc) => {
        var tempSlides:any[] = []
        const uploadRef = ref(storage, `${doc.data()['project_id']}.${doc.data()['name']}/COVER`);
        listAll(uploadRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) =>{
                    tempSlides.push(url);
                });
            });
        });
        arr.push({name: doc.data()['name'], project_id: doc.data()['project_id'], images: tempSlides});

      });
      setProjects(arr);
      setLoading(false)

    }
    getProjects()
  },[])

  console.log(projects)

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center bg-center bg-cover">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pt-12 pb-12 px-8 md:px-auto"> 
      {isLoading && <CardSkeleton cards={5} />}
      {isLoading && <p className="text-white"></p>}
      {
        projects.map((proj) =>
 
          <motion.div variants={projectCardsAnimation} initial='initial' animate='animate' className="w-full rounded overflow-hidden shadow-md py-28 mb-0" style={{backgroundImage: `url(${test.src})`, backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundBlendMode:'luminosity'}}>
            <div className="py-4 my-auto py-auto">
              <div className="text-center text-white font-bold text-xl px-4">{proj.name}</div>
            </div>
        </motion.div>
        )
      }
      </div>
      </div>
    </div>
  )
}
