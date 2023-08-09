import React, { useCallback, useEffect, useRef, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { Carousel, Embla } from '@mantine/carousel';
import { Progress, rem } from '@mantine/core'
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';



type EmblaCarouselProps = {
    arr
};

const EmblaCarousel:React.FC<EmblaCarouselProps> = ({arr}) => {

    const [scrollProgress, setScrollProgress] = useState(0)
    const [embla, setEmbla] = useState<Embla | null>(null)

    const autoplay = useRef(Autoplay({ delay: 2000 }));

    const handleScroll = useCallback(() => {
        if(!embla) return;
        const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
        setScrollProgress(progress*100)
    },[embla, setScrollProgress])

      const slides = arr.map((url) => {
        return <Carousel.Slide key={url}>
            <Image src={url} alt='image' width={750} height={400} />
        </Carousel.Slide>
      })

    useEffect(() => {
        if(embla){
            embla.on("scroll", handleScroll);
            handleScroll();
        }
    },[embla])
    
    return (
        <div>
        <Carousel maw={750} controlSize={40} nextControlIcon={<IconArrowRight size={16} />}
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
        <Progress value={scrollProgress} size="sm" mt="lg" mx="auto" styles={{ bar: { transitionDuration: '0ms' }, root: { maxWidth: rem(320) } }}>
        
        </Progress>
        </div>
        );
}
export default EmblaCarousel;