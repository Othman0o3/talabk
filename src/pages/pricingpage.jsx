import React, { useState } from "react";
import {
  Box, Container, Grid, Typography, Button, Paper,
  Stack, TextField, InputAdornment, Tabs, Tab,
  TableContainer, Table, TableHead, TableBody, TableRow, TableCell,
  Chip, List, ListItem, ListItemIcon, ListItemText,
} from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DownloadIcon from "@mui/icons-material/Download";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import PublicIcon from "@mui/icons-material/Public";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Calculator from "../components/calculator";
import { shippingRates } from "../utils/deliveryData"

// Exact constants from bundle
const RED = "#E8322A";
const WHATSAPP = "https://wa.me/218927716601";
const PDF_URL = "/files/prices.pdf";

// ── StorageCard (o1 component) ──────────────────────────────────────────────
function StorageCard({ title, normalPrice, cosmeticPrice, isExtra }) {
  return (
    <Paper
      elevation={0}
      sx={{ p: 4, borderRadius: 4, border: "1px solid #e0e0e0", textAlign: "center", height: "100%" }}
    >
      <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: RED, fontFamily: "Almarai" }}>
        {title}
      </Typography>
      <Box sx={{ mb: 2, p: 2, bgcolor: "#f9f9f9", borderRadius: 2 }}>
        <Typography variant="body2" color="textSecondary">تخزين عادي (متر مكعب)</Typography>
        <Typography variant="h4" sx={{ fontWeight: 900 }}>
          {normalPrice} د.ل <small style={{ fontSize: "0.9rem" }}>/شهرياً</small>
        </Typography>
      </Box>
      <Box sx={{ p: 2, bgcolor: "#f9f9f9", borderRadius: 2 }}>
        <Typography variant="body2" color="textSecondary">مستحضرات تجميل (متر مكعب)</Typography>
        <Typography variant="h4" sx={{ fontWeight: 900 }}>
          {cosmeticPrice} د.ل <small style={{ fontSize: "0.9rem" }}>/شهرياً</small>
        </Typography>
      </Box>
      {isExtra && (
        <Typography variant="caption" sx={{ mt: 2, display: "block", color: "#636e72" }}>
          * يضاف 10 د.ل لكل خدمة خارج طرابلس
        </Typography>
      )}
    </Paper>
  );
}

// ── ShowroomRow (ds component) ─────────────────────────────────────────────
function ShowroomRow({ title, price }) {
  return (
    <TableRow hover>
      <TableCell sx={{ fontWeight: 700, fontFamily: "Almarai", py: 2 }}>{title}</TableCell>
      <TableCell align="right">
        <Typography sx={{ fontWeight: 900, color: RED }}>
          {price} د.ل <small style={{ color: "#95a5a6" }}>/شهرياً</small>
        </Typography>
      </TableCell>
    </TableRow>
  );
}

// ── Main Page (iz component) ───────────────────────────────────────────────
export default function PricingPage() {
  const [tab, setTab] = useState(0);
  const [search, setSearch] = useState("");

  const tripliBranch = shippingRates.find((b) => b.branch === "طرابلس");
  const destinations = (tripliBranch?.destinations || []).filter((d) =>
    d.city.includes(search)
  );

  return (
    <Box sx={{ bgcolor: "#f8f9fa", minHeight: "100vh", direction: "rtl", pb: 8, mb: 10 }}>

      {/* ── Header ── */}
      <Box sx={{ bgcolor: "#fff", pt: { xs: 8, md: 10 }, pb: 4, borderBottom: "1px solid #eee", textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{ fontWeight: 900, fontFamily: "Almarai", color: "#1a1a1a", fontSize: { xs: "2.2rem", md: "3rem" }, mb: 2 }}
          >
            دليل خدمات طلبك الشامل
          </Typography>
          <Typography variant="h6" sx={{ color: "#666", fontFamily: "Almarai", fontWeight: 400, px: 2, mb: 4 }}>
            حلول لوجستية متكاملة تبدأ من الشراء من الخارج وصولاً إلى باب بيت زبونك
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" sx={{ mb: 5, px: 2 }}>
            <Button
              variant="outlined"
              color="error"
              startIcon={<PictureAsPdfIcon />}
              href={PDF_URL}
              target="_blank"
              sx={{ fontWeight: 700, borderRadius: 2, px: 4, fontFamily: "Almarai" }}
            >
              قراءة الدليل في المتصفح
            </Button>
            <Button
              variant="contained"
              color="error"
              startIcon={<DownloadIcon />}
              href={PDF_URL}
              download="Talabk-Price-Guide.pdf"
              sx={{ fontWeight: 700, borderRadius: 2, px: 4, bgcolor: RED, fontFamily: "Almarai" }}
            >
              تحميل الدليل (نسخة PDF)
            </Button>
          </Stack>

          {/* Tabs */}
          <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
            <Tabs
              value={tab}
              onChange={(_, v) => setTab(v)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                "& .MuiTabs-indicator": { bgcolor: RED, height: 3, borderRadius: "3px 3px 0 0" },
                "& .MuiTab-root": { fontFamily: "Almarai", fontWeight: 700, fontSize: "1rem", px: 3 },
                "& .Mui-selected": { color: `${RED} !important` },
              }}
            >
              <Tab icon={<LocalShippingIcon />} label="الشحن المحلي" />
              <Tab icon={<Inventory2Icon />}    label="التخزين" />
              <Tab icon={<StoreMallDirectoryIcon />} label="الشوروم" />
              <Tab icon={<PublicIcon />}        label="الشراء من الخارج" />
            </Tabs>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 6 }}>

        {/* ── Tab 0: Local Shipping (Calculator + price table) ── */}
        {tab === 0 && (
          <Grid container spacing={4} justifyContent="center">
            {/* Calculator component */}
            <Grid item xs={12}>
              <Calculator />
            </Grid>

            {/* Tripoli price table */}
            <Grid item xs={12}>
              <Paper elevation={0} sx={{ p: { xs: 2, md: 4 }, borderRadius: 4, border: "1px solid #e0e0e0", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4, flexWrap: "wrap", gap: 2 }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, fontFamily: "Almarai" }}>
                    قائمة أسعار فرع طرابلس
                  </Typography>
                  <TextField
                    placeholder=" ابحث عن مدينة ..."
                    size="small"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    sx={{ width: { xs: "100%", sm: "350px" } }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <TableContainer sx={{ maxHeight: 500, borderRadius: 2 }}>
                  <Table stickyHeader>
                    <TableHead>
                      <TableRow>
                        {["المنطقة", "توصيل منزلي", "استلام مكتب", "توصيل نسائي", "المدة"].map((h) => (
                          <TableCell key={h} align="right" sx={{ fontWeight: 900, bgcolor: "#f9f9f9" }}>
                            {h}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {destinations.map((dest, i) => (
                        <TableRow hover key={i}>
                          <TableCell align="right" sx={{ fontWeight: 700 }}>{dest.city}</TableCell>
                          <TableCell align="right">
                            <Chip label={`${dest.homeDelivery} د.ل`} color="primary" variant="outlined" size="small" sx={{ fontWeight: 700 }} />
                          </TableCell>
                          <TableCell align="right">
                            {dest.branchPickup > 0 ? `${dest.branchPickup} د.ل` : "—"}
                          </TableCell>
                          <TableCell align="right">
                            {dest.female > 0 ? (
                              <Chip label={`${dest.female} د.ل`} size="small" sx={{ bgcolor: "#fce4ec", color: "#d81b60", fontWeight: "bold" }} />
                            ) : "—"}
                          </TableCell>
                          <TableCell align="right" sx={{ color: "#7f8c8d", fontSize: "0.85rem" }}>
                            {dest.time}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
          </Grid>
        )}

        {/* ── Tab 1: Storage ── */}
        {tab === 1 && (
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={5}>
              <StorageCard title="داخل طرابلس" normalPrice="50" cosmeticPrice="75" />
            </Grid>
            <Grid item xs={12} md={5}>
              <StorageCard title="خارج طرابلس" normalPrice="60" cosmeticPrice="85" isExtra />
            </Grid>
          </Grid>
        )}

        {/* ── Tab 2: Showroom ── */}
        {tab === 2 && (
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={7}>
              <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: "1px solid #e0e0e0" }}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, fontFamily: "Almarai", textAlign: "center" }}>
                  باقات العرض (Showroom)
                </Typography>
                <TableContainer>
                  <Table>
                    <TableBody>
                      <ShowroomRow title="باقة علاق (8 أصناف)"  price="195" />
                      <ShowroomRow title="باقة علاق (14 صنف)"   price="250" />
                      <ShowroomRow title="باقة علاق (25 صنف)"   price="400" />
                      <ShowroomRow title="رف عرض صغير"          price="250" />
                      <ShowroomRow title="رف عرض كبير"          price="350" />
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ p: 4, borderRadius: 4, bgcolor: "#2d3436", color: "#fff", height: "100%" }}>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, fontFamily: "Almarai" }}>
                  المميزات المشمولة:
                </Typography>
                <List>
                  {["منظومة بيع متكاملة", "موظفي الصالة", "غرفة قياس", "دفع بالبطاقة المصرفية"].map((item) => (
                    <ListItem key={item} sx={{ px: 0 }}>
                      <ListItemIcon>
                        <CheckCircleIcon sx={{ color: "#00b894" }} />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        )}

        {/* ── Tab 3: International ── */}
        {tab === 3 && (
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12}>
              <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: `2px solid ${RED}20`, textAlign: "center" }}>
                <ShoppingBagIcon sx={{ fontSize: 50, color: RED, mb: 2 }} />
                <Typography variant="h4" sx={{ fontWeight: 900, fontFamily: "Almarai", mb: 3 }}>
                  الشراء من الخارج
                </Typography>
                <Grid container spacing={3}>
                  {[
                    { name: "SHEIN",               desc: "شراء وشحن مجاني لجميع الطلبيات" },
                    { name: "أسواق دبي والشارقة",  desc: "تجميع وشحن بحري وجوي من الإمارات" },
                    { name: "تركيا والصين",         desc: "تواصل مع المصانع والأسواق العالمية" },
                  ].map((src) => (
                    <Grid item xs={12} md={4} key={src.name}>
                      <Box sx={{ p: 3, bgcolor: "#f9f9f9", borderRadius: 3, height: "100%" }}>
                        <Typography variant="h6" sx={{ fontWeight: 800, color: RED, mb: 1 }}>{src.name}</Typography>
                        <Typography variant="body2" sx={{ color: "#636e72" }}>{src.desc}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
                <Box sx={{ mt: 4, p: 3, bgcolor: `${RED}05`, borderRadius: 3 }}>
                  <Typography variant="body1" sx={{ fontWeight: 700, mb: 2 }}>
                    للاستفسار عن الأسعار والعمولات:
                  </Typography>
                  <Button
                    variant="contained"
                    color="error"
                    href={WHATSAPP}
                    startIcon={<WhatsAppIcon />}
                    sx={{ fontWeight: 800, borderRadius: 3 }}
                  >
                    تواصل مع قسم التسويق
                  </Button>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper elevation={0} sx={{ p: 4, borderRadius: 4, bgcolor: "#1a1a1a", color: "#fff", textAlign: "center" }}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, fontFamily: "Almarai", color: RED }}>
                  خدمات المتاجر خارج ليبيا
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: "800px", mx: "auto", lineHeight: 1.8, opacity: 0.9 }}>
                  للمتاجر والعلامات التجارية العالمية الراغبة في دخول السوق الليبي، نقدم حلولاً لوجستية "من الطرف للطرف". تشمل خدماتنا استلام بضائعكم، التخزين في مخازننا المجهزة، إدارة المبيعات، والتوصيل لجميع المدن الليبية مع تحصيل الأموال.
                </Typography>
                <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
                  {["تخزين ذكي", "توزيع جغرافي شامل", "إدارة تحصيل الأموال"].map((tag) => (
                    <Chip key={tag} label={tag} variant="outlined" sx={{ color: "#fff", borderColor: "#444" }} />
                  ))}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        )}

      </Container>
    </Box>
  );
}
