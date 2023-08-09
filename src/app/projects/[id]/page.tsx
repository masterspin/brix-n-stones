'use client';
import { useState, useEffect } from 'react'
import { db, storage } from '../../firebase'
import { query, onSnapshot, collection, where } from 'firebase/firestore'
import { ref, getDownloadURL, listAll } from 'firebase/storage'
import Header from '@/components/header'
import { projectCardsAnimation, buttonProduct } from '@/utils/animations';
import { motion } from 'framer-motion'
import Link from 'next/link'
import CardSkeleton from '@/components/cardSkeleton';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import arrow2 from '@/../public/images/arrow3.png'
import * as ROUTES from '@/constants/routes'
import loading from '@/../public/images/loading.gif'
import { stat } from 'fs';

export default function Page({ params }: { params: { id: string } }) {

    const [items, setItems] = useState({} as any)
    const [urls, setUrls] = useState([] as any)
    const [stateRooms, setStateRooms] = useState([] as any)
    const [tempRoom, setTempRoom] = useState({} as any)
    const [isLoading, setLoading] = useState(true);
    const [link, setLink] = useState('')
    const [temper, setTemper] = useState([] as any)
    // console.log(isLoading)
  
    useEffect(() =>{
      const q = query(collection(db, 'projects'), where("project_id", "==", params.id))
      const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
        QuerySnapshot.forEach((doc) => {
          let overallRooms = []
          const uploadRef = ref(storage, `${doc.data()['project_id']}.${doc.data()['name']}/`);
          listAll(uploadRef).then((response) => {
            for (let i = 0; i < response['prefixes'].length; ++i){
              let urlsArr = []
              let room = {}
              if((response['prefixes'][i]['_location']['path_']).substring((doc.data()['project_id'] + '.' + doc.data()['name'] + '/').length) != 'COVER'){
                room['name'] = (response['prefixes'][i]['_location']['path_']).substring((doc.data()['project_id'] + '.' + doc.data()['name'] + '/').length)
                const roomRef = ref(storage, `${doc.data()['project_id']}.${doc.data()['name']}/${room['name']}/`);
                console.log(room['name'])
                listAll(roomRef).then((roomResponse) => {
                    roomResponse.items.forEach((item) => {
                        getDownloadURL(item).then((url) =>{
                          setLink(url)
                          urlsArr.push(url)
                          setTemper(urlsArr)
                        });
                    });
                    room['urls'] = urlsArr
                    setTempRoom(room)
                });
                // console.log(room)
                overallRooms.push(room)
                setUrls(overallRooms)
              }
            }
            // setUrls(urlsArr)
            // console.log({...doc.data()})
            setStateRooms(overallRooms);
            setItems({...doc.data()})
            setLoading(false)
          });
        })
        return () => unsubscribe();
        // return isLoading;
      });
    },[])  

    // console.log(items)
    console.log(stateRooms)

    return (
        <div>
        <Header />
        <div className="flex flex-col items-center justify-center pb-16 pt-14 bg-center bg-cover">
        {isLoading && <SkeletonTheme baseColor="#525252" highlightColor="#8f8f8f"><h1 className="text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"><Skeleton /></h1></SkeletonTheme>}
            {  
                <div className='flex pb-4'>
                    <h1 className="text-center px-4 text-4xl md:text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{items.name}</h1>
                </div>
            }
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 pt-12 pb-12 px-8 md:px-auto">
            {isLoading && <CardSkeleton cards={3} />}
          {
            (stateRooms).map((proj) =>
              <Link href={'/projects/' + items.project_id + '/' + proj.name} key={proj.name}>
              <motion.div variants={projectCardsAnimation} initial='initial' animate='animate' className="font-bold w-full text-black hover:text-orange-800 rounded overflow-hidden shadow-md py-20 mb-0" style={{backgroundImage: `url(${proj.urls})`, backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundColor:'transparent'}}>
                <div className="py-4 my-auto py-auto">
                  <div className="bg-white text-center text-xl px-20">{proj.name}</div>
                </div>
            </motion.div>
            </Link>
            )
          }
            <form className='my-auto items-center mx-auto my-auto'>
                <motion.button variants={buttonProduct} initial='hidden' animate='show' formAction={ROUTES.PROJECTS} className="focus:outline-none border-transparent focus:border-transparent focus:ring-0 text-gray-900 font-medium text-base md:text-lg flex items-center gap-2 bg-white hover:bg-pink-100 py-2 px-5 rounded-2xl mt-6 hover:opacity-80 shadow-lg hover:shadow-2xl">
                    <img src={arrow2.src} width="20px"></img>
                    All Projects
                </motion.button>
            </form>
          </div>
          </div>
        </div> 
      )
  }