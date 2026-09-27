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
import { shippingRates } from "../utils/deliveryData";

const RED = "#E8322A";
const GRADIENT = "linear-gradient(135deg, #E8322A 0%, #ff6b6b 100%)";

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
      <Box sx={{ height: "6px", background: color, borderRadius: "24px 24px 0 0" }} />

      <Box sx={{ textAlign: "center", p: 4 }}>
        <Box sx={{ display: "inline-flex", p: 2, borderRadius: "20px", background: color, mb: 3 }}>
          {icon}
        </Box>

        <Typography variant="h6" sx={{ fontFamily: "Almarai", fontWeight: 800, mb: 1 }}>
          {title}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "baseline", justifyContent: "center", my: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: 900, color, direction: "ltr" }}>
            {price || "—"}
          </Typography>
          <Typography variant="h6" sx={{ ml: 1, color: "#b2bec3" }}>
            د.ل
          </Typography>
        </Box>

        {withPackaging && packagingCost > 0 && (
          <Typography
            variant="caption"
            sx={{ color: "#2ecc71", fontWeight: 700, display: "block", mb: 1 }}
          >
            (شامل تغليف: {packagingCost.toFixed(2)} د.ل)
          </Typography>
        )}

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

// ─── Main Calculator ─────────────────────────────────────────────────────────
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

  const getSurchargeRate = (base) =>
    base <= 20 ? 2 : base <= 30 ? 2.5 : base <= 40 ? 3 : 3.5;

  const packagingCost = () => {
    if (!withPackaging) return 0;
    const { length, width, height, weight } = dims;

    const sortedDims = [length, width, height].sort((a, b) => b - a);

    if (weight <= 0.5 && sortedDims[0] <= 10 && sortedDims[1] <= 10 && sortedDims[2] <= 5) {
      return 1;
    }
    
    if (weight <= 3 && sortedDims[0] <= 20 && sortedDims[1] <= 20 && sortedDims[2] <= 15) {
      return 3;
    }
    
    return 5; 
  };

  const calcTotal = (basePrice) => {
    if (basePrice === undefined || basePrice === null) return null;

    const { length, width, height, weight } = dims;

    const exceedsDimensions = length > 30 || width > 30 || height > 30;
    const exceedsWeight = weight > 5;
    const applyVolumetric = exceedsDimensions || exceedsWeight;

    const calcSingleValue = (bp) => {
      let price = bp;
      let chargeableWeight = weight;

      if (applyVolumetric) {
        const volumeWeight = (length * width * height) / 5000;
        
        chargeableWeight = Math.max(weight, volumeWeight);
        
        price = bp + chargeableWeight * getSurchargeRate(bp);
      }

      return Math.ceil((price + packagingCost()) * 2) / 2;
    };

    const bpStr = basePrice.toString();
    
    if (bpStr.includes('.')) {
      const parts = bpStr.split('.');
      const p1 = Number(parts[0]);
      
      let p2Str = parts[1];
      if (p2Str.length === 1) p2Str += "0"; 
      
      const p2 = Number(p2Str);

      const total1 = calcSingleValue(p1);
      const total2 = calcSingleValue(p2);

      return `${total1} , ${total2}`;
    } else {
      return calcSingleValue(Number(basePrice));
    }
  };

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

        {destination && (
          <Box sx={{ mt: 7 }}>
            <Grid container spacing={3} justifyContent="center">
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

              {destination.branchPickup > 0 && (
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

              {destination.female > 0 && (
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
              ملاحظة حول الحجم والتغليف المعتمد:
            </Typography>
            <Typography sx={{ fontFamily: "Almarai", color: "#636e72", fontSize: "0.85rem" }}>
              يُطبق احتساب الوزن الحجمي إذا تجاوز الطرد 30 سم في أي من أبعاده أو زاد وزنه الفعلي عن 5 كجم. التغليف يتبع تسعيرة ثابتة (1، 3، أو 5 د.ل) بحسب الحجم والوزن الفعلي للشحنة.
            </Typography>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
}