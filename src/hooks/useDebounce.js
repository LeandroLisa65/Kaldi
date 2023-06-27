import React from 'react'

export const useDebounce = (data, delay) => {
    const [value, setValue] = React.useState();
    //const currentValue = React.useRef(null);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setValue(data);
        }, delay);

        return () => clearTimeout(timer);
        
    }, [data, delay]);
    
    return value;
}