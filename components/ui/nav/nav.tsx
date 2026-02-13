"use client";  

import Link from "next/link";
import { Divider, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { NAV_LIST } from "./nav.list";
import { usePathname } from "next/navigation";

export default function Nav() {
    const pathname = usePathname();

    return (
        <List>
            {NAV_LIST.map((item, index) => { 

                if (typeof item === "string") {
                    return (
                        <Divider key={index} textAlign="left" sx={{ my: 2, '&::before, &::after': { borderColor: 'divider' } }}>
                            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 'bold', textTransform: 'uppercase', opacity: 0.6 }}>
                                { item }
                            </Typography>
                        </Divider>
                    );
                }

                return (
                    <ListItem key={index} disablePadding>
                        <ListItemButton component={Link} href={item.href} selected={pathname === item.href}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                )

            })}
        </List>
    );
}