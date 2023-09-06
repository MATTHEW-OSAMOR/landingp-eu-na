import React from 'react'
import { DM_Sans } from 'next/font/google'

export const metadata = {
    title: "Netrix | Netverse",
    description:
        "Web3 technology to your doorstep!",
    icons: {
        icon: "/favicon.ico",
    },
}
const sans = DM_Sans({ weight: ["300", "500", "700", "900"], subsets: ["latin"] })
function RootLayout({ children }) {
    return (
        <div className={sans.className + " bg-top bg-[url('/div.background.png')] bg-cover"}>
            {children}
        </div>
    )
}

export default RootLayout