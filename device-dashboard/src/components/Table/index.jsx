import React, { useState } from "react";
import SidebarModal from "../../components/SideBarModal/index.jsx";
import DeviceDetails from "../../pages/DeviceDetails/DeviceDetails.jsx";
import "./Table.css";

function Table({ columns, data, updateListing }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedRow, setSelectedRow] = React.useState(null);

    const showRecord = (row) => {
        setSelectedRow(row);
        setIsOpen(true);
    }
    const closeModal = () => {
        setSelectedRow(null);
        setIsOpen(false);
    }
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        {columns?.map(({ key, label }) => (
                            <th key={key} onClick={() => { }} className="sortable">
                                {label}
                            </th>
                        ))}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            {columns.map(({ key }) => (
                                <td key={key}>{row[key]}</td>
                            ))}
                            <td>
                                <button className="open-btn" onClick={() => {
                                    showRecord(row)
                                }}>
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


            <SidebarModal isOpen={isOpen} onClose={closeModal}>
                {selectedRow && <DeviceDetails deviceId={selectedRow.id} updateListing={updateListing}/>}
            </SidebarModal>
        </>
    )
}
export default Table;
