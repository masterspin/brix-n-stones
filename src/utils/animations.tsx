import { easeInOut } from "framer-motion";

export const slideFromLeft = {
    initial:{
        x: -100,
        opacity: 0,
    },
    animate:{
        x:0,
        opacity: 1,
        transition:{
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 0.35,
        },
    },   
};

export const slideFromRight = {
    initial:{
        x: 100,
        opacity: 0,
    },
    animate:{
        x:0,
        opacity: 1,
        transition:{
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 0.45,
        },
    },   
};

export const formAnimation = {
    initial:{
        y: 100,
        opacity: 0,
        scale: 0.6,
    },
    animate:{
        y:0,
        opacity: 1,
        scale: 1,
        transition:{
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 0.65,
        },
    },   
};

export const navAnimation = {
    hidden:{
        opacity: 0,
    },
    show:{
        opacity: 1,
        transition:{
            delayChildren: 4.6,
            staggerChildren: 0.3,
            ease: 'easeInOut',

        }
    }
};

export const navItem = {
    hidden:{
        opacity: 0,
        y: '-20px',
    },
    show:{
        opacity: 1,
        y:0,
        transition:{
            ease: 'easeInOut',

        }
    }
};

export const imageFromTop = {
    initial:{
        x: -50,
        opacity: 0,
    },
    animate:{
        x:0,
        opacity: 1,
        transition:{
            delay: 5.8,
            ease: 'easeInOut',
            duration: 0.8,
        },
    },   
};

export const typingContainer = {
    hidden:{
        opacity: 0,
    },
    show:{
        opacity: 1,
        transition:{
            staggerChildren: 0.1,
            ease: 'easeInOut',

        }
    }
};
export const typingText = {
    hidden:{
        opacity: 0,
        y: -20,
    },
    show:{
        opacity: 1,
        y: 0,
        transition:{
            ease: 'easeInOut',

        }
    }
};

export const explainProduct = {
    hidden:{
        opacity: 0,
        y: -20,
    },
    show:{
        opacity: 1,
        y: 0,
        transition:{
            delay: 2.8,
            ease: 'easeInOut',

        }
    }
};

export const buttonProduct = {
    hidden:{
        opacity: 0,
        scaleX: 0,
    },
    show:{
        opacity: 1,
        scaleX: 1,
        transition:{
            delay: 2.3,
            ease: 'easeInOut',

        }
    }
};

export const imgProduct1 = {
    hidden:{
        opacity: 0,
        y: 400,
    },
    show:{
        opacity: 1,
        y:0,
        transition:{
            delay: 3.3,
            duration: 0.8,
            ease: 'easeInOut',

        }
    }
};

export const imgProduct2 = {
    hidden:{
        opacity: 0,
        y: 400,
        x: 50,
    },
    show:{
        opacity: 1,
        y: 0,
        x: 0,
        transition:{
            delay: 3.7,
            duration: 0.8,
            ease: 'easeInOut',

        }
    }
};

export const previewAnimation = {
    initial:{
        y: 30,
        opacity: 0,
        scale: 0.9,
    },
    animate:{
        y: 30,
        opacity: 1,
        scale: 1,
        transition:{
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 1,
        }
    }
}