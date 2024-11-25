import React from 'react'

export default function The_layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div >
            <p className='bg-green-800 py-5 m-5'>the above navbar</p>
            {children}
        </div>
    );
}
