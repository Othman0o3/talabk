import React from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PublicIcon from "@mui/icons-material/Public";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const RED = "#E8322A";

// Exact data from bundle (Mk array, t1 color)
const stats = [
  { label: "سنوات خبرة",      value: "5+",   icon: <ShowChartIcon          sx={{ fontSize: 30 }} /> },
  { label: " متجر يثق بنا",   value: "500+", icon: <PublicIcon             sx={{ fontSize: 30 }} /> },
  { label: " فروع في ليبيا ", value: "5",    icon: <StoreMallDirectoryIcon sx={{ fontSize: 30 }} /> },
  { label: " دعم متواصل",     value: "24/7", icon: <LocalShippingIcon      sx={{ fontSize: 30 }} /> },
];

export default function Stat() {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: "#fff", position: "relative" }}>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Paper
                elevation={0}
                sx={{
                  textAlign: "center",
                  p: 3,
                  borderRadius: "20px",
                  backgroundColor: "transparent",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    "& .icon-box": {
                      backgroundColor: RED,
                      color: "#fff",
                      transform: "rotate(10deg)",
                    },
                  },
                }}
              >
                <Box
                  className="icon-box"
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "15px",
                    backgroundColor: "rgba(232, 50, 42, 0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2,
                    color: RED,
                    transition: "all 0.3s ease",
                  }}
                >
                  {stat.icon}
                </Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 900,
                    color: "#1A1A1A",
                    fontFamily: "Almarai",
                    fontSize: { xs: "1.8rem", md: "2.5rem" },
                    mb: 0.5,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#6B7280", fontFamily: "Almarai", fontWeight: 600, fontSize: "1.1rem" }}
                >
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
