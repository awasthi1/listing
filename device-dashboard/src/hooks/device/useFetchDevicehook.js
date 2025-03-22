import { useState, useEffect } from 'react';

function useFetchDeviceHook(deviceId) {
    const [device, setDevice] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const setLoad = (value)=>{
        setLoading(value);
    }

    const fetchDevice = async () => {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:5001/devices/${deviceId}`)
            if (!response.ok) {
                throw new Error('Something went wrong while fetching device!');
            }
            setTimeout(async()=>{
                const data = await response.json();
                setDevice(data);
                setLoading(false);
            },2000)
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    const refetchDevice = async () => {
        fetchDevice()
    }
    useEffect(() => {
        fetchDevice();
    }, [deviceId]);

    return { device, loading, error, setLoad, refetchDevice };
}
export default useFetchDeviceHook;