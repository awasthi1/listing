import React,{useState} from 'react';
import useFetchListingHook from '../../hooks/useFetchListinghook.js';
import Table from '../../components/Table';
import {ListingcolumnsConfig} from '../../constants/listingcolumn/Columnconfig.js';
import SelectBox from '../../components/Select/index.jsx';

const options = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
    { value: "All", label: "All" }
];

function DeviceListing() {
    const { listing, loading, error } = useFetchListingHook();
    const [filter, setFilter] = useState("All");
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return (
        <main>
            <h1>Device Listing</h1>
            <SelectBox options={options} value={filter}/>
            <Table columns={ListingcolumnsConfig} data={listing} />
        </main>
    )
}
export default DeviceListing;