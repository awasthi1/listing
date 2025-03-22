import useFetchDeviceHook from '../../hooks/device/useFetchDevicehook.js';
import React from 'react';
import Loader from '../../components/Loader/Loader.jsx';
import './DeviceDetails.css';

function DeviceDetails({ deviceId, updateListing }) {
    const { device, loading, error, setLoad, refetchDevice } = useFetchDeviceHook(deviceId);
    const [apn, setApn] = React.useState('');
    const [status, setStatus] = React.useState('');

    if (loading) return <div><Loader /></div>;
    if (error) return <div>Error: {error?.message || 'An err occurred while fetching data'}</div>;

    const disabled = device?.Status === 'Inactive' ? true : false;
    const message = device?.Status === 'Inactive' ? 'Device is Inactive' : '';

    const updateApn = async () => {
        if (!apn.trim()) return;
        try {
            const response = await fetch(`http://localhost:5001/devices/${deviceId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...device, apn }),
            });

            if (response.ok) {
                const updatedDevice = await response.json();
                setTimeout(() => {
                    setStatus('Apn updated successfully');
                    updateListing(updatedDevice);
                    refetchDevice()
                }, 1000);
            }
        } catch (error) {
            console.error("Error updating user:", error);
            setStatus('Error updating Apn');
        }
    };

    return (
        <section className='device-details'>
            <h4>{status}</h4>
            <h1>Device Details</h1>
            <section className='device-details-header'>
                <label>Device Id:</label>
                <h4>{device?.id}</h4>
            </section>

            <section className='device-details-header'>
                <label>Device Name:</label>
                <h4>{device?.Device_Name}</h4>
            </section>

            <section className='device-details-header'>
                <label>Source:</label>
                <h4>{device?.Telemetry_Source}</h4>
            </section>

            <section className='device-details-header'>
                <label>Apn:</label>
                <h4>{device?.apn}</h4>
            </section>

            <section className='device-details-header'>
                <input
                    type="text"
                    title={message}
                    disabled={disabled}
                    placeholder="Enter Apn No"
                    value={apn}
                    onChange={(e) => {
                        setApn(e.target.value);
                    }}
                />
            </section>

            <section className='device-details-header'>
                <button onClick={updateApn} disabled={disabled} className='device-details-button' title={message}>Edit</button>
            </section>
        </section>
    )
}

export default DeviceDetails;
