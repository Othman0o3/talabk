import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Divider,
  Link as MuiLink,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const BLACK = "#111";
const RED = "rgb(219, 38, 42)";

const font = { fontFamily: '"Almarai", sans-serif' };

function SocialButton({ href, icon, color }) {
  return (
    <IconButton
      component="a"
      href={href}
      target="_blank"
      rel="noopener"
      sx={{
        bgcolor: color,
        color: "#fff",
        width: 36,
        height: 36,
        "&:hover": { bgcolor: color, opacity: 0.85 },
      }}
    >
      {icon}
    </IconButton>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: BLACK,
        pt: 8,
        pb: 4,
        borderTop: `4px solid ${RED}`,
        direction: "rtl",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent="space-between">
          {/* Brand / description */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 900, color: RED, mb: 2, ...font, letterSpacing: "-0.5px" }}
            >
              طلبك - Talabk | ديما قراب
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                ...font,
                lineHeight: 2,
                maxWidth: "380px",
                fontSize: "0.95rem",
              }}
            >
              الشركة الرائدة في مجال الخدمات اللوجستية والتوصيل داخل ليبيا. نحن لا ننقل الطرود
              فقط، بل ننقل الثقة ونربط المتاجر بعملائها بأعلى معايير الجودة والسرعة.
            </Typography>
          </Grid>

          {/* Quick links */}
          <Grid item xs={6} md={2}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 800, mb: 3, ...font, color: "#fff" }}
            >
              روابط سريعة
            </Typography>
            <Stack spacing={2}>
              {["الرئيسية", "خدماتنا", "أسعار التوصيل", "اتصل بنا"].map((label) => (
                <MuiLink
                  key={label}
                  href="#"
                  sx={{
                    color: "rgba(255, 255, 255, 0.6)",
                    textDecoration: "none",
                    ...font,
                    fontSize: "0.9rem",
                    transition: "0.3s",
                    "&:hover": { color: RED, paddingRight: "5px" },
                  }}
                >
                  {label}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 800, mb: 3, ...font, color: "#fff" }}
            >
              تواصل معنا
            </Typography>
            <Stack direction="row" spacing={1.5} sx={{ mb: 3 }}>
              <SocialButton
                href="https://www.facebook.com/talabk.Libya"
                icon={<FacebookIcon fontSize="small" />}
                color="#1877F2"
              />
              <SocialButton
                href="https://wa.me/218927716601"
                icon={<WhatsAppIcon fontSize="small" />}
                color="#25D366"
              />
              <SocialButton
                href="mailto:info@talabk.ly"
                icon={<EmailIcon fontSize="small" />}
                color="#EA4335"
              />
              <SocialButton
                href="tel:0927716601"
                icon={<PhoneIcon fontSize="small" />}
                color={RED}
              />
            </Stack>
            <Typography
              variant="body2"
              sx={{ ...font, color: "rgba(255, 255, 255, 0.5)" }}
            >
              المقر الرئيسي: طرابلس، ليبيا
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 8, mb: 4, bgcolor: "rgba(255, 255, 255, 0.1)" }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="caption"
            sx={{ ...font, color: "rgba(255, 255, 255, 0.4)", fontSize: "0.8rem" }}
          >
            جميع الحقوق محفوظة © {new Date().getFullYear()} شركة طلبك للخدمات اللوجستية
          </Typography>
          <Typography
            variant="caption"
            sx={{ ...font, color: "rgba(255, 255, 255, 0.4)", fontSize: "0.8rem" }}
          >
            تم التطوير بواسطة الفريق التقني للشركة
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
