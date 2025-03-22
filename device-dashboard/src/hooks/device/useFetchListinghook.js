import { useState, useEffect } from "react";
function useFetchListingHook() {
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:5001/devices").then((res) => res.json()).then((listing) => {
            setTimeout(()=>{
                setListing(listing);
                setLoading(false);
            },2000);
        }).catch((erro) => {
            setError(erro);
            setLoading(false);
        });
    }, []);

    const updateListing = (updatedListing) => {
        setListing(updatedListing);
    };
    return { listing, loading, updateListing, error };
}

export default useFetchListingHook;