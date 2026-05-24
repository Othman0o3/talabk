import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Button,
  Chip,
  Avatar,
  CircularProgress,
  Divider,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PhoneIcon from "@mui/icons-material/Phone";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import SearchOffIcon from "@mui/icons-material/SearchOff";

const RED = "#E8322A";
const font = { fontFamily: '"Almarai", sans-serif' };

// ─── Tracking steps definition ────────────────────────────────────────────────
const TRACKING_STEPS = [
  { label: "تحت الإجراء", icon: <HourglassEmptyIcon /> },
  { label: "قيد التنفيذ", icon: <AssignmentIcon /> },
  { label: "قيد الشحن", icon: <LocalShippingIcon /> },
  { label: "مكتمل", icon: <CheckCircleIcon /> },
];

// ─── Map Arabic status text to step index ─────────────────────────────────────
function statusToStep(status) {
  if (!status) return 0;
  const s = status.trim();
  if (s === "تحت الاجراء") return 0;
  if (s === "قيد التنفيذ") return 1;
  if (s === "قيد الشحن") return 2;
  if (s === "مكتمل" || s === "تم التسليم" || s === "تمت التسوية") return 3;
  if (s.includes("راجع") || s.includes("استرداد")) return 7; // returned
  return 0;
}

// ─── API URL ──────────────────────────────────────────────────────────────────
const TRACKING_API =
  "https://fvtion.com/API/talabk/get/OrderTracking.php?OrderID=";

export default function TrackingPage() {
  const { OrderID } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!OrderID) return;
    setLoading(true);

    fetch(`${TRACKING_API}${OrderID}`)
      .then((r) => r.json())
      .then((data) => {
        if (!data || data.length === 0 || data.error) {
          setOrder(null);
        } else {
          const latest = data[data.length - 1];
          setOrder({
            fullHistory: data,
            order_id: latest.OrderID,
            store_name: latest.StoreName || "غير محدد",
            status_text: latest.Status,
            status_code: statusToStep(latest.Status),
            delegate_name: latest.Delegate || "جاري التعيين",
            delegate_phone: latest.Phone || "",
            total_price: parseFloat(latest.TotalAmount || 0).toFixed(2),
            return_reason: latest.ReasonForReturn || "",
          });
        }
        setLoading(false);
      })
      .catch(() => {
        setOrder(null);
        setLoading(false);
      });
  }, [OrderID]);

  // ── Loading ──────────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mt={15}>
        <CircularProgress sx={{ color: RED }} size={60} />
        <Typography sx={{ mt: 2, ...font, fontWeight: "bold" }}>
          جاري جلب بيانات الشحنة...
        </Typography>
      </Box>
    );
  }

  // ── Not found ────────────────────────────────────────────────────────────────
  if (!order) {
    return (
      <Container maxWidth="sm" sx={{ mt: 10, textAlign: "center", direction: "rtl" }}>
        <Paper elevation={0} sx={{ p: 5, borderRadius: 4, border: "1px solid #E5E7EB", bgcolor: "#fff" }}>
          <SearchOffIcon sx={{ fontSize: 80, color: "#9CA3AF", mb: 2 }} />
          <Typography variant="h5" sx={{ ...font, fontWeight: "bold" }} gutterBottom>
            رقم الشحنة غير صحيح
          </Typography>
          <Typography sx={{ mb: 3, color: "#6B7280", ...font }}>
            لم نجد شحنة مسجلة برقم (<strong>{OrderID}</strong>). تأكد من الرقم وحاول مجدداً.
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/")}
            sx={{ bgcolor: "#1A1A1A", px: 4, py: 1.2, borderRadius: "10px", ...font }}
          >
            العودة للرئيسية
          </Button>
        </Paper>
      </Container>
    );
  }

  const isReturned = order.status_code === 7;

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 10, direction: "rtl" }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 5 },
          borderRadius: 4,
          border: "1px solid #E5E7EB",
          boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)",
        }}
      >
        {/* Header row */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4} flexWrap="wrap" gap={2}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 800, ...font, color: "#1A1A1A" }}>
              شحنة #{order.order_id}
            </Typography>
            <Typography variant="body1" sx={{ color: "#6B7280", ...font, mt: 1 }}>
              متجر: {order.store_name}
            </Typography>
          </Box>
          <Chip
            label={order.status_text}
            sx={{
              bgcolor: isReturned ? "#1A1A1A" : RED,
              color: "#fff",
              fontWeight: "bold",
              px: 2,
              py: 2.5,
              borderRadius: "8px",
              fontSize: "1rem",
              ...font,
            }}
          />
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* Returned state */}
        {isReturned ? (
          <Box
            textAlign="center"
            sx={{ bgcolor: "#FEF2F2", p: 4, borderRadius: 4, mb: 4, border: `1px solid ${RED}` }}
          >
            <AssignmentReturnIcon sx={{ fontSize: 60, color: RED, mb: 1 }} />
            <Typography variant="h5" sx={{ color: RED, fontWeight: "bold", ...font }}>
              تم إرجاع الشحنة
            </Typography>
            <Typography sx={{ mt: 1, ...font }}>
              السبب: {order.return_reason || "غير محدد"}
            </Typography>
          </Box>
        ) : (
          /* Progress Stepper */
          <Stepper activeStep={order.status_code} alternativeLabel sx={{ mb: 8 }}>
            {TRACKING_STEPS.map((step, i) => {
              const historyEntry = order.fullHistory.find(
                (h) => statusToStep(h.Status) === i
              );
              return (
                <Step key={step.label}>
                  <StepLabel
                    StepIconComponent={() => (
                      <Avatar
                        sx={{
                          width: 55,
                          height: 55,
                          bgcolor: i <= order.status_code ? RED : "#F3F4F6",
                          color: i <= order.status_code ? "#fff" : "#9CA3AF",
                          boxShadow: i === order.status_code ? "0 0 20px rgba(232, 50, 42, 0.3)" : "none",
                          border: i <= order.status_code ? "none" : "1px solid #E5E7EB",
                          transition: "all 0.3s ease",
                          animation: i === order.status_code ? "pulse 2s infinite" : "none",
                        }}
                      >
                        {step.icon}
                      </Avatar>
                    )}
                  >
                    <Typography
                      sx={{
                        ...font,
                        fontWeight: i === order.status_code ? 800 : 500,
                        color: i <= order.status_code ? "#1A1A1A" : "#9CA3AF",
                        mt: 1,
                      }}
                    >
                      {step.label}
                    </Typography>
                    {historyEntry && (
                      <Typography
                        variant="caption"
                        sx={{ color: "#6B7280", display: "block", mt: 0.5, fontSize: "0.7rem" }}
                      >
                        {historyEntry.Date}
                      </Typography>
                    )}
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
        )}

        {/* Delegate info (shown once order is picked up) */}
        {order.status_code >= 1 && !isReturned && (
          <Paper
            elevation={0}
            sx={{ p: 3, border: "1px solid #E5E7EB", borderRadius: 4, mb: 4, bgcolor: "#F9FAFB" }}
          >
            <Grid container alignItems="center" spacing={3}>
              <Grid item>
                <Avatar
                  sx={{ width: 65, height: 65, bgcolor: "#fff", border: `2px solid ${RED}`, color: RED }}
                >
                  <LocalShippingIcon sx={{ fontSize: 35 }} />
                </Avatar>
              </Grid>
              <Grid item xs>
                <Typography variant="caption" sx={{ color: RED, fontWeight: "bold", ...font }}>
                  مندوب التوصيل
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 800, ...font }}>
                  {order.delegate_name}
                </Typography>
                {order.delegate_phone && (
                  <Button
                    variant="text"
                    startIcon={<PhoneIcon sx={{ ml: 1 }} />}
                    href={`tel:${order.delegate_phone.replace(/[^0-9+]/g, "")}`}
                    sx={{ color: "#1A1A1A", fontWeight: "bold", p: 0, mt: 0.5, "&:hover": { color: RED } }}
                  >
                    {order.delegate_phone}
                  </Button>
                )}
              </Grid>
            </Grid>
          </Paper>
        )}

        {/* Total price bar */}
        <Box
          sx={{
            p: 3,
            bgcolor: "#1A1A1A",
            borderRadius: 4,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "#fff", ...font, fontWeight: 500 }}>
            إجمالي تكلفة الشحنة:
          </Typography>
          <Typography sx={{ color: "#fff", ...font, fontWeight: 800, fontSize: "1.5rem" }}>
            {order.total_price} <small>د.ل</small>
          </Typography>
        </Box>
      </Paper>

      {/* Pulse animation */}
      <style>{`
        @keyframes pulse {
          0%   { box-shadow: 0 0 0 0   rgba(232, 50, 42, 0.4); }
          70%  { box-shadow: 0 0 0 15px rgba(232, 50, 42, 0);   }
          100% { box-shadow: 0 0 0 0   rgba(232, 50, 42, 0);   }
        }
      `}</style>
    </Container>
  );
}
