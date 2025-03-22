import { useState, useEffect } from "react";
function useFetchListingHook() {
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:5001/devices").then((res) => res.json()).then((listing) => {
            setListing(listing);
            setLoading(false);
        }).catch((erro) => {
            setError(erro);
            setLoading(false);
        });
    }, []);

    return { listing, loading };
}

export default useFetchListingHook;