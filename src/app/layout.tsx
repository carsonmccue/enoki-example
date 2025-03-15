"use client";
import { EnokiFlowProvider } from "@mysten/enoki/react";
import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <EnokiFlowProvider apiKey={process.env.NEXT_PUBLIC_ENOKI_API_KEY!}>{children}</EnokiFlowProvider>
            </body>
        </html>
    );
}
