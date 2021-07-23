import { useState, useEffect } from "react";


const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIspending] = useState(true)
    const [error, setError] = useState(null);


    useEffect(() => {
        //AbortController used for cleanup function
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource')
                }
                return res.json();
            }).then(data => {
                setData(data);
                setIspending(false);
                setError(null);
            }).catch(err => {
                if (err.name == 'AbortError') {
                    console.log('Fetch aborted');
                }
                else {
                    setIspending(false);
                    setError(err.message);
                }


            })
        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error }

}

export default useFetch;