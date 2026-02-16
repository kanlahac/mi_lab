"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Box, createTheme, CssBaseline, Drawer, ThemeProvider } from '@mui/material';
import Nav from "@/components/ui/nav/nav";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
    
const customTheme = createTheme({
  palette: {
    mode: 'light',
  },
});


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <AppRouterCacheProvider>
                    <ThemeProvider theme={customTheme}>
                        <CssBaseline />
                        
                        <Box sx={{ display: "flex" }}>
                            {/* MENU */}
                            <Drawer
                                variant="permanent"
                                sx={{
                                    width: 240,
                                    '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' },
                                }}
                            >
                                <Nav />
                            </Drawer>

                            {/* CONTENT */}
                            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                                {children}
                            </Box>
                        </Box>

                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
