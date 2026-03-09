import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Box,
    IconButton,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Collapse,
    Fade,
    Divider,
    Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PolicyIcon from "@mui/icons-material/Policy";
import PhoneIcon from "@mui/icons-material/Phone";
import UserIcon from "@mui/icons-material/SupervisedUserCircle";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StoreIcon from "@mui/icons-material/Storefront";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import Logo from '../images/LLO.png';

const navButtonStyle = {
    color: "rgb(219 38 42)",
    fontSize: "18px",
    fontFamily: "Almarai",
    '& .MuiButton-startIcon': { marginLeft: '12px', marginRight: '0px' },
    '&:hover': { backgroundColor: 'rgba(219, 38, 42, 0.05)' }
};

function Nav({MainRef, servicesRef, ratesRef, contactRef }) {
    const [isOpen, setIsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [timer, setTimer] = useState(null);
    const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const isMenuOpen = Boolean(anchorEl);

    const handleNavClick = (path, ref) => {
        setIsOpen(false);
        setAnchorEl(null);
        
        if (location.pathname !== "/") {
            navigate("/");
        } else {
            ref?.current?.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleOpenMenu = (event) => {
        if (timer) {
            clearTimeout(timer);
            setTimer(null);
        }
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setTimer(setTimeout(() => {
            setAnchorEl(null);
        }, 300));
    };

    return (
        <>
            <AppBar position="sticky" sx={{  height: 80, justifyContent: "center", direction: "rtl", backgroundColor: "#fff" }} elevation={1}>
                <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between", width: "100%", px: { lg: 4 }, position: 'relative', minHeight: 80 }}>
                    <Box
                        component={Link}
                        to="/"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                            minWidth: 'fit-content',
                            position: { xs: 'absolute', lg: 'static' },
                            left: { xs: '50%', lg: 'auto' },
                            transform: { xs: 'translateX(-50%)', lg: 'none' },
                            zIndex: 10,
                        }}
                    >
                        <img src={Logo} alt="Talabk logo" style={{ height: 80, width: 80 }} />
                    </Box>
                    <Box
                        sx={{
                            display: { xs: "none", lg: "flex" },
                            gap: 2,
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            flexGrow: 1,
                            pl: 5,
                        }}
                    >
                        <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 2, alignItems: 'center' }}>
                            <Button onClick={() => handleNavClick("/", MainRef)} startIcon={<HomeIcon />} sx={navButtonStyle}>
                                الرئيسية
                            </Button>
                            <Box
                                onMouseEnter={handleOpenMenu}
                                onMouseLeave={handleCloseMenu}
                                sx={{ display: 'flex', alignItems: 'center' }}
                            >
                                <Button
                                    onClick={() => handleNavClick("/", servicesRef)}
                                    sx={{ direction: "rtl", mt: 1, ...navButtonStyle }}
                                    startIcon={<BuildIcon />}
                                    endIcon={isMenuOpen ? <ExpandLess /> : <ExpandMore />}
                                >
                                    خدماتنا
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={isMenuOpen}
                                    onClose={() => setAnchorEl(null)}
                                    TransitionComponent={Fade}
                                    sx={{ direction: "rtl", mt: 1 }}
                                    MenuListProps={{
                                        onMouseEnter: () => {
                                            if (timer) {
                                                clearTimeout(timer);
                                                setTimer(null);
                                            }
                                        },
                                        onMouseLeave: handleCloseMenu,
                                    }}
                                >
                                    <MenuItem component={Link} to="/خدمات المتاجر" onClick={() => setAnchorEl(null)} sx={{ fontFamily: "Almarai" }}>
                                        <ListItemIcon><StoreIcon fontSize="small" /></ListItemIcon>
                                        خدمات المتاجر
                                    </MenuItem>
                                    <MenuItem component={Link} to="/خدمات السائقين" onClick={() => setAnchorEl(null)} sx={{ fontFamily: "Almarai" }}>
                                        <ListItemIcon><DeliveryDiningIcon fontSize="small" /></ListItemIcon>
                                        خدمات السائقين
                                    </MenuItem>
                                </Menu>
                            </Box>
                            <Button onClick={() => handleNavClick("/rates", ratesRef)} startIcon={<LocalShippingIcon />} sx={navButtonStyle}>
                                أسعار التوصيل
                            </Button>
                            <Button component={Link} to="/متجر طلبك" startIcon={<StoreIcon />} sx={navButtonStyle}>
                                متجر طلبك
                            </Button>
                            <Button onClick={() => handleNavClick("/contact", contactRef)} startIcon={<PhoneIcon />} sx={navButtonStyle}>
                                اتصل بنا
                            </Button>
                            <Button component={Link} to="سياسات الشحن" startIcon={<PolicyIcon />} sx={navButtonStyle}>
                                سياسات الشحن
                            </Button>
                            <Button startIcon={<UserIcon />} sx={navButtonStyle} href="https://talabksys.ly" rel='noreferrer'>
                                تسجيل الدخول
                            </Button>
                        </Box>
                    </Box>
                    <IconButton onClick={() => setIsOpen(true)} sx={{ display: { lg: "none" }, color: "rgb(219 38 42)" }}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

<Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
    <Box sx={{ width: 280, textAlign: "right", pt: 2 }}>
        <Typography variant="h6" sx={{ px: 2, pb: 2, fontWeight: 900, color: '#db262a', fontFamily: 'Almarai' }}>
        </Typography>
        <Divider />
        
        <List sx={{ direction: "rtl"}}>
            <ListItem disablePadding>
                <ListItemButton onClick={() => { handleNavClick("/", MainRef); setIsOpen(false); }}>
                    <ListItemIcon><HomeIcon sx={{ color: '#1a1a1a' }} /></ListItemIcon>
                    <ListItemText primary="الرئيسية" sx={{ '& span': { fontFamily: 'Almarai', fontWeight: 600 } }} />
                </ListItemButton>
            </ListItem>

            <ListItemButton 
                onClick={(e) => {
                    e.stopPropagation(); 
                    setMobileSubMenuOpen(!mobileSubMenuOpen);
                }}
                sx={{ bgcolor: mobileSubMenuOpen ? '#f5f5f5' : 'transparent' }}
            >
                <ListItemIcon><BuildIcon sx={{ color: mobileSubMenuOpen ? '#db262a' : '#1a1a1a' }} /></ListItemIcon>
                <ListItemText primary="خدماتنا" sx={{ '& span': { fontFamily: 'Almarai', fontWeight: 600 } }} />
                {mobileSubMenuOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            
            <Collapse in={mobileSubMenuOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ bgcolor: '#fafafa' }}>
                    <ListItemButton 
                        component={Link} 
                        to="/خدمات المتاجر" 
                        onClick={() => setIsOpen(false)}
                        sx={{ pr: 4, py: 1.5 }}
                    >
                        <ListItemIcon><StoreIcon fontSize="small" /></ListItemIcon>
                        <ListItemText primary="خدمات المتاجر" sx={{ '& span': { fontFamily: 'Almarai', fontSize: '0.9rem' } }} />
                    </ListItemButton>
                    
                    <ListItemButton 
                        component={Link} 
                        to="/خدمات السائقين" 
                        onClick={() => setIsOpen(false)}
                        sx={{ pr: 4, py: 1.5 }}
                    >
                        <ListItemIcon><DeliveryDiningIcon fontSize="small" /></ListItemIcon>
                        <ListItemText primary="خدمات السائقين" sx={{ '& span': { fontFamily: 'Almarai', fontSize: '0.9rem' } }} />
                    </ListItemButton>
                </List>
            </Collapse>

            <Divider sx={{ my: 1 }} />

            <ListItem disablePadding>
                <ListItemButton onClick={() => { handleNavClick("/rates", ratesRef); setIsOpen(false); }}>
                    <ListItemIcon><LocalShippingIcon sx={{ color: '#1a1a1a' }} /></ListItemIcon>
                    <ListItemText primary="أسعار التوصيل" sx={{ '& span': { fontFamily: 'Almarai', fontWeight: 600 } }} />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton component={Link} to="/متجر طلبك" onClick={() => setIsOpen(false)}>
                    <ListItemIcon><StoreIcon sx={{ color: '#1a1a1a' }} /></ListItemIcon>
                    <ListItemText primary="متجر طلبك" sx={{ '& span': { fontFamily: 'Almarai', fontWeight: 600 } }} />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton onClick={() => { handleNavClick("/contact", contactRef); setIsOpen(false); }}>
                    <ListItemIcon><PhoneIcon sx={{ color: '#1a1a1a' }} /></ListItemIcon>
                    <ListItemText primary="اتصل بنا" sx={{ '& span': { fontFamily: 'Almarai', fontWeight: 600 } }} />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton component={Link} to="/سياسات الشحن" onClick={() => setIsOpen(false)}>
                    <ListItemIcon><PolicyIcon sx={{ color: '#1a1a1a' }} /></ListItemIcon>
                    <ListItemText primary="سياسات الشحن" sx={{ '& span': { fontFamily: 'Almarai', fontWeight: 600 } }} />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton component="a" href="https://talabksys.ly" rel='noreferrer' onClick={() => setIsOpen(false)}>
                    <ListItemIcon><UserIcon sx={{ color: '#db262a' }} /></ListItemIcon>
                    <ListItemText primary="تسجيل الدخول" sx={{ '& span': { fontFamily: 'Almarai', fontWeight: 900, color: '#db262a' } }} />
                </ListItemButton>
            </ListItem>
        </List>
    </Box>
</Drawer>
        </>
    );
}

export default Nav;