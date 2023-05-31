"use client";

import Link from "next/link";

export default function Error() {
    return (
        <div style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
        }}>
            <h1>Somethings went wrong!</h1>
            <Link href={'/'} style={{ textDecoration: "underline", fontSize: 20, marginTop: 9 }}>
                Go Home
            </Link>
        </div>
    )
}
