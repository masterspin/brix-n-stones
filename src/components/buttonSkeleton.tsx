import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";

type buttonSkeletonProps = {
};

const buttonSkeleton:React.FC<buttonSkeletonProps> = () => {
    
    return(
        <div className='w-80 px-8'>
        <SkeletonTheme baseColor="#525252" highlightColor="#8f8f8f">
            <Skeleton borderRadius={20} height={36}></Skeleton>
        </SkeletonTheme> 
        </div>   
    )
}
export default buttonSkeleton;