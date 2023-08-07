'use client';
import { useState, useEffect } from "react";
import Header from "@/components/header";
import Projects from "@/components/projects";
import { db, storageRef } from '../firebase'
import { collection, getDocs, onSnapshot, QuerySnapshot, query } from "firebase/firestore";

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
  const [projectids, setProjectids] = useState([] as any)

  useEffect(() => {
    async function getProjects(){
      const querySnapshot = await getDocs(collection(db, "projects"));

      var nameArr:any[] = []
      var idArr:any[] = []

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        nameArr.push(doc.data()['name']);
        idArr.push(doc.data()['project_id']);

        setProjects(nameArr);
        setProjectids(idArr);

      });

    }
    getProjects()
  },[])

  console.log(projects)
  console.log(projectids)

  return (
    <div className="">
      <Header />
      <Projects />
    </div>
  )
}
