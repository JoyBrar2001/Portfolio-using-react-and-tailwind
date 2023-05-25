export const directionalFadeIn = (index, direction, delay, duration) => {
    return {
        hidden: {
            opacity: 0,
            x: direction=='left' ? -100: direction=='right'? 100: 0,
            y: direction=='up' ? -100: direction=='down'? 100: 0,
        },
        show: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: duration,
                delay: delay + index*0.2,
                ease: "easeInOut",
            },
        },
        
    }
};

export const fadeIn = (index) => {
    return {
        hidden: {
            opacity: 0,
            x: -100,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: index%2 == 0? 0 : 0.3,
                ease: "easeInOut",
            },
        },
    }
};