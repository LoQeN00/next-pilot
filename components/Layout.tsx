import React from 'react'
import Link from "next/link"

type Props = {
    children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div style={{padding: "10px"}}>
        <Link href="/" style={{padding: "10px"}}>Strona główna</Link>
        <Link href="/test" style={{padding: "10px"}}>Strona testowa</Link>
        <Link href="/admin-panel" style={{padding: "10px"}}>Panel Admina</Link>
        <main>
            {children}
        </main>
    </div>
  )
}

export default Layout