import React, { useEffect, useState } from 'react'
import Container from "@mui/material/Container"
import drive from '../data/DriveData'


export const Drive = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(drive.data)
    }, drive.data)

    return (
        <Container style={{ marginTop: "10px" }}>
            <h2>Google Drive</h2>
            <hr />
            {
                data.map((d) => (
                    /*
                     * Change me to a component
                     * with a table
                     */
                    <p>{d.name}</p>
                ))
            }
        </Container>
    )
}
