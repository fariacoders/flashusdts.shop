import type { Metadata } from "next"
import "./globals.css"

import type React from "react"

import { Geist } from "next/font/google"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FLASH USDTS SHOP - Premium Crypto Tools",
  description: "Premium scripts and tools for developers",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} font-sans antialiased`}>{children}</body>
    </html>
  )
}
