import React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import PublicIcon from "@mui/icons-material/Public";
import BarChartIcon from "@mui/icons-material/BarChart";
import LinkIcon from "@mui/icons-material/Link";

const RED = "#E8322A";

const services = [
  {
    title: "الشحن والتوصيل المحلي",
    desc: "توصيل لجميع مدن ليبيا مع تتبع لحظي وتأكيد استلام — سريع وموثوق.",
    icon: <Inventory2Icon fontSize="large" />,
  },
  {
    title: "التخزين وتلبية الطلبات",
    desc: "منظومة Fulfillment Center متكاملة — نستلم من مخزنك، نفحص، نغلف ونشحن.",
    icon: <WarehouseIcon fontSize="large" />,
  },
  {
    title: "صالة العرض الحصرية",
    desc: "Talabk Showroom — بيع مباشر بحجرات قياس وتكاليف شهرية رمزية.",
    icon: <CheckroomIcon fontSize="large" />,
  },
  {
    title: "الشراء الدولي",
    desc: "اشتري من Shein والمواقع التركية والعالمية — ونوصلك لباب بيتك.",
    icon: <PublicIcon fontSize="large" />,
  },
  {
    title: "حلول تسويقية",
    desc: "فريق تسويق إلكتروني ومندوبين ميدانيين في جميع المدن الليبية.",
    icon: <BarChartIcon fontSize="large" />,
  },
  {
    title: "ربط API",
    desc: "اربط منظومة متجرك مباشرة مع نظام طلبك — تكامل تقني سهل وسريع.",
    icon: <LinkIcon fontSize="large" />,
  },
];

export default function Services() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: "#fbfbfb",
        direction: "rtl",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* ── Header ── */}
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 8 }, px: 2 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Almarai",
              fontWeight: 900,
              color: "#1a1a1a",
              mb: 2,
              fontSize: { xs: "1.8rem", md: "2.8rem" },
              lineHeight: 1.2,
            }}
          >
            نُمكّن التجار من النمو بلا حدود
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Almarai",
              color: "#666",
              fontWeight: 400,
              mb: 3,
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            منظومة لوجستية متكاملة تجمع التوصيل والتخزين والتحصيل
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: RED, mx: "auto", borderRadius: 2 }} />
        </Box>

        {/* ── Cards: scroll on mobile, wrap on desktop ── */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: 2, md: 3 },
            pb: { xs: 4, md: 0 },
            px: { xs: 2, lg: 0 },
            flexDirection: "row",
            flexWrap: { xs: "nowrap", md: "wrap" },
            overflowX: { xs: "auto", md: "visible" },
            "&::-webkit-scrollbar": { display: "none" },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            scrollSnapType: { xs: "x mandatory", md: "none" },
            WebkitOverflowScrolling: "touch",
          }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                minWidth: { xs: "85%", sm: "48%", md: "calc(33.33% - 20px)" },
                maxWidth: { md: "calc(33.33% - 20px)" },
                scrollSnapAlign: "start",
                display: "flex",
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 5 },
                  width: "100%",
                  borderRadius: 6,
                  border: "1px solid #eee",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  backgroundColor: "#fff",
                  "&:hover": {
                    transform: { md: "translateY(-10px)" },
                    boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
                    borderColor: RED,
                  },
                }}
              >
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: "50%",
                    color: RED,
                    bgcolor: "rgba(232, 50, 42, 0.05)",
                    mb: 3,
                    display: "inline-flex",
                  }}
                >
                  {service.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Almarai",
                    fontWeight: 800,
                    mb: 2,
                    fontSize: { xs: "1.1rem", md: "1.3rem" },
                    color: "#1A1A1A",
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Almarai",
                    color: "#666",
                    lineHeight: 1.8,
                    fontSize: "0.95rem",
                  }}
                >
                  {service.desc}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>

        {/* ── Mobile swipe hint ── */}
        <Box sx={{ display: { xs: "flex", md: "none" }, justifyContent: "center", mt: 3 }}>
          <Typography variant="caption" sx={{ fontFamily: "Almarai", color: "#bbb" }}>
            اسحب لليمين لرؤية كافة الخدمات
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
