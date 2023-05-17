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