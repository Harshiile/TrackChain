import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
// import { Toaster } from "@/components/ui/toaster"
import './globals.css'

export default function Layout({ children }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className='antialiased bg-[#090909] text-white'>
                    <header className="flex justify-end items-center p-4 gap-4 h-16">
                        <SignedOut>
                            <SignInButton />
                            <SignUpButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </header>
                    {children}
                    {/* <Toaster /> */}
                </body>
            </html>
        </ClerkProvider>
    )
}