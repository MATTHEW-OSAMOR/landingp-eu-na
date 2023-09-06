import React from 'react'

export const metadata = {
    title: "Netrix | About Us",
    description:
        "Web3 technology to your doorstep!",
    icons: {
        icon: "/favicon.ico",
    },
};

function RootLayout({ children }) {
    return (
        <div suppressHydrationWarning className='min-h-fit bg-top bg-[url("/div.background.png")] bg-cover'>{children}</div>
    )
}

export default RootLayout