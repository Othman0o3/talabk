import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Stack,
  Button,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import GavelIcon from "@mui/icons-material/Gavel";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import BlockIcon from "@mui/icons-material/Block";
import SecurityIcon from "@mui/icons-material/Security";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DownloadIcon from "@mui/icons-material/Download";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const RED = "#db262a";
const font = { fontFamily: '"Almarai", sans-serif' };
const PDF_URL = "/files/policy.pdf";

// ─── Reusable Warning Box ─────────────────────────────────────────────────────
function WarningBox({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1.5,
        p: 2,
        bgcolor: "#fff8f8",
        border: `1px solid ${RED}`,
        borderRadius: 2,
        mt: 2,
      }}
    >
      <WarningAmberIcon sx={{ color: RED, flexShrink: 0, mt: 0.2 }} />
      <Typography variant="body2" sx={{ ...font, color: "#333", lineHeight: 1.7 }}>
        {children}
      </Typography>
    </Box>
  );
}

// ─── Reusable Numbered Step ───────────────────────────────────────────────────
function StepItem({ index, title, desc }) {
  return (
    <Box sx={{ display: "flex", gap: 2, p: 2, bgcolor: "#f9f9f9", borderRadius: 2 }}>
      <Box
        sx={{
          minWidth: 28,
          height: 28,
          borderRadius: "50%",
          bgcolor: RED,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "0.75rem", fontWeight: 700, ...font }}>
          {index}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ ...font, fontWeight: 800 }}>
          {title}
        </Typography>
        {desc && (
          <Typography variant="body2" color="text.secondary" sx={{ ...font, mt: 0.5 }}>
            {desc}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

// ─── Section 1: Shipping Policies ─────────────────────────────────────────────
function ShippingSection() {
  const deliveryTimes = [
    {
      region: "طرابلس الكبرى",
      time: "خلال 24 ساعة",
      coverage: "كل أحياء ومناطق طرابلس — أولوية قصوى",
    },
    {
      region: "المنطقة الغربية",
      time: "48 – 72 ساعة عمل",
      coverage: "الزاوية، صرمان، صبراتة، زوارة وما بينها",
    },
    {
      region: "المنطقة الوسطى",
      time: "2 – 5 أيام عمل",
      coverage: "مصراتة وما يصلها من مناطق",
    },
    {
      region: "المنطقة الشرقية",
      time: "2 – 5 أيام عمل",
      coverage: "بنغازي، البيضاء، شحات، طبرق والمدن المجاورة",
    },
    {
      region: "المنطقة الجبلية الغربية",
      time: "24 – 72 ساعة عمل",
      coverage: "غريان، يفرن، جادو، نالوت وكامل الجبل الغربي",
    },
    {
      region: "المنطقة الجنوبية",
      time: "7 – 10 أيام عمل",
      coverage: "سبها، براك الشاطئ، مرزق وضواحيها",
    },
  ];

  const procedures = [
    {
      title: "استلام الشحنة",
      desc: "يتم الاستلام في مقر طلبك أو عبر مندوب الاستلام. يُوقع وصل استلام ويُسجل رقم التتبع فوراً.",
    },
    {
      title: "الفحص والتحقق",
      desc: "تفحص الشحنة للتأكد من سلامة التغليف، مطابقة المحتوى للبيان، وعدم احتواء مواد محظورة.",
    },
    {
      title: "التصنيف والفرز",
      desc: "تصنف الشحنات حسب المنطقة الجغرافية، أولوية التوصيل، طبيعة المنتج.",
    },
    {
      title: "بدء مدة التوصيل",
      desc: "تبدأ المدة الرسمية من تاريخ ووقت الاستلام المسجل في النظام الإلكتروني — المرجع الملزم في النزاعات.",
    },
    {
      title: "التوثيق والإغلاق",
      desc: "تغلق الشحنة إلكترونياً عند التسليم مع تسجيل توقيع المستلم والوقت وموقع GPS.",
    },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ ...font, fontWeight: 800, mb: 3, color: RED }}>
        سياسات ومدد الشحن
      </Typography>
      <Typography variant="body1" paragraph sx={{ ...font, lineHeight: 1.8 }}>
        تهدف هذه السياسة إلى توحيد عمليات الشحن والتوصيل وضمان الاتساق والجودة في تقديم الخدمة
        لكل الشركاء عبر جميع المناطق المغطاة. تُعدّ هذه الوثيقة جزءًا من نظام إدارة الجودة
        لشركة طلبك وفق ISO 9001:2015.
      </Typography>

      {/* Processing Procedures */}
      <Typography variant="subtitle1" sx={{ ...font, fontWeight: 700, mt: 3, mb: 2 }}>
        • إجراءات تجهيز الشحنة:
      </Typography>
      <Stack spacing={1.5}>
        {procedures.map(({ title, desc }, i) => (
          <StepItem key={title} index={i + 1} title={title} desc={desc} />
        ))}
      </Stack>

      {/* Delivery Schedule */}
      <Typography variant="subtitle1" sx={{ ...font, fontWeight: 700, mt: 4, mb: 2 }}>
        • الجدول الزمني للتوصيل (حسب المنطقة الجغرافية):
      </Typography>
      <Stack spacing={2} sx={{ pr: 2, borderRight: `3px solid ${RED}` }}>
        {deliveryTimes.map(({ region, time, coverage }) => (
          <Box key={region}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <Typography variant="body2" sx={{ ...font, fontWeight: 800 }}>
                {region}
              </Typography>
              <Chip
                label={time}
                size="small"
                sx={{ bgcolor: `${RED}15`, color: RED, fontWeight: 700, ...font }}
              />
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ ...font, mt: 0.3 }}>
              {coverage}
            </Typography>
          </Box>
        ))}
      </Stack>

      <WarningBox>
        المدد المذكورة أيام عمل فعلية. أي انحراف يُوثَّق في تقرير عدم المطابقة (NCR) ويُبلَّغ
        العميل فورًا.
      </WarningBox>

      {/* Volumetric Weight */}
      <Typography variant="subtitle1" sx={{ ...font, fontWeight: 700, mt: 4, mb: 2 }}>
        • سياسة الوزن الحجمي والأبعاد الكبيرة:
      </Typography>
      <Box sx={{ p: 2.5, bgcolor: "#f9f9f9", borderRadius: 2, borderRight: `4px solid ${RED}` }}>
        <Typography variant="body2" sx={{ ...font, lineHeight: 2, color: "#555" }}>
          يُطبَّق الوزن الحجمي عند تجاوز أي بُعد من أبعاد الطرد{" "}
          <strong>30 سم</strong> أو تجاوز الوزن الفعلي{" "}
          <strong>5 كيلوغرامات</strong>.
          <br />
          <strong>المعادلة:</strong> الوزن الحجمي (كغ) = الطول × العرض × الارتفاع (سم) ÷ 5,000
          <br />
          يُستخدم <strong>الأعلى</strong> من القيمتين — الوزن الفعلي أو الحجمي — أساسًا لاحتساب
          رسوم الشحن.
        </Typography>
      </Box>
      <WarningBox>
        البيانات المُدخَلة في النظام هي المرجع الملزم. الأبعاد أو الوزن الخاطئ من المتجر يُخلي
        مسؤولية طلبك عن الفرق.
      </WarningBox>
    </Box>
  );
}

// ─── Section 2: Terms of Service ──────────────────────────────────────────────
function TermsSection() {
  const terms = [
    "إقرار صحة بيانات المنتج: المتجر مسؤول مسؤولية كاملة عن صحة وصف محتوى الشحنة في النظام الإلكتروني. عدم مطابقة الوصف للمحتوى الفعلي يُحمّل المتجر وحده جميع العواقب القانونية والمالية.",
    "سلامة المنتج: المتجر مسؤول عن ضمان أن منتجاته آمنة وصالحة. طلبك وسيط نقل فحسب ولا تتحمل مسؤولية جودة المنتج أو ملاءمته للاستخدام، وأي شكوى تتعلق بجودة المنتج تُحوَّل مباشرة للمتجر المُصدِر.",
    "الامتثال للقانون: يتعهد المتجر بعدم شحن أي منتج محظور أو مخالف للقوانين. وفي حال ضبط شحنة مخالفة، يتحمل المتجر وحده كامل المسؤولية الجنائية والمدنية.",
    "فحص الشحنات: تحتفظ طلبك بحق الفحص البصري والمادي لكل شحنة عند الاستلام للتأكد من التغليف، الأوزان، الأبعاد، وعدم وجود مواد محظورة.",
    "تواريخ الصلاحية: لا تقبل طلبك شحن أي منتج تبقّى على تاريخ انتهاء صلاحيته 90 يومًا (3 أشهر) أو أقل من تاريخ التسليم. هذا الشرط إلزامي وغير قابل للاستثناء.",
    "حد التعويض: الحد الأقصى للتعويض هو قيمة رسوم الشحن المدفوعة فقط (ما لم يكن المتجر مشتركاً في التأمين). طلبك غير مسؤولة عن الخسائر التجارية أو الأرباح الفائتة أو الأضرار المعنوية.",
    "القوة القاهرة: حالات القوة القاهرة (كوارث، حروب، أوبئة، حرائق) تعلّق الالتزامات مع إبلاغ فوري للعميل.",
    "تجميع الطلبيات: لا تطبق أي رسوم تجميع إضافية على 3 طلبيات أو أكثر في الرحلة الواحدة. لأقل من 3 طلبيات، تُطبق رسوم تجميع تعادل 50% من رسوم التوصيل العادية للوجهة.",
    "الاختصاص القضائي: تخضع جميع العلاقات التعاقدية والنزاعات للقانون الليبي النافذ حصراً. وفي حال تعذر الحل الودي، ينعقد الاختصاص القضائي الحصري للمحاكم الليبية المختصة في مدينة طرابلس.",
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ ...font, fontWeight: 800, mb: 3, color: RED }}>
        اتفاقية استخدام الخدمة (الأحكام العامة)
      </Typography>
      <Typography variant="body2" sx={{ ...font, mb: 4, color: "#666", lineHeight: 1.8 }}>
        استخدام خدمات منصة طلبك يُعد قبولاً صريحاً وغير مشروط لجميع بنود هذه السياسة وما يتفرع
        منها. بتسليم أي شحنة لطلبك يقر المتجر بالبنود التالية:
      </Typography>
      <Stack spacing={1.5}>
        {terms.map((term, i) => (
          <Paper
            key={i}
            elevation={0}
            sx={{
              p: 2,
              bgcolor: "#fcfcfc",
              border: "1px solid #eee",
              display: "flex",
              gap: 2,
            }}
          >
            <Typography sx={{ fontWeight: 900, color: RED, ...font, minWidth: 24 }}>
              {i + 1}
            </Typography>
            <Typography variant="body2" sx={{ ...font, lineHeight: 1.6 }}>
              {term}
            </Typography>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}

// ─── Section 3: Returns Policy ────────────────────────────────────────────────
function ReturnsSection() {
  const scenarios = [
    {
      title: "1. لم يرد قبل التحرك",
      cost: "مجانًا",
      highlight: false,
      body: "بعد محاولتين على الأقل من المندوب قبل التحرك (مسجلتان في النظام)، تعاد الشحنة مجاناً وتوثق الحادثة.",
    },
    {
      title: "2. وصول للموقع (طرابلس) ورفض الاستلام أو لم يرد",
      cost: "مجانًا",
      highlight: false,
      body: "توثق الحادثة في تقرير NCR، وتعاد الشحنة مجاناً. تتكفل طلبك بكامل رسوم العودة.",
    },
    {
      title: "3. وصل المدينة (خارج طرابلس) ورفض الاستلام أو لم يرد",
      cost: "رسوم الذهاب فقط",
      highlight: false,
      body: "يتحمل المتجر رسوم رحلة الذهاب فقط، بينما تتكفل طلبك بإعادة الشحنة لطرابلس بدون أي رسوم إضافية.",
    },
    {
      title: "4. رفض الاستلام — خطأ المتجر (المنتج لا يطابق)",
      cost: "100% على المتجر",
      highlight: true,
      body: "إذا رفض الزبون الاستلام لأن المنتج لا يطابق ما طلبه، يتحمل المتجر 100% من رسوم التوصيل. لا تُحمَّل الزبون أي تكلفة.",
    },
  ];

  const processingSteps = [
    {
      title: "الاستلام",
      desc: "تسجيل المرتجع إلكترونياً مع رقم التتبع، سبب الإرجاع، وحالة التغليف الظاهرية في النظام.",
    },
    {
      title: "الفحص",
      desc: "فحص الحالة: سليم / تالف / مشبوه — مع توثيق فوتوغرافي وإرفاق الصور بالملف وفق GDP.",
    },
    {
      title: "التصنيف",
      desc: "تحديد مسار المرتجع: إعادة للمتجر، حجز للتحقيق، أو إعدام — قرار مدير العمليات.",
    },
    {
      title: "الإخطار",
      desc: "إبلاغ المتجر بحالة المرتجع والرسوم المستحقة (إن وجدت) خلال 24 ساعة من الاستلام.",
    },
    {
      title: "الإغلاق",
      desc: "تحليل السبب الجذري وتسجيل الإجراء التصحيحي لمنع التكرار وفق ISO 10.2.",
    },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ ...font, fontWeight: 800, mb: 1, color: RED }}>
        سياسات المرتجعات
      </Typography>
      <Typography variant="body2" sx={{ ...font, mb: 4, color: "#666" }}>
        يتم تحديد مسار وتكلفة المرتجعات بناءً على السيناريو التشغيلي والحالة الموثقة في النظام:
      </Typography>

      {/* Scenarios */}
      <Stack spacing={3}>
        {scenarios.map(({ title, cost, highlight, body }) => (
          <Box key={title} sx={{ borderRight: `4px solid ${RED}`, pr: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 1,
                mb: 0.5,
              }}
            >
              <Typography sx={{ ...font, fontWeight: 800, fontSize: "1rem", color: "#333" }}>
                {title}
              </Typography>
              <Chip
                label={cost}
                size="small"
                sx={{
                  bgcolor: highlight ? RED : `${RED}15`,
                  color: highlight ? "#fff" : RED,
                  fontWeight: 700,
                  ...font,
                }}
              />
            </Box>
            <Typography variant="body2" sx={{ ...font, color: "#555" }}>
              {body}
            </Typography>
          </Box>
        ))}
      </Stack>

      {/* 5-Step Processing Flow */}
      <Typography variant="subtitle1" sx={{ ...font, fontWeight: 700, mt: 4, mb: 2 }}>
        • إجراء معالجة المرتجعات — 5 خطوات موثَّقة:
      </Typography>
      <Stack spacing={1.5}>
        {processingSteps.map(({ title, desc }, i) => (
          <StepItem key={title} index={i + 1} title={title} desc={desc} />
        ))}
      </Stack>

      {/* Food Returns Protocol */}
      <Box
        sx={{
          mt: 4,
          p: 2.5,
          bgcolor: "#fff8f8",
          border: `1px solid ${RED}`,
          borderRadius: 2,
        }}
      >
        <Typography variant="subtitle2" sx={{ ...font, fontWeight: 900, mb: 1.5, color: RED }}>
          ⚠ المرتجعات الغذائية — بروتوكول طارئ
        </Typography>
        <Typography variant="body2" sx={{ ...font, color: "#555", lineHeight: 2 }}>
          المواد الغذائية غير المستلَمة تُعامَل كحالة طارئة — وقت الاستجابة القصوى{" "}
          <strong>ساعة واحدة</strong>، والإعادة خلال ساعتين كحد أقصى:
          <br />• <strong>الطعام لا يزال صالحاً:</strong> إعادة فورية للمتجر ورسوم إعادة التوصيل
          على المتجر.
          <br />• <strong>الطعام فاسد أو مشكوك فيه:</strong> إعدام صحي فوري وفق اللوائح الصحية
          الليبية — رسوم الإعدام والتوصيل كاملةً على المتجر المرسِل.
          <br />• <strong>المتجر غير متاح:</strong> قرار الإعدام يُنفَّذ خلال ساعتين دون انتظار
          الرد، ويُبلَّغ المتجر فور التنفيذ.
        </Typography>
      </Box>
    </Box>
  );
}

// ─── Section 4: Prohibited Items ──────────────────────────────────────────────
function ProhibitedSection() {
  const prohibited = [
    {
      cat: "الأسلحة والمتفجرات",
      desc: "جميع أنواع الأسلحة النارية والبيضاء والمقذوفات والذخائر والمتفجرات.",
    },
    {
      cat: "المخدرات والمؤثرات",
      desc: "بجميع أصنافها، المؤثرات العقلية، والمواد المُهلِّسة.",
    },
    {
      cat: "مواد خطرة",
      desc: "المواد الكيميائية الخطرة، السموم، الإشعاعيات، والمواد القابلة للاشتعال.",
    },
    {
      cat: "العملات والمعادن",
      desc: "العملات الورقية والمعدنية، الذهب، الفضة، الأحجار الكريمة (بدون توثيق جمركي).",
    },
    {
      cat: "كائنات ومواد حية",
      desc: "الحيوانات الحية بجميع أنواعها، الرفات، الأعضاء البشرية، والمواد البيولوجية.",
    },
    {
      cat: "مواد مخالفة للقانون",
      desc: "المواد الإباحية وأي مواد مخالفة للنظام العام والقانون الليبي النافذ.",
    },
  ];

  const conditional = [
    {
      cat: "الأدوية والمستلزمات الطبية",
      req: "ترخيص صيدلي ساري + بيان المنتج + صلاحية 90 يومًا على الأقل.",
    },
    {
      cat: "المواد الغذائية الحساسة",
      req: "تاريخ إنتاج وانتهاء صلاحية واضح + تغليف مانع للتسرب.",
    },
    {
      cat: "المواد الكيميائية المرخصة",
      req: "إفصاح صريح عن طبيعة المادة + تغليف مانع للتسرب.",
    },
    {
      cat: "البضائع المستوردة",
      req: "بيان جمركي + وثائق الاستيراد السارية.",
    },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ ...font, fontWeight: 800, mb: 3, color: RED }}>
        المواد المحظورة والاشتراطات الخاصة
      </Typography>

      <Typography variant="subtitle1" sx={{ ...font, fontWeight: 700, mb: 2 }}>
        • محظورة حظرًا مطلقًا:
      </Typography>
      <Stack spacing={1.5}>
        {prohibited.map(({ cat, desc }) => (
          <Box
            key={cat}
            sx={{
              display: "flex",
              gap: 2,
              p: 2,
              bgcolor: "#fff8f8",
              border: "1px solid #f5c6c7",
              borderRadius: 2,
            }}
          >
            <BlockIcon sx={{ color: RED, flexShrink: 0, mt: 0.2, fontSize: "1.1rem" }} />
            <Box>
              <Typography variant="body2" sx={{ ...font, fontWeight: 800, color: "#333" }}>
                {cat}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ ...font, mt: 0.3 }}>
                {desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>

      <Typography variant="subtitle1" sx={{ ...font, fontWeight: 700, mt: 4, mb: 1 }}>
        • تُقبل باشتراطات خاصة:
      </Typography>
      <Stack spacing={1.5}>
        {conditional.map(({ cat, req }) => (
          <Paper
            key={cat}
            elevation={0}
            sx={{ p: 2, bgcolor: "#fcfcfc", border: "1px solid #eee" }}
          >
            <Typography
              variant="body2"
              sx={{ ...font, fontWeight: 800, color: "#333", mb: 0.5 }}
            >
              {cat}
            </Typography>
            <Typography variant="body2" sx={{ ...font, color: "#555" }}>
              <span style={{ color: RED, fontWeight: 700 }}>الاشتراط: </span>
              {req}
            </Typography>
          </Paper>
        ))}
      </Stack>

      <WarningBox>
        الشحنات المشبوهة تُوقَّف فورًا وتُبلَّغ الجهات الأمنية المختصة. المتجر المرسِل يتحمل
        كامل المسؤولية.
      </WarningBox>
    </Box>
  );
}

// ─── Section 5: Complaints, Insurance & SLA ───────────────────────────────────
function InsuranceSection() {
  const insuranceLevels = [
    {
      level: "بدون تأمين (افتراضي)",
      comp: "رسوم الشحن فقط",
      highlight: false,
      details:
        "التعويض = رسوم الشحن فقط بصرف النظر عن قيمة المنتج. لا يلزم إعلان مسبق.",
    },
    {
      level: "تأمين أساسي — حتى 500 د.ل",
      comp: "حتى 500 د.ل",
      highlight: true,
      details:
        "تعويض كامل حتى 500 د.ل عند التلف الكلي أو الفقدان. يُدفع القسط عند تسجيل الشحنة.",
    },
    {
      level: "تأمين موسَّع — حتى 2,000 د.ل",
      comp: "حتى 2,000 د.ل",
      highlight: true,
      details:
        "تعويض حتى 2,000 د.ل. يستلزم إعلان القيمة مسبقًا وتقديم فاتورة الشراء عند المطالبة.",
    },
  ];

  const slaSteps = [
    {
      phase: "الرد الأولي",
      time: "24 ساعة",
      responsible: "فريق خدمة الشركاء (رد مبدئي بالاستلام)",
    },
    {
      phase: "التحقيق والفحص",
      time: "72 ساعة",
      responsible: "ضابط الجودة (تحقيق ميداني وجمع أدلة)",
    },
    {
      phase: "القرار النهائي",
      time: "5 أيام عمل",
      responsible: "مدير العمليات (قرار بقبول أو رفض التعويض)",
    },
    {
      phase: "صرف التعويض",
      time: "7 أيام",
      responsible: "المدير المالي (تحويل للحساب من تاريخ القرار)",
    },
    {
      phase: "إغلاق الشكوى",
      time: "10 أيام عمل",
      responsible: "ضابط الجودة (تحليل السبب الجذري والتصحيح)",
    },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ ...font, fontWeight: 800, mb: 3, color: RED }}>
        الشكاوى والتعويضات والتأمين
      </Typography>

      {/* SLA Table */}
      <Typography variant="subtitle1" sx={{ ...font, fontWeight: 700, mb: 2 }}>
        • جدول معالجة الشكاوى والتعويضات (SLA):
      </Typography>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{ border: "1px solid #eee", mb: 4, borderRadius: 2 }}
      >
        <Table size="small">
          <TableHead sx={{ bgcolor: "#f9f9f9" }}>
            <TableRow>
              <TableCell sx={{ ...font, fontWeight: 800, py: 1.5 }}>مرحلة المعالجة</TableCell>
              <TableCell sx={{ ...font, fontWeight: 800 }}>المهلة القصوى</TableCell>
              <TableCell sx={{ ...font, fontWeight: 800 }}>المسؤول والتوثيق</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slaSteps.map((row, i) => (
              <TableRow key={i}>
                <TableCell sx={{ ...font, fontWeight: 700 }}>{row.phase}</TableCell>
                <TableCell sx={{ ...font, color: RED, fontWeight: 700 }}>{row.time}</TableCell>
                <TableCell sx={{ ...font, color: "#555" }}>{row.responsible}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Insurance Levels */}
      <Typography variant="subtitle1" sx={{ ...font, fontWeight: 700, mb: 2 }}>
        • خيارات التأمين على الشحنات:
      </Typography>
      <Stack spacing={2}>
        {insuranceLevels.map(({ level, comp, highlight, details }) => (
          <Box
            key={level}
            sx={{
              p: 2.5,
              borderRadius: 2,
              border: highlight ? `2px solid ${RED}` : "1px solid #eee",
              bgcolor: highlight ? "#fff8f8" : "#fcfcfc",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 1,
                mb: 1,
              }}
            >
              <Typography variant="body2" sx={{ ...font, fontWeight: 800, color: "#333" }}>
                {level}
              </Typography>
              <Chip
                label={comp}
                size="small"
                sx={{
                  bgcolor: highlight ? RED : "#eee",
                  color: highlight ? "#fff" : "#555",
                  fontWeight: 700,
                  ...font,
                }}
              />
            </Box>
            <Typography variant="body2" sx={{ ...font, color: "#555", lineHeight: 1.7 }}>
              {details}
            </Typography>
          </Box>
        ))}
      </Stack>

      <Box sx={{ p: 2, bgcolor: "#f9f9f9", borderRadius: 2, mt: 2 }}>
        <Typography variant="body2" sx={{ ...font, color: "#555", lineHeight: 2 }}>
          <strong>التأمين يغطي:</strong> التلف الكلي، الفقدان الموثق، الضرر الناتج عن إهمال
          مُثبَت. مطالبات التلف تستلزم إبلاغ خلال 48 ساعة.
          <br />
          <strong>لا مسؤولية على طلبك في حالات:</strong> القوة القاهرة، بيانات المتجر الخاطئة،
          أو التغليف السيء من المتجر.
        </Typography>
      </Box>
    </Box>
  );
}

// ─── Section 6: Additional Services (Packaging & Showroom) ────────────────────
function ServicesSection() {
  const packaging = [
    {
      level: "تغليف عادي - صغير",
      price: "1 د.ل",
      desc: "للمنتجات حتى 0.5 كغ والأبعاد 10×10×5 سم (اكسسوارات وقطع صغيرة).",
    },
    {
      level: "تغليف عادي - متوسط",
      price: "3 د.ل",
      desc: "للمنتجات حتى 3 كغ والأبعاد 20×20×15 سم (ملابس، عبوات).",
    },
    {
      level: "تغليف عادي - كبير",
      price: "5 د.ل",
      desc: "للمنتجات التي تتجاوز الأوزان أعلاه، أو تستلزم حماية من الصدمات.",
    },
    {
      level: "تغليف الهدايا أو الفاخر",
      price: "بالاتفاق",
      desc: "صندوق فاخر، ورق تيشو، كارت، وريبون للمناسبات والعلامات المميزة.",
    },
  ];

  const showrooms = [
    {
      pkg: "باقة علاق 9 أصناف",
      tripoli: "195 د.ل",
      benghazi: "234 د.ل",
      includes: "علاق 9 أصناف + 1 متر تخزين مجاني",
    },
    {
      pkg: "باقة علاق 14 صنف",
      tripoli: "250 د.ل",
      benghazi: "300 د.ل",
      includes: "علاق 14 صنف + 1 متر تخزين مجاني",
    },
    {
      pkg: "باقة علاق 25 صنف",
      tripoli: "400 د.ل",
      benghazi: "480 د.ل",
      includes: "علاق 25 صنف + 1 متر تخزين مجاني",
    },
    {
      pkg: "رف عرض صغير",
      tripoli: "250 د.ل",
      benghazi: "300 د.ل",
      includes: "رف عرض صغير + 1 متر تخزين مجاني",
    },
    {
      pkg: "رف عرض كبير",
      tripoli: "350 د.ل",
      benghazi: "420 د.ل",
      includes: "رف عرض كبير + 1 متر تخزين مجاني",
    },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ ...font, fontWeight: 800, mb: 3, color: RED }}>
        خدمات التغليف وصالة العرض (ShowRoom)
      </Typography>

      {/* Packaging */}
      <Typography variant="subtitle1" sx={{ ...font, fontWeight: 700, mb: 2 }}>
        • مستويات وأسعار خدمة التغليف:
      </Typography>
      <Stack spacing={1.5} sx={{ mb: 5 }}>
        {packaging.map(({ level, price, desc }) => (
          <Paper
            key={level}
            elevation={0}
            sx={{
              p: 2,
              bgcolor: "#fcfcfc",
              border: "1px solid #eee",
              display: "flex",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Chip
              label={price}
              sx={{
                bgcolor: `${RED}15`,
                color: RED,
                fontWeight: 800,
                minWidth: "70px",
                ...font,
              }}
            />
            <Box>
              <Typography variant="body2" sx={{ ...font, fontWeight: 800, color: "#333" }}>
                {level}
              </Typography>
              <Typography variant="body2" sx={{ ...font, color: "#555" }}>
                {desc}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Stack>

      {/* Showroom */}
      <Typography variant="subtitle1" sx={{ ...font, fontWeight: 700, mb: 2 }}>
        • باقات خدمة صالة العرض (شهرياً بالدينار الليبي):
      </Typography>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{ border: "1px solid #eee", borderRadius: 2 }}
      >
        <Table size="small">
          <TableHead sx={{ bgcolor: "#f9f9f9" }}>
            <TableRow>
              <TableCell sx={{ ...font, fontWeight: 800, py: 1.5 }}>الباقة</TableCell>
              <TableCell sx={{ ...font, fontWeight: 800 }}>طرابلس</TableCell>
              <TableCell sx={{ ...font, fontWeight: 800 }}>بنغازي</TableCell>
              <TableCell sx={{ ...font, fontWeight: 800 }}>المشمول في الباقة</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {showrooms.map((row, i) => (
              <TableRow key={i}>
                <TableCell sx={{ ...font, fontWeight: 700 }}>{row.pkg}</TableCell>
                <TableCell sx={{ ...font, color: RED, fontWeight: 700 }}>{row.tripoli}</TableCell>
                <TableCell sx={{ ...font, color: RED, fontWeight: 700 }}>{row.benghazi}</TableCell>
                <TableCell sx={{ ...font, color: "#555" }}>{row.includes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ p: 2, bgcolor: "#f9f9f9", borderRadius: 2, mt: 2 }}>
        <Typography variant="body2" sx={{ ...font, color: "#555", lineHeight: 2 }}>
          <strong>ما تشمله جميع باقات صالة العرض:</strong> منظومة بيع متكاملة (POS)، موظفو
          الصالة للتعامل مع العملاء، غرفة قياس، وخاصية الدفع بالبطاقة المصرفية بتسوية أسبوعية.
          (خصم 10% عند الاشتراك في طرابلس وبنغازي معاً).
        </Typography>
      </Box>
    </Box>
  );
}

// ─── Nav Item ─────────────────────────────────────────────────────────────────
function NavItem({ label, icon, active, onClick }) {
  return (
    <>
      <ListItem
        button="true"
        selected={active}
        onClick={onClick}
        sx={{
          py: 2,
          bgcolor: active ? `${RED}10` : "transparent",
          "&:hover": { bgcolor: `${RED}08` },
          cursor: "pointer",
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
    { key: "terms", label: "اتفاقية الخدمة", icon: <GavelIcon /> },
    { key: "returns", label: "سياسات المرتجعات", icon: <AssignmentReturnIcon /> },
    { key: "prohibited", label: "المواد المحظورة", icon: <BlockIcon /> },
    { key: "insurance", label: "الشكاوى والتعويضات", icon: <SecurityIcon /> },
    { key: "services", label: "التغليف والشوروم", icon: <StoreMallDirectoryIcon /> },
  ];

  const renderContent = () => {
    if (activeTab === "shipping") return <ShippingSection />;
    if (activeTab === "terms") return <TermsSection />;
    if (activeTab === "returns") return <ReturnsSection />;
    if (activeTab === "prohibited") return <ProhibitedSection />;
    if (activeTab === "insurance") return <InsuranceSection />;
    if (activeTab === "services") return <ServicesSection />;
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
              sx={{
                backgroundColor: RED,
                ...font,
                px: 4,
                "&:hover": { backgroundColor: "#b31e22" },
              }}
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
              sx={{
                borderRadius: 3,
                border: "1px solid #eee",
                overflow: "hidden",
                position: "sticky",
                top: 100,
              }}
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
            <Paper
              elevation={0}
              sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, border: "1px solid #eee" }}
            >
              {renderContent()}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
