import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";

type titleSkeletonProps = {
    lower
};

const titleSkeleton:React.FC<titleSkeletonProps> = ({lower}) => {
    
    return(
        <div className='w-80 pb-12'>
        <SkeletonTheme baseColor="#525252" highlightColor="#8f8f8f">
            <h1 className="text-center px-4 text-4xl md:text-5xl font-extrabold leading-none tracking-tight text-gray-900 lg:text-6xl"><Skeleton></Skeleton></h1>
            {
                lower && <h1 className="mx-auto text-center px-4 text-2xl md:text-3xl font-semibold leading-none tracking-tight text-gray-900 lg:text-4xl"><Skeleton></Skeleton></h1>
            }
        </SkeletonTheme> 
        </div>   
    )
}
export default titleSkeleton;