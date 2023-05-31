import Link from 'next/link'
import React from 'react'

export default function Movie404() {
    return (
        <div style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
        }}>
            <h1>Movie not found!</h1>
            <Link href={'/'} style={{ textDecoration: "underline", fontSize: 20, marginTop: 9 }}>
                Go Home
            </Link>
        </div>
    )
}
