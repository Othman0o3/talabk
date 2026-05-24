import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import bg from "../images/web-2.webp"

const RED = "#E8322A";

export default function Hero() {
  const [trackingId, setTrackingId] = useState("");
  const navigate = useNavigate();

  const handleTrack = () => {
    if (trackingId.trim()) {
      navigate(`/tracking/${trackingId.trim()}`);
      console.log("Tracking order:", trackingId);
    } else {
      alert("الرجاء إدخال رقم الشحنة");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        direction: "rtl",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(4px)",
          width: "fit",
          zIndex: -2,
          transform: "scale(1)",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(15, 23, 42, 0.7)",
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ zIndex: 1, py: { xs: 8, md: 10 } }}>
        <Grid
          container
          direction="column"
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          {/* ── Headline ── */}
          <Grid item xs={12} sx={{ textAlign: "center", mb: 3, width: "100%" }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Almarai",
                fontWeight: 900,
                color: "#FFFFFF",
                fontSize: { xs: "2.5rem", md: "3.8rem" },
                lineHeight: 1.2,
                mb: 2.5,
                textShadow: "0 4px 10px rgba(0,0,0,0.3)",
              }}
            >
              شريكك اللوجستي في ليبيا
              <br />
              <span style={{ color: RED }}>ليكون طموحك واقعاً</span>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontFamily: "Almarai",
                color: "#D1D5DB",
                maxWidth: "700px",
                mx: "auto",
                fontWeight: 400,
                lineHeight: 1.8,
                mb: 6,
              }}
            >
              من استلام الشحنة وحتى تسليمها ليد العميل، نحن معك في كل خطوة. خدمات
              احترافية، تغطية شاملة، وسرعة لا تضاهى.
            </Typography>
          </Grid>

          {/* ── Tracking input + CTA ── */}
          <Grid
            item
            xs={12}
            md={8}
            lg={6}
            sx={{ width: "100%", maxWidth: "600px" }}
          >
            {/* Search box */}
            <Paper
              elevation={0}
              sx={{
                p: { xs: 1, md: 1.5 },
                borderRadius: "16px",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                "&:hover": { boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)" },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <TextField
                  fullWidth
                  placeholder="أدخل رقم الشحنة للتتبع (مثلاً: 12345)"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  variant="standard"
                  onKeyPress={(e) => e.key === "Enter" && handleTrack()}
                  InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        sx={{ mr: 2, color: "#9CA3AF" }}
                      >
                        <SearchIcon />
                      </InputAdornment>
                    ),
                    sx: {
                      px: 2,
                      py: 1.5,
                      fontFamily: "Almarai",
                      fontSize: "1.1rem",
                      color: "#1F2937",
                    },
                  }}
                />
                <Button
                  variant="contained"
                  onClick={handleTrack}
                  sx={{
                    backgroundColor: RED,
                    color: "#fff",
                    borderRadius: "12px",
                    px: { xs: 3, md: 5 },
                    py: 1.8,
                    fontFamily: "Almarai",
                    fontWeight: 700,
                    fontSize: "1rem",
                    boxShadow: "0 4px 14px 0 rgba(232, 50, 42, 0.35)",
                    "&:hover": {
                      backgroundColor: "#C42820",
                      boxShadow: "0 6px 20px rgba(232, 50, 42, 0.4)",
                    },
                  }}
                >
                  تتبع
                </Button>
              </Box>
            </Paper>

            {/* Feature badges */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: { xs: 2, md: 4 },
                mt: 4,
              }}
            >
              {["سرعة التوصيل", "تغطية شاملة", "دعم فني 24/7"].map((feat) => (
                <Typography
                  key={feat}
                  variant="caption"
                  sx={{ fontFamily: "Almarai", color: "#E5E7EB", fontSize: "0.9rem" }}
                >
                  <span style={{ color: RED, fontWeight: "bold" }}>✓</span> {feat}
                </Typography>
              ))}
            </Box>

            {/* Join CTA */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
              <Button
                variant="contained"
                href="https://talabksys.ly"
                target="_blank"
                endIcon={<ArrowForwardIcon sx={{ mr: 1, ml: -1 }} />}
                sx={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  borderRadius: "10px",
                  px: 4,
                  py: 1.2,
                  fontFamily: "Almarai",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  border: "1px solid rgba(255,255,255,0.3)",
                  backdropFilter: "blur(5px)",
                  "&:hover": {
                    backgroundColor: RED,
                    borderColor: RED,
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 20px rgba(232, 50, 42, 0.3)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                انضم الينا الآن
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
