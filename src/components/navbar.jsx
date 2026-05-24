import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  AppBar, Toolbar, Box, Typography, Button, IconButton,
  Drawer, List, ListItem, ListItemIcon, ListItemText,
  Menu, MenuItem, Divider, Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import PhoneIcon from "@mui/icons-material/Phone";
import SecurityIcon from "@mui/icons-material/Security";
import InfoIcon from "@mui/icons-material/Info";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Fade from "@mui/material/Fade";
import logo from "../images/LLO.png";

const RED = "#E8322A";

// Exact nav button style from bundle (Wo object)
const navBtnSx = {
  color: "#1A1A1A",
  fontSize: { lg: "14px", xl: "16px" },
  fontFamily: "Almarai",
  fontWeight: 700,
  whiteSpace: "nowrap",
  "&:hover": { backgroundColor: "rgba(232, 50, 42, 0.05)", color: RED },
};

export default function Navbar({ MainRef, servicesRef, ratesRef, contactRef }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  const scrollToSection = (path, ref) => {
    setDrawerOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => ref?.current?.scrollIntoView({ behavior: "smooth" }), 100);
    } else {
      ref?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={scrolled ? 2 : 0}
        sx={{
          bgcolor: scrolled ? "rgba(255, 255, 255, 0.85)" : "#fff",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: "1px solid #eee",
          direction: "rtl",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", height: 80, px: { xs: 2, lg: 4 } }}>
          
          {/* Hamburger — mobile only */}
          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { lg: "none" }, color: RED, order: { xs: 1, lg: 0 } }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>

          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              position: { xs: "absolute", lg: "static" },
              left: { xs: "50%", lg: "unset" },
              transform: { xs: "translateX(-50%)", lg: "none" },
              order: { xs: 2, lg: 1 },
              textDecoration: "none",
            }}
          >
            <img src={logo} alt="Logo" style={{ height: scrolled ? 55 : 65, transition: "0.3s" }} />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="caption"
                sx={{
                  fontFamily: "almarai",
                  fontWeight: "400",
                  color: "text.secondary",
                  fontSize: "0.8rem",
                  mr: "1.5",
                  letterSpacing: 1,
                }}
              >
                ديما قراب
              </Typography>
            </Box>
          </Box>

          {/* Desktop Nav Links */}
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              gap: { lg: 1, xl: 2 },
              alignItems: "center",
              order: 2,
            }}
          >
            <Button onClick={() => scrollToSection("/", MainRef)} sx={navBtnSx}>
              الرئيسية
            </Button>

            {/* Services hover dropdown */}
            <Box
              onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
              onMouseLeave={() => setAnchorEl(null)}
            >
              <Button
                sx={navBtnSx}
                endIcon={anchorEl ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              >
                خدماتنا
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                TransitionComponent={Fade}
                sx={{ pointerEvents: "none", mt: 1, direction: "rtl" }}
                MenuListProps={{
                  onMouseEnter: () => setAnchorEl(anchorEl),
                  onMouseLeave: () => setAnchorEl(null),
                  sx: { pointerEvents: "auto" },
                }}
              >
                <MenuItem
                  onClick={() => { navigate("/خدمات المتاجر"); setAnchorEl(null); }}
                  sx={{ fontFamily: "Almarai" }}
                >
                  خدمات المتاجر
                </MenuItem>
                <MenuItem
                  onClick={() => { navigate("/خدمات السائقين"); setAnchorEl(null); }}
                  sx={{ fontFamily: "Almarai" }}
                >
                  خدمات السائقين
                </MenuItem>
              </Menu>
            </Box>

            <Button component={Link} to="/الأسعار" sx={navBtnSx}>الأسعار</Button>
            <Button component={Link} to="/متجر طلبك" sx={navBtnSx}>المتجر</Button>
            <Button onClick={() => scrollToSection("/contact", contactRef)} sx={navBtnSx}>اتصل بنا</Button>
            <Button component={Link} to="/سياسات الشحن" sx={navBtnSx}>السياسات</Button>
            <Button component={Link} to="/من نحن" sx={navBtnSx}>من نحن</Button>
          </Box>

          {/* Register CTA — desktop */}
          <Box sx={{ display: { xs: "none", lg: "block" }, order: 3 }}>
            <Button
              variant="contained"
              href="https://talabksys.ly"
              sx={{
                bgcolor: RED,
                fontFamily: "Almarai",
                fontWeight: 800,
                borderRadius: "10px",
                px: 3,
                "&:hover": { bgcolor: "#C42820" },
              }}
            >
              سجل كتاجر الان
            </Button>
          </Box>

          {/* Spacer to balance hamburger on mobile */}
          <Box sx={{ width: 48, display: { lg: "none" }, order: 3 }} />
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 280, direction: "rtl" }}>
          {/* Logo in drawer */}
          <Box sx={{ p: 3, textAlign: "center" }}>
            <img src={logo} alt="Logo" style={{ height: 60 }} />
          </Box>
          <Divider />

          <List>
            {/* Home */}
            <ListItem button onClick={() => scrollToSection("/", MainRef)}>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary="الرئيسية" sx={{ "& span": { fontFamily: "Almarai" } }} />
            </ListItem>

            {/* Services expandable */}
            <ListItem button onClick={() => setMobileServicesOpen((p) => !p)}>
              <ListItemIcon><BuildIcon /></ListItemIcon>
              <ListItemText primary="خدماتنا" sx={{ "& span": { fontFamily: "Almarai" } }} />
              {mobileServicesOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItem>
            <Collapse in={mobileServicesOpen} timeout="auto">
              <Box sx={{ display: "block", bgcolor: "#f9f9f9" }}>
                <ListItem button component={Link} to="/خدمات المتاجر" onClick={() => setDrawerOpen(false)} sx={{ pr: 4 }}>
                  <ListItemIcon><StoreMallDirectoryIcon fontSize="small" /></ListItemIcon>
                  <ListItemText primary="خدمات المتاجر" sx={{ "& span": { fontFamily: "Almarai", fontSize: "0.9rem" } }} />
                </ListItem>
                <ListItem button component={Link} to="/خدمات السائقين" onClick={() => setDrawerOpen(false)} sx={{ pr: 4 }}>
                  <ListItemIcon><TwoWheelerIcon fontSize="small" /></ListItemIcon>
                  <ListItemText primary="خدمات السائقين" sx={{ "& span": { fontFamily: "Almarai", fontSize: "0.9rem" } }} />
                </ListItem>
              </Box>
            </Collapse>

            {/* Prices */}
            <ListItem button component={Link} to="/الأسعار" onClick={() => setDrawerOpen(false)}>
              <ListItemIcon><LocalShippingIcon /></ListItemIcon>
              <ListItemText primary="الأسعار" sx={{ "& span": { fontFamily: "Almarai" } }} />
            </ListItem>

            {/* Store */}
            <ListItem button component={Link} to="/متجر طلبك" onClick={() => setDrawerOpen(false)}>
              <ListItemIcon><StoreMallDirectoryIcon /></ListItemIcon>
              <ListItemText primary="المتجر" sx={{ "& span": { fontFamily: "Almarai" } }} />
            </ListItem>

            {/* Contact */}
            <ListItem button onClick={() => scrollToSection("/contact", contactRef)}>
              <ListItemIcon><PhoneIcon /></ListItemIcon>
              <ListItemText primary="اتصل بنا" sx={{ "& span": { fontFamily: "Almarai" } }} />
            </ListItem>

            {/* Policies */}
            <ListItem button component={Link} to="/سياسات الشحن" onClick={() => setDrawerOpen(false)}>
              <ListItemIcon><SecurityIcon /></ListItemIcon>
              <ListItemText primary="سياسات الشحن" sx={{ "& span": { fontFamily: "Almarai" } }} />
            </ListItem>

            {/* About */}
            <ListItem button component={Link} to="/من نحن" onClick={() => setDrawerOpen(false)}>
              <ListItemIcon><InfoIcon /></ListItemIcon>
              <ListItemText primary="من نحن" sx={{ "& span": { fontFamily: "Almarai" } }} />
            </ListItem>

            {/* Login CTA */}
            <Box sx={{ p: 2 }}>
              <Button
                fullWidth
                variant="contained"
                href="https://talabksys.ly"
                sx={{ bgcolor: RED, fontFamily: "Almarai" }}
              >
                تسجيل الدخول
              </Button>
            </Box>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
