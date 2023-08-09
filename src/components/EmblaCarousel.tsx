import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import leftChev from '@/../public/images/leftchev.png'
import rightChev from '@/../public/images/rightchev.png'
import Autoplay from 'embla-carousel-autoplay'

type EmblaCarouselProps = {
    arr
};

const EmblaCarousel:React.FC<EmblaCarouselProps> = ({arr}) => {

    const autoplayOptions = {
        delay: 3000,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
    }

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay(autoplayOptions)])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])
    
    return(
        <>
        <div className="max-lg:hidden embla" ref={emblaRef}>
        <div className="embla__container px-8">
            {arr?.map((item, i)=>
            <>
                <div className='embla__slide mx-16 '><img src={item} /></div>
            </>
            )}
        </div>
        {(arr) &&
        <div className='mt-12'>
            <div>
                <button className="embla__prev mx-auto outline-none" onClick={scrollPrev}>
                    <img src={leftChev.src} className='w-10'></img>
                </button>
                <button className="embla__next outline-none" onClick={scrollNext}>
                <img src={rightChev.src} className='w-10'></img>
                </button>
            </div>
        </div>
        }
        </div>
        <div className="lg:hidden embla" ref={emblaRef}>
        <div className="embla__container">
            {arr?.map((item, i)=>
            <>
                <div className='embla__slide_smmd '><img src={item} /></div>
            </>
            )}
        </div>
        </div>
        </>
        
        )
}
export default EmblaCarousel;