import { ClerkProvider } from "@clerk/nextjs"
import {Inter} from "next/font/google"
import '../globals.css'

export const metadata = {
    title: 'Threat',
    description : 'A Next.js 13 Social application'
}
const inter = Inter({subsets:["latin"]})

export default function RootLayout({
    children
} : {
    children: React.ReactNode
}){
    return (
    <ClerkProvider>
        <html lang="fr">
            <body className={`${inter.className} bg-slate-900`}>
                {children}
            </body>
        </html>
    </ClerkProvider>
    )
}