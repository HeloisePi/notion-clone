import { useState, useEffect } from "react";

export const useScrollTop = (threshold = 10) => {
    const[scrolled, setSrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > threshold){
                setSrolled(true);

            } else {
                setSrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return()=> window.removeEventListener("scroll",handleScroll);
    }, [threshold]);

    return scrolled;
}