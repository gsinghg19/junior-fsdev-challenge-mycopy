import React, { useEffect, useState } from 'react'
import Container from "@mui/material/Container"
import gcs from '../data/GCSData'


export const Gcs = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(gcs.data)
    }, gcs.data)

    return (
        <Container style={{ marginTop: "10px" }}>
            <h2>Google Cloud Storage</h2>
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
