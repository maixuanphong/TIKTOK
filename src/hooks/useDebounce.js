import { useState, useEffect } from 'react';
function useDebounce(value, delay) {
    const [debouncedValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handleid = setTimeout(() => setDebounceValue(value), delay);
        return () => clearTimeout(handleid);
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounce;
