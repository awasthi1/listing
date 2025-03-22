import React, { useState } from "react";
import SidebarModal from "../../components/SideBarModal/index.jsx";
import "./Table.css";

function Table({ columns, data }) {
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
                        {columns.map(({ key, label }) => (
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
                                    Open Sidebar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


            <SidebarModal isOpen={isOpen} onClose={closeModal}>
                <h3>Sidebar Content</h3>
                <p>This is some content inside the sidebar modal.</p>
            </SidebarModal>
        </>
    )
}
export default Table;
