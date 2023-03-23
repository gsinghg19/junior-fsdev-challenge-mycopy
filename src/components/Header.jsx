import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import { useState } from 'react';
import CloseIcon from "@mui/icons-material/Close";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LoginIcon from '@mui/icons-material/Login';
import Link from '@mui/material/Link'
import Avatar from '@mui/material/Avatar'
import GoogleIcon from '@mui/icons-material/Google';
import HomeIcon from '@mui/icons-material/Home';
import CloudIcon from '@mui/icons-material/Cloud';
import { Switch } from '@mui/material';
import Brightness6Icon from '@mui/icons-material/Brightness6';

export default function MenuAppBar() {
    const [open, setState] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    };
    
    return (
        <>
                <Box sx={{ flexGrow: 1 }}>

                    <AppBar position="static" sx={{
                        backgroundColor: "#333"
                    }}>
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                <img
                                    src='https://www.nexudus.com/images/consultants/netpremacy-global-services-192x192.png'
                                    style={{
                                        height: "20px",
                                        marginRight: "10px"
                                    }}
                                />
                                Netpremacy
                            </Typography>
                            {/* 
                              * Implement dark mode!
                              */}
                            <Switch defaultChecked color="primary" /><Brightness6Icon />
                            <Box
                                sx={{ float: "right", marginRight: 5, marginLeft: 5, height: "100%"   }}
                            >
 
                                    <Avatar
                                        
                                    >
                                        NP
                                    </Avatar>

                            </Box>
                            <Drawer
                                anchor="left"
                                open={open}
                                onClose={toggleDrawer(false)}
                                onOpen={toggleDrawer(true)}
                                PaperProps={{ style: { width: '25%' } }}
                            >

                                <Box sx={{
                                    p: 2,
                                    height: 1,
                                    background: "primary"
                                }}>

                                    <IconButton sx={{ mb: 2 }}>
                                        <CloseIcon onClick={toggleDrawer(false)} />
                                    </IconButton>
                                    <Divider sx={{ mb: 2 }} />

                                    <Box sx={{ mb: 2 }}>
                                        <List>
                                            <Link href='/home' underline='none'>
                                                <ListItem disablePadding>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <HomeIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary={"Home"} />
                                                    </ListItemButton>
                                                </ListItem>
                                            </Link>
                                            <Link href='/drive' underline='none'>
                                                <ListItem disablePadding>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <GoogleIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary={"Google Drive"} />
                                                    </ListItemButton>
                                                </ListItem>
                                            </Link>
                                            <Link href='/gcs' underline='none'>
                                                <ListItem disablePadding>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CloudIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary={"Google Cloud Storage"} />
                                                    </ListItemButton>
                                                </ListItem>
                                            </Link>
                                            <Link href='/login' underline='none'>
                                                <ListItem disablePadding>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <LoginIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary={"Log In Screen"} />
                                                    </ListItemButton>
                                                </ListItem>
                                            </Link>

                                        </List>
                                    </Box>
                                </Box>
                            </Drawer>
                        </Toolbar>
                    </AppBar>
                </Box>

        </>
    );
}