import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FlagIcon from "@mui/icons-material/Flag";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const colors = { red: "#E8322A", black: "#111111", white: "#FFFFFF" };
const font = { fontFamily: '"Almarai", sans-serif' };

const values = [
  { title: "القُرب",    desc: "ديما قراب — لسنا بعيدين عن تجارنا." },
  { title: "الأمانة",   desc: "طلبك عهد لا مجرد عقد نلتزم به." },
  { title: "التمكين",   desc: "نحرر التاجر من قيود العمليات اللوجستية." },
  { title: "الانضباط",  desc: "نعد بالقليل وننفذ الكثير بدقة متناهية." },
  { title: "الجسر",     desc: "نربط السوق الليبي بالمنظومة العالمية." },
];

const branches = [
  { city: "طرابلس",  loc: "بن عاشور (المقر الرئيسي)" },
  { city: "مصراتة",  loc: "وسط المدينة" },
  {city: "بنغازي", loc: "شلرع الاندلس"},
  { city: "سبها",    loc: "وسط المدينة" },
  { city: "غريان",   loc: "الشارع الرئيسي" },
];

export default function AboutUsPage() {
  return (
    <Box sx={{ direction: "rtl", bgcolor: colors.white, minHeight: "100vh", ...font }}>
      {/* ── Hero ── */}
      <Box sx={{ bgcolor: colors.black, color: colors.white, pt: 12, pb: 10, textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography
            variant="overline"
            sx={{ ...font, color: colors.red, fontWeight: 700, letterSpacing: 1.5, fontSize: "1rem" }}
          >
            عن طلبك للخدمات اللوجستية
          </Typography>
          <Typography variant="h3" sx={{ ...font, fontWeight: 800, mt: 2, mb: 3, lineHeight: 1.3 }}>
            نُمكّن التجار من النمو{" "}
            <span style={{ color: colors.red }}>بلا حدود</span>
          </Typography>
          <Typography
            variant="h6"
            sx={{ ...font, color: "rgba(255,255,255,0.7)", maxWidth: "650px", mx: "auto", fontWeight: 400 }}
          >
            نحن الشريك اللوجستي الأقرب إليك، نبني الجسور التي تربط تجارتك بكل ركن في ليبيا.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -5 }}>
        {/* ── Vision & Mission ── */}
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={5}>
            <Paper
              elevation={4}
              sx={{ p: 4, textAlign: "center", borderRadius: 0, height: "100%", borderTop: `5px solid ${colors.red}` }}
            >
              <VisibilityIcon sx={{ color: colors.red, fontSize: 50, mb: 2 }} />
              <Typography variant="h5" sx={{ ...font, fontWeight: 800, mb: 2 }}>رؤيتنا</Typography>
              <Typography variant="body1" sx={{ ...font, color: colors.black, lineHeight: 1.8 }}>
                أن نكون المنصة اللوجستية الأقرب إلى كل تاجر ليبي، والجسر الذي يربط السوق المحلي
                بالاقتصاد الرقمي العالمي.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={5}>
            <Paper
              elevation={4}
              sx={{ p: 4, textAlign: "center", borderRadius: 0, height: "100%", borderTop: `5px solid ${colors.black}` }}
            >
              <FlagIcon sx={{ color: colors.black, fontSize: 50, mb: 2 }} />
              <Typography variant="h5" sx={{ ...font, fontWeight: 800, mb: 2 }}>رسالتنا</Typography>
              <Typography variant="body1" sx={{ ...font, color: colors.black, lineHeight: 1.8 }}>
                تمكين المتاجر الإلكترونية من خلال منظومة متكاملة (تخزين، توصيل، تحصيل) بشراكة
                حقيقية وقرب دائم.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* ── Core Values ── */}
        <Box sx={{ mt: 12, textAlign: "center" }}>
          <Typography variant="h4" sx={{ ...font, fontWeight: 800, mb: 1 }}>
            قيمنا الجوهرية
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: colors.red, mx: "auto", mb: 6 }} />

          <Grid container spacing={2} justifyContent="center">
            {values.map(({ title, desc }, i) => (
              <Grid item xs={12} sm={6} md={2.3} key={i}>
                <Paper
                  variant="outlined"
                  sx={{
                    p: 3,
                    textAlign: "center",
                    borderRadius: 0,
                    transition: "0.3s",
                    cursor: "default",
                    "&:hover": { bgcolor: colors.black, color: colors.white },
                  }}
                >
                  <Typography variant="h6" sx={{ ...font, fontWeight: 800, mb: 1 }}>
                    {title}
                  </Typography>
                  <Typography variant="body2" sx={font}>
                    {desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ── Branches ── */}
        <Box sx={{ mt: 12, textAlign: "center", mb: 10 }}>
          <Typography variant="h4" sx={{ ...font, fontWeight: 800, mb: 1 }}>
            فروعنا وتغطيتنا
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: colors.red, mx: "auto", mb: 6 }} />

          <Grid container spacing={3} justifyContent="center">
            {branches.map(({ city, loc }, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Stack alignItems="center" spacing={1}>
                  <LocationOnIcon sx={{ color: colors.red, fontSize: 35 }} />
                  <Typography variant="h6" sx={{ ...font, fontWeight: 800 }}>
                    {city}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={font}>
                    {loc}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
