import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Stack,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LockIcon from "@mui/icons-material/Lock";
import GavelIcon from "@mui/icons-material/Gavel";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DownloadIcon from "@mui/icons-material/Download";

const RED = "#db262a";
const font = { fontFamily: '"Almarai", sans-serif' };
const PDF_URL = "/files/policy.pdf";

// ─── Section: Shipping Policies ───────────────────────────────────────────────
function ShippingSection() {
  const deliveryTimes = [
    { region: "طرابلس الكبرى", time: "خلال 24 ساعة (تغطية شاملة لجميع المناطق والأحياء)." },
    { region: "المنطقة الغربية", time: "من 48 إلى 72 ساعة عمل (الزاوية، صرمان، صبراتة، زوارة وما بينها)." },
    { region: "المنطقة الوسطى", time: "من 2 إلى 5 أيام عمل (مصراتة والمناطق المجاورة)." },
    { region: "المنطقة الشرقية", time: "من 5 إلى 7 أيام عمل (بنغازي والمدن الرئيسية في الشرق)." },
    { region: "المنطقة الجبلية والجنوبية", time: "تتراوح من 3 إلى 10 أيام عمل حسب بعد المنطقة وصعوبة التضاريس." },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ ...font, fontWeight: 800, mb: 3, color: RED }}>
        سياسات ومدد الشحن
      </Typography>
      <Typography variant="body1" paragraph sx={{ ...font, lineHeight: 1.8 }}>
        تهدف هذه السياسة إلى توحيد عمليات الشحن والتوصيل وضمان الاتساق والجودة في تقديم الخدمة
        لكل الشركاء عبر جميع المناطق المغطاة.
      </Typography>

      <Typography variant="subtitle1" sx={{ ...font, fontWeight: 700, mt: 3, mb: 1 }}>
        • إجراءات تجهيز الشحنة:
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph sx={{ ...font, lineHeight: 1.7 }}>
        يتم استلام الشحنة في مقر طلبك أو عبر مندوب الاستلام، وتُفحص للتأكد من سلامة التغليف
        ومطابقة المحتوى قبل تصنيفها وفرزها. تبدأ المدة الرسمية للتوصيل من تاريخ ووقت الاستلام
        المسجل في النظام الإلكتروني.
      </Typography>

      <Typography variant="subtitle1" sx={{ ...font, fontWeight: 700, mt: 3, mb: 2 }}>
        • الجدول الزمني للتوصيل (أيام عمل فعلية):
      </Typography>
      <Stack spacing={2} sx={{ pr: 2, borderRight: `3px solid ${RED}` }}>
        {deliveryTimes.map(({ region, time }) => (
          <Box key={region}>
            <Typography variant="body2" sx={{ ...font, fontWeight: 800 }}>
              - {region}:
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={font}>
              {time}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

// ─── Section: Privacy & Tracking ─────────────────────────────────────────────
function PrivacySection() {
  return (
    <Box>
      <Typography variant="h5" sx={{ ...font, fontWeight: 800, mb: 3, color: RED }}>
        الخصوصية ونظام تتبع الشحنات
      </Typography>
      <Stack spacing={3}>
        <Box sx={{ p: 2, bgcolor: "#f9f9f9", borderRadius: 2, borderRight: `4px solid ${RED}` }}>
          <Typography variant="subtitle2" sx={{ ...font, fontWeight: 900, mb: 1 }}>
            نظام التتبع الإلكتروني
          </Typography>
          <Typography variant="body2" sx={{ ...font, lineHeight: 1.7, color: "#555" }}>
            • إشعار استلام فوري بالتكلفة والمدة المتوقعة.<br />
            • رقم تتبع فريد لكل شحنة لضمان الشفافية.<br />
            • إشعارات تلقائية عند تغيير حالة الشحنة.
          </Typography>
        </Box>
        <Box sx={{ p: 2, bgcolor: "#f9f9f9", borderRadius: 2 }}>
          <Typography variant="subtitle2" sx={{ ...font, fontWeight: 900, mb: 1 }}>
            حماية البيانات والخصوصية
          </Typography>
          <Typography variant="body2" sx={{ ...font, lineHeight: 1.7, color: "#555" }}>
            • <strong>مبدأ الحد الأدنى:</strong> نجمع فقط البيانات الضرورية لإتمام خدمة التوصيل.<br />
            • <strong>بيانات المستلمين:</strong> تُستخدم حصراً للتسليم وتُحذف بعد انتهاء دورة الشحنة.<br />
            • <strong>التخزين المشفر:</strong> السجلات محفوظة بمنظومة آمنة وصلاحيات مقيدة.<br />
            • <strong>حظر المشاركة:</strong> نمنع تماماً مشاركة البيانات مع أي طرف ثالث أو جهات تسويقية.<br />
            • <strong>فترة الاحتفاظ:</strong> نحتفظ بالسجلات لـ 3 سنوات لأغراض التدقيق لضمان حقوقكم.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

// ─── Section: Terms of Service ────────────────────────────────────────────────
function TermsSection() {
  const terms = [
    "تنتقل مسؤولية الشحنة إلى طلبك فور تسجيلها إلكترونياً واستلامها فعلياً من المرسل.",
    "يلتزم المرسل باستلام شحنته المرفوضة خلال 5 أيام عمل بعد انتهاء مهلة التسليم.",
    "يحظر شحن المواد الخطرة، المتفجرات، الأسلحة، الأحجار الكريمة، والذهب.",
    "الشركة غير مسؤولة قانونياً عن أي شحنة تحتوي مواد محظورة، ويتحمل المرسل كامل المسؤولية.",
    "المرسل مسؤول عن صحة البيانات، والبيانات الخاطئة التي تؤدي لتأخير تخلي مسؤوليتنا.",
    "تحتفظ طلبك بحق المسح الضوئي أو الفحص المادي لأي شحنة للتحقق من مطابقتها.",
    "لا تتحمل الشركة مسؤولية التأخير الناتج عن القوة القاهرة (كوارث، أوبئة، حروب).",
    "يجب تقديم مطالبات التعويض عن التلف خلال 48 ساعة من تاريخ المعاينة مرفقة بالصور.",
    "لا يُصرف التعويض إلا لمالك المتجر المسجل رسمياً أو لشخص مفوض بتوكيل رسمي.",
    "تحتفظ طلبك بحق مراجعة الأسعار وتطبيق ضريبة رواجع بحد أقصى 20% إذا تجاوزت المرتجعات 50%.",
    "السعر المعتمد للطرود القياسية (حتى 25×25×30 سم)، الطرود الأكبر تسعر بالوزن الحجمي.",
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ ...font, fontWeight: 800, mb: 3, color: RED }}>
        اتفاقية استخدام الخدمة
      </Typography>
      <Stack spacing={1.5}>
        {terms.map((term, i) => (
          <Paper
            key={i}
            elevation={0}
            sx={{ p: 2, bgcolor: "#fcfcfc", border: "1px solid #eee", display: "flex", gap: 2 }}
          >
            <Typography sx={{ fontWeight: 900, color: RED, ...font, minWidth: 24 }}>{i + 1}</Typography>
            <Typography variant="body2" sx={{ ...font, lineHeight: 1.6 }}>{term}</Typography>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}

// ─── Section: Returns Policy ──────────────────────────────────────────────────
function ReturnsSection() {
  const returnPolicies = [
    {
      title: "1. المرتجعات العادية (قبل التحرك):",
      body: (
        <>
          إذا لم يقم الزبون بالرد على اتصالات المندوب قبل التحرك، يتم إرجاع الشحنة لمتجركم{" "}
          <strong style={{ color: RED }}>مجاناً وبدون أي رسوم</strong>.
        </>
      ),
    },
    {
      title: "2. الوصول للموقع مع عدم الرد (داخل طرابلس):",
      body: (
        <>
          في حال وصول المندوب لموقع الزبون وامتناعه عن الرد أو الاستلام، يتم خصم{" "}
          <strong style={{ color: RED }}>50% فقط</strong> من رسوم التوصيل كتعويض تشغيلي.
        </>
      ),
    },
    {
      title: "3. الرفض أو عدم الرد (خارج طرابلس):",
      body: (
        <>
          يتم احتساب تكلفة{" "}
          <strong style={{ color: RED }}>"رحلة الذهاب" فقط</strong> على المتجر، وتتكفل الشركة
          بإرجاع الشحنة إلى طرابلس مجاناً.
        </>
      ),
    },
    {
      title: "4. الرفض لعدم المطابقة (خطأ المتجر):",
      body: (
        <>
          إذا تم رفض الشحنة لأن المنتج غير مطابق للمواصفات المطلوبة، يتحمل{" "}
          <strong style={{ color: RED }}>المتجر 100%</strong> من رسوم التوصيل، ولا يُحمل الزبون
          أي تكلفة.
        </>
      ),
    },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ ...font, fontWeight: 800, mb: 1, color: RED }}>
        سياسات المرتجعات
      </Typography>
      <Typography variant="body2" sx={{ ...font, mb: 4, color: "#666" }}>
        لضمان استمرار الخدمة بشفافية تامة وحفاظاً على حقوق جميع الأطراف:
      </Typography>
      <Stack spacing={3}>
        {returnPolicies.map(({ title, body }) => (
          <Box key={title} sx={{ borderRight: `4px solid ${RED}`, pr: 2 }}>
            <Typography sx={{ ...font, fontWeight: 800, fontSize: "1.1rem", color: "#333" }}>
              {title}
            </Typography>
            <Typography sx={{ ...font, color: "#555", mt: 1 }}>{body}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

// ─── Nav Item ─────────────────────────────────────────────────────────────────
function NavItem({ label, icon, active, onClick }) {
  return (
    <>
      <ListItem
        button
        selected={active}
        onClick={onClick}
        sx={{
          py: 2,
          bgcolor: active ? `${RED}10` : "transparent",
          "&:hover": { bgcolor: `${RED}08` },
        }}
      >
        <ListItemIcon sx={{ minWidth: 40, ml: 1 }}>
          {React.cloneElement(icon, { sx: { color: active ? RED : "#666" } })}
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography sx={{ ...font, fontWeight: active ? 800 : 400 }}>{label}</Typography>
          }
          sx={{ textAlign: "right" }}
        />
      </ListItem>
      <Divider />
    </>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ShippingPoliciesPage() {
  const [activeTab, setActiveTab] = useState("shipping");

  const tabs = [
    { key: "shipping", label: "سياسات الشحن", icon: <LocalShippingIcon /> },
    { key: "privacy", label: "الخصوصية والتتبع", icon: <LockIcon /> },
    { key: "terms", label: "اتفاقية الخدمة", icon: <GavelIcon /> },
    { key: "returns", label: "سياسات المرتجعات", icon: <AssignmentReturnIcon /> },
  ];

  const renderContent = () => {
    if (activeTab === "shipping") return <ShippingSection />;
    if (activeTab === "privacy") return <PrivacySection />;
    if (activeTab === "terms") return <TermsSection />;
    if (activeTab === "returns") return <ReturnsSection />;
  };

  return (
    <Box sx={{ direction: "rtl", py: 8, bgcolor: "#fbfbfb", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography variant="h4" sx={{ ...font, fontWeight: 900, mb: 3 }}>
            المركز القانوني و <span style={{ color: RED }}>السياسات</span>
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              startIcon={<OpenInNewIcon sx={{ ml: 1, mr: 0 }} />}
              href={PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ backgroundColor: RED, ...font, px: 4, "&:hover": { backgroundColor: "#b31e22" } }}
            >
              فتح الدليل الكامل في صفحة جديدة
            </Button>
            <Button
              variant="outlined"
              color="error"
              startIcon={<DownloadIcon sx={{ ml: 1, mr: 0 }} />}
              href={PDF_URL}
              download
              sx={{ ...font, px: 4 }}
            >
              تحميل الدليل PDF
            </Button>
          </Stack>
        </Box>

        <Grid container spacing={4}>
          {/* Sidebar Nav */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{ borderRadius: 3, border: "1px solid #eee", overflow: "hidden", position: "sticky", top: 100 }}
            >
              <List component="nav" sx={{ p: 0 }}>
                {tabs.map(({ key, label, icon }) => (
                  <NavItem
                    key={key}
                    label={label}
                    icon={icon}
                    active={activeTab === key}
                    onClick={() => setActiveTab(key)}
                  />
                ))}
              </List>
            </Paper>
          </Grid>

          {/* Content Area */}
          <Grid item xs={12} md={8}>
            <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, border: "1px solid #eee" }}>
              {renderContent()}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
