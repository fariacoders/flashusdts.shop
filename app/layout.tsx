import type { Metadata } from "next"
import "./globals.css"

import type React from "react"

import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

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
      <body className={`${inter.className} font-sans antialiased`}>{children}</body>
    </html>
  )
}
