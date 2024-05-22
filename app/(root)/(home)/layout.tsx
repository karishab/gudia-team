import React, { ReactNode } from 'react'

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            Navbar
            {children}
            Footer
        </main>
    );
}

export default HomeLayout