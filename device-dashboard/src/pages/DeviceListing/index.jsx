import React, { useState, useMemo } from 'react';
import useFetchListingHook from '../../hooks/device/useFetchListinghook.js';
import Table from '../../components/Table';
import { ListingcolumnsConfig } from '../../constants/listingcolumn/Columnconfig.js';
import SelectBox from '../../components/Select/index.jsx';
import useSetFilterHook from '../../hooks/device/useSetFilterhook.js';
import { options } from '../../constants/listingfilter/ListingFilter.js';

function DeviceListing() {
    const { listing, loading, error, updateListing } = useFetchListingHook();
    const [filter, handleSetFilter] = useSetFilterHook("All");

    const data = useMemo(() => {
        if (!listing) return [];
        return listing?.filter((item) => {
            if (filter === "All") return true;
            return item?.Status === filter;
        });
    }, [filter, listing]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error?.message || 'An err occurred while fetching data'}</div>;

    const onFilterChange = (value) => {
        handleSetFilter(value);
    }

    const updateContent = (updatedDevice) => {
        const updatedListing = listing.map((device) => {
            if (device.id === updatedDevice.id) {
                return updatedDevice;
            }
            return device;
        });
        updateListing(updatedListing);
    }
    return (
        <main>
            <h1>Device Listing</h1>
            <SelectBox options={options} value={filter} onChange={onFilterChange}/>
            <Table columns={ListingcolumnsConfig} data={data} updateListing={updateContent}/>
        </main>
    )
}
export default DeviceListing;