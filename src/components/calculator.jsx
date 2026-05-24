import React, { useState, useMemo } from "react";
import {
  Box, Grid, Paper, Typography, TextField, InputAdornment,
  Autocomplete, FormControlLabel, Switch, Divider, Fade,
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import WcIcon from "@mui/icons-material/Wc";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import { shippingRates } from "../utils/deliveryData"

// Exact constants from bundle
const RED = "#E8322A";
const GRADIENT = "linear-gradient(135deg, #E8322A 0%, #ff6b6b 100%)";

// ─── Price Result Card (Xp component) ────────────────────────────────────────
function PriceCard({ icon, title, price, time, color, withPackaging, packagingCost }) {
  return (
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        borderRadius: "24px",
        position: "relative",
        boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: `0 20px 40px ${color}20`,
        },
      }}
    >
      {/* Color top bar */}
      <Box sx={{ height: "6px", background: color }} />

      <Box sx={{ textAlign: "center", p: 4 }}>
        {/* Icon */}
        <Box sx={{ display: "inline-flex", p: 2, borderRadius: "20px", background: color, mb: 3 }}>
          {icon}
        </Box>

        {/* Title */}
        <Typography variant="h6" sx={{ fontFamily: "Almarai", fontWeight: 800, mb: 1 }}>
          {title}
        </Typography>

        {/* Price */}
        <Box sx={{ display: "flex", alignItems: "baseline", justifyContent: "center", my: 1 }}>
          <Typography variant="h3" sx={{ fontWeight: 900, color }}>
            {price || "—"}
          </Typography>
          <Typography variant="h6" sx={{ ml: 1, color: "#b2bec3" }}>
            د.ل
          </Typography>
        </Box>

        {/* Packaging note */}
        {withPackaging && (
          <Typography
            variant="caption"
            sx={{ color: "#2ecc71", fontWeight: 700, display: "block", mb: 1 }}
          >
            (شامل تغليف: {packagingCost.toFixed(2)} د.ل)
          </Typography>
        )}

        {/* Delivery time */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            mt: 2,
            py: 1,
            px: 2,
            bgcolor: "#f8f9fa",
            borderRadius: "12px",
          }}
        >
          <AccessTimeIcon sx={{ fontSize: 18, color: "#636e72" }} />
          <Typography variant="body2" sx={{ fontFamily: "Almarai", color: "#636e72", fontWeight: 600 }}>
            {time}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}

// ─── Main Calculator (qx component) ──────────────────────────────────────────
export default function Calculator() {
  const [fromBranch, setFromBranch] = useState(null);
  const [toCity, setToCity]         = useState(null);
  const [dims, setDims]             = useState({ length: 30, width: 30, height: 30, weight: 1 });
  const [withPackaging, setWithPackaging] = useState(false);

  const handleDimChange = (e) => {
    setDims({ ...dims, [e.target.name]: parseFloat(e.target.value) || 0 });
  };

  const branches = shippingRates.map((b) => b.branch);

  const destinations = useMemo(() => {
    const branch = shippingRates.find((b) => b.branch === fromBranch);
    return branch ? branch.destinations : [];
  }, [fromBranch]);

  const destination = useMemo(
    () => destinations.find((d) => d.city === toCity),
    [toCity, destinations]
  );

  // Exact surcharge logic from bundle (R function)
  const getSurchargeRate = (base) =>
    base <= 20 ? 2 : base <= 30 ? 2.5 : base <= 40 ? 3 : 3.5;

  // Exact packaging cost logic from bundle (S function)
  const packagingCost = () => {
    if (!withPackaging) return 0;
    const base = 10, perCm = 0.33;
    const dx = Math.max(0, dims.length - 30);
    const dy = Math.max(0, dims.width - 30);
    const dz = Math.max(0, dims.height - 30);
    return base + (dx + dy + dz) * perCm;
  };

  // Exact total price logic from bundle (T function)
  const calcTotal = (basePrice) => {
    if (!basePrice) return null;
    const { length, width, height, weight } = dims;
    const isStandard = length <= 30 && width <= 30 && height <= 30;
    let price = basePrice;
    if (!isStandard) {
      const volumeWeight = (length * width * height) / 5000;
      const chargeableWeight = Math.max(weight, volumeWeight);
      price = basePrice + chargeableWeight * getSurchargeRate(basePrice);
    }
    return Math.ceil((price + packagingCost()) * 2) / 2;
  };

  // Exact input style from bundle (E object)
  const inputSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "16px",
      backgroundColor: "#f8f9fa",
      transition: "all 0.3s ease",
      "&:hover": { backgroundColor: "#fff", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" },
      "&.Mui-focused": { backgroundColor: "#fff", boxShadow: `0 4px 15px ${RED}20` },
    },
  };

  return (
    <Box sx={{ maxWidth: 1050, mx: "auto", p: { xs: 2, md: 4 }, direction: "rtl" }}>
      {/* Title */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Almarai",
            fontWeight: 900,
            mb: 1.5,
            background: GRADIENT,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          حاسبة تكاليف الشحن
        </Typography>
      </Box>

      {/* Inputs card */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 5 },
          borderRadius: "24px",
          background: "#fff",
          border: "1px solid #f0f0f0",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.05)",
          mb: 4,
        }}
      >
        <Grid container spacing={4}>
          {/* From branch */}
          <Grid item xs={12} md={6}>
            <Autocomplete
              options={branches}
              value={fromBranch}
              onChange={(_, val) => { setFromBranch(val); setToCity(null); }}
              renderInput={(params) => (
                <TextField {...params} label="من فرع" variant="outlined" sx={inputSx} />
              )}
            />
          </Grid>

          {/* To city */}
          <Grid item xs={12} md={6}>
            <Autocomplete
              options={destinations.map((d) => d.city)}
              value={toCity}
              disabled={!fromBranch}
              onChange={(_, val) => setToCity(val)}
              renderInput={(params) => (
                <TextField {...params} label="إلى مدينة" variant="outlined" sx={inputSx} />
              )}
            />
          </Grid>

          {/* Divider */}
          <Grid item xs={12}>
            <Divider sx={{ my: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{ color: "#b2bec3", fontFamily: "Almarai", fontWeight: 700, px: 2 }}
              >
                تفاصيل الطرد والخدمات الإضافية
              </Typography>
            </Divider>
          </Grid>

          {/* Dimensions */}
          {[
            { label: "الطول", name: "length", unit: "سم" },
            { label: "العرض", name: "width",  unit: "سم" },
            { label: "الارتفاع", name: "height", unit: "سم" },
            { label: "الوزن",  name: "weight", unit: "كجم" },
          ].map(({ label, name, unit }) => (
            <Grid item xs={6} sm={2.4} key={name}>
              <TextField
                fullWidth
                label={label}
                name={name}
                type="number"
                value={dims[name]}
                onChange={handleDimChange}
                sx={inputSx}
                InputProps={{
                  endAdornment: <InputAdornment position="end">{unit}</InputAdornment>,
                }}
              />
            </Grid>
          ))}

          {/* Packaging toggle */}
          <Grid item xs={12} sm={2.4}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 1,
                borderRadius: "16px",
                border: `1px dashed ${withPackaging ? RED : "#dcdde1"}`,
                bgcolor: withPackaging ? `${RED}05` : "transparent",
              }}
            >
              <FormControlLabel
                control={
                  <Switch
                    checked={withPackaging}
                    onChange={(e) => setWithPackaging(e.target.checked)}
                    color="error"
                  />
                }
                label={
                  <Box sx={{ textAlign: "center" }}>
                    <Inventory2Icon sx={{ fontSize: 20, color: withPackaging ? RED : "#95a5a6", mb: -0.5 }} />
                    <Typography sx={{ fontFamily: "Almarai", fontWeight: 700, fontSize: "0.75rem" }}>
                      تغليف إضافي
                    </Typography>
                  </Box>
                }
                labelPlacement="bottom"
              />
            </Box>
          </Grid>
        </Grid>

        {/* Results */}
        {destination && (
          <Box sx={{ mt: 7 }}>
            <Grid container spacing={3} justifyContent="center">
              {/* Home Delivery */}
              <Grid item xs={12} sm={6} md={4}>
                <Fade in style={{ transitionDelay: "100ms" }}>
                  <Box>
                    <PriceCard
                      icon={<LocalShippingIcon sx={{ fontSize: 40, color: "#fff" }} />}
                      title="توصيل لباب البيت"
                      price={calcTotal(destination.homeDelivery)}
                      time={destination.time}
                      color={RED}
                      withPackaging={withPackaging}
                      packagingCost={packagingCost()}
                    />
                  </Box>
                </Fade>
              </Grid>

              {/* Branch Pickup */}
              {destination.branchPickup !== undefined && (
                <Grid item xs={12} sm={6} md={4}>
                  <Fade in style={{ transitionDelay: "200ms" }}>
                    <Box>
                      <PriceCard
                        icon={<StoreMallDirectoryIcon sx={{ fontSize: 40, color: "#fff" }} />}
                        title="استلام من المكتب"
                        price={calcTotal(destination.branchPickup)}
                        time={destination.time}
                        color="#00b894"
                        withPackaging={withPackaging}
                        packagingCost={packagingCost()}
                      />
                    </Box>
                  </Fade>
                </Grid>
              )}

              {/* Female Delivery */}
              {destination.female !== undefined && (
                <Grid item xs={12} sm={6} md={4}>
                  <Fade in style={{ transitionDelay: "300ms" }}>
                    <Box>
                      <PriceCard
                        icon={<WcIcon sx={{ fontSize: 40, color: "#fff" }} />}
                        title="توصيل نسائي"
                        price={calcTotal(destination.female)}
                        time={destination.time}
                        color="#6c5ce7"
                        withPackaging={withPackaging}
                        packagingCost={packagingCost()}
                      />
                    </Box>
                  </Fade>
                </Grid>
              )}
            </Grid>
          </Box>
        )}
      </Paper>

      {/* Note bar */}
      <Fade in style={{ transitionDelay: "500ms" }}>
        <Box
          sx={{
            p: 3,
            borderRadius: "20px",
            bgcolor: "rgba(232, 50, 42, 0.03)",
            borderLeft: `6px solid ${RED}`,
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <LocalFloristIcon sx={{ color: RED }} />
          <Box>
            <Typography sx={{ fontFamily: "Almarai", fontWeight: 800, color: "#2d3436" }} variant="body2">
              ملاحظة حول الحجم والتغليف:
            </Typography>
            <Typography sx={{ fontFamily: "Almarai", color: "#636e72", fontSize: "0.85rem" }}>
              يتم احتساب الوزن الحجمي إذا تجاوز الطرد 30سم. التغليف يبدأ من 10 د.ل ويضاف 0.33 د.ل لكل سم إضافي في أبعاد الطرد.
            </Typography>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
}
