"use client"
import React, { useEffect } from 'react'
import { DM_Sans } from "next/font/google"
import { Report } from 'notiflix'

const sans = DM_Sans({ weight: ["300", "700", "900"], subsets: ["latin"] })
function RootLayout({ children }) {
    // let fam = sans.style.fontFamily.replace(/'/g, "")
    // fam = fam.slice(1,fam.length-4) 
    // console.log(fam)
    useEffect(() => {
        Report.init({
            className: sans.className,
            fontFamily: "inter"
        })
    })
    return (
        <div className={sans.className + " bg-top bg-[url('/div.background.png')] bg-cover"}>{children}</div>
    )
}

export default RootLayout