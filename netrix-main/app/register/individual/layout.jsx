import React from 'react'

export const metadata = {
    title: "Netrix | individual Signup",
    description:
        "Signup on Netrix today!",
    icons: {
        icon: "/favicon.ico",
    },
};

function RootLayout({ children }) {
    return (
        <div suppressHydrationWarning>{children}</div>
    )
}

export default RootLayout