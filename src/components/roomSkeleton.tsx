import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";

type cardSkeletonProps = {
    cards
};

const cardSkeleton:React.FC<cardSkeletonProps> = ({cards}) => {
    
    return(
        Array(cards).fill(0).map((_, i) =>
        <div key={i} className='w-60'>
        <SkeletonTheme baseColor="#525252" highlightColor="#8f8f8f">
            <Skeleton className="w-full rounded overflow-hidden shadow-md py-28" />
        </SkeletonTheme> 
        </div>  
        )   
    )
}
export default cardSkeleton;