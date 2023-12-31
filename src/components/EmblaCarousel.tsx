import React, { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Carousel, Embla } from '@mantine/carousel';
import { Progress, rem } from '@mantine/core'
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import { motion } from 'framer-motion'
import { projectCardsAnimation } from '@/utils/animations';




type EmblaCarouselProps = {
    arr
};

const EmblaCarousel:React.FC<EmblaCarouselProps> = ({arr}) => {

    const [scrollProgress, setScrollProgress] = useState(0)
    const [embla, setEmbla] = useState<Embla | null>(null)

    const handleScroll = useCallback(() => {
        if(!embla) return;
        const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
        setScrollProgress(progress*100)
    },[embla, setScrollProgress])

      const slides = arr.map((url) => {
        return <Carousel.Slide key={url}>
            <Image src={url} alt='image' width={960} height={600} />
        </Carousel.Slide>
      })

    useEffect(() => {
        if(embla){
            embla.on("scroll", handleScroll);
            handleScroll();
        }
    },[embla])
    
    return (
        <motion.div variants={projectCardsAnimation} initial='initial' animate='animate'>
        <Carousel maw={960} controlSize={40} nextControlIcon={<IconArrowRight size={16} />}
      previousControlIcon={<IconArrowLeft size={16} />} getEmblaApi={setEmbla} styles={{
        control: {
          '&[data-inactive]': {
            opacity: 0,
            cursor: 'default',
          },
        },
      }}>
            {slides}
        </Carousel>
        <Progress value={scrollProgress} size="sm" mt="lg" mx="auto" styles={{ bar: { transitionDuration: '0ms', backgroundColor:'gray' }, root: { maxWidth: rem(320) } }}>
        
        </Progress>
        </motion.div>
        );
}
export default EmblaCarousel;