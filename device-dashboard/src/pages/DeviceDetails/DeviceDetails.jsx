import useFetchDeviceHook from '../../hooks/device/useFetchDevicehook.js';
import React from 'react';
import Loader from '../../components/Loader/Loader.jsx';

function DeviceDetails({deviceId}){
    const { device, loading, error } = useFetchDeviceHook(deviceId);
    if (loading) return <div><Loader/></div>;
    if (error) return <div>Error: {error?.message || 'An err occurred while fetching data'}</div>;
    return(
        <section>
            <h1>Device Details</h1>
            <h4>{device?.Device_Name}</h4>
        </section>
    )
}

export default DeviceDetails;
