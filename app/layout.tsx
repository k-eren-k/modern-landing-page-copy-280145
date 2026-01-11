import React from 'react';
import './globals.css';

export const metadata = {
    title: 'Generated App',
    description: 'Created with FlowBuilder',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}