import React, { useState } from 'react';
import {
    Box, Container, Typography, Grid, Paper,
    Button, Chip, Divider, Avatar
} from '@mui/material';
import { motion } from 'framer-motion';

import AccountCircleIcon        from '@mui/icons-material/AccountCircle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LinkIcon                  from '@mui/icons-material/Link';
import VerifiedIcon              from '@mui/icons-material/Verified';
import FlightTakeoffIcon         from '@mui/icons-material/FlightTakeoff';
import LocalShippingIcon         from '@mui/icons-material/LocalShipping';
import PublicIcon                from '@mui/icons-material/Public';
import StorefrontIcon            from '@mui/icons-material/Storefront';
import AccessTimeIcon            from '@mui/icons-material/AccessTime';

const BRAND_RED  = '#C0152A';
const BRAND_DARK = '#1A1A1A';
const font       = { fontFamily: '"Almarai", sans-serif' };

// ── Store sites ──
// Turkey is "coming soon" until it is redeployed: set TURKEY_LIVE to true and the
// button becomes a normal link.
const SHEIN_URL   = 'https://talabkfrmshein.talabk.ly';
const TURKEY_URL  = 'https://shopfrmturkey.talabk.ly';
const TURKEY_LIVE = true;

const MotionPaper = motion(Paper);



const StoreImage = ({ store }) => {
    const [hasError, setHasError] = useState(false);

    const initials = store.name
        .split(/\s+/)
        .slice(0, 2)
        .map(w => w[0])
        .join('')
        .toUpperCase();

if (hasError || !store.logo) {
    return (
        <Typography sx={{
            fontWeight: 900,
            fontSize: store.name.length > 10 ? '0.85rem' : '1.1rem',
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            color: BRAND_DARK,
            textAlign: 'center',
            letterSpacing: store.name.length > 8 ? 0.5 : 2,
            textTransform: 'uppercase',
            borderBottom: `2px solid ${BRAND_RED}`,
            pb: 0.5,
            lineHeight: 1.3,
        }}>
            {store.name}
        </Typography>
    );
}

    return (
        <img
            src={store.logo}
            alt={store.name}
            onError={() => setHasError(true)}
            style={{ maxHeight: '100%', maxWidth: '85%', objectFit: 'contain' }}
        />
    );
};

const processSteps = [
    { title: 'أنشئ حسابك',       icon: <AccountCircleIcon fontSize="large" />,        color: '#ff7675',
      desc: 'سجل في منصة طلبك خلال دقيقة وأكمل بيانات ملفك الشخصي لنتمكن من توصيل طلبك.' },
    { title: 'اشحن محفظتك',      icon: <AccountBalanceWalletIcon fontSize="large" />, color: '#fdcb6e',
      desc: 'حوّل المبلغ بالدينار الليبي لحسابنا وارفع إيصال التحويل — يظهر رصيدك بعملة المتجر بعد الموافقة: الدولار لمتجر شي إن، والليرة التركية لمتجر تركيا.' },
    { title: 'أضف رابط طلبك',    icon: <LinkIcon fontSize="large" />,                color: '#74b9ff',
      desc: 'انسخ رابط السلة أو المنتج من المتجر وأضفه في طلب جديد مع إجمالي السعر.' },
    { title: 'نراجع ونوافق',     icon: <VerifiedIcon fontSize="large" />,            color: '#a29bfe',
      desc: 'فريقنا يفحص طلبك ويتأكد من توفر المنتجات وسعرها النهائي، ثم يخصم قيمته من رصيدك ويؤكد الطلب. وإن اختلف السعر نخصم الفرق من رصيدك إن توفر، وإلا نلغي الطلب ونعيد لك المبلغ.' },
    { title: 'الشراء من المتجر', icon: <FlightTakeoffIcon fontSize="large" />,       color: '#55efc4',
      desc: 'يشتري فريقنا طلبك من المتجر فوراً بعد الموافقة ويشحنه نحو ليبيا.' },
    { title: 'التسليم لبابك',    icon: <LocalShippingIcon fontSize="large" />,       color: '#fd79a8',
      desc: 'بمجرد وصول الشحنة لمخازننا في ليبيا نتواصل معك لتحديد موعد التسليم لباب حوشك.' },
];

// ── Store list ──
const storeCategories = [
    {
        cat: 'متجر شي إن',
        items: [
            { name: 'SHEIN', logo: '', link: 'https://www.shein.com/' },
        ],
    },
    {
        cat: 'متاجر تركيا — أزياء وملابس',
        items: [
            { name: 'Zara',             logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg',                                                          link: 'https://www.zara.com/tr/' },
            { name: 'Trendyol',         logo: 'https://cdn.dsmcdn.com/web/production/trendyol-logo-ar.svg',                                                                link: 'https://www.trendyol.com/' },
            { name: 'Pull&Bear',        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Pull%26Bear_logo.svg/320px-Pull%26Bear_logo.svg.png',             link: 'https://www.pullandbear.com/tr' },
            { name: 'Bershka',          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Bershka_logo.svg/320px-Bershka_logo.svg.png',                     link: 'https://www.bershka.com/tr' },
            { name: 'Stradivarius',     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Stradivarius_logo.svg/320px-Stradivarius_logo.svg.png',           link: 'https://www.stradivarius.com/tr' },
            { name: 'H&M',              logo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg',                                                        link: 'https://www2.hm.com.tr' },
            { name: 'LC Waikiki',       logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/LC_Waikiki_logo.svg',                                                   link: 'https://www.lcwaikiki.com/' },
            { name: 'Modanisa',         logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Modanisa_logo.svg/320px-Modanisa_logo.svg.png',                   link: 'https://www.modanisa.com/' },
            { name: 'Koton',            logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Koton_logo.svg',                                                        link: 'https://www.koton.com/en/' },
            { name: 'Mango',            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Mango_logo.svg/320px-Mango_logo.svg.png',                         link: 'https://shop.mango.com/tr' },
            { name: 'Marks & Spencer',  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Marks_and_Spencer_logo.svg/320px-Marks_and_Spencer_logo.svg.png', link: 'https://www.marksandspencer.com.tr/' },
            { name: 'DeFacto',          logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/DeFacto_logo.svg',                                                      link: 'https://www.defacto.com.tr/' },
            { name: 'FLO',              logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/FLO_logo.svg/320px-FLO_logo.svg.png',                             link: 'https://www.flo.com.tr/' },
            { name: "Victoria's Secret",logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Victoria%27s_Secret_logo.svg/320px-Victoria%27s_Secret_logo.svg.png', link: 'https://www.victoriassecret.com.tr/' },
        ],
    },
    {
        cat: 'متاجر تركيا — أثاث ومفروشات',
        items: [
            { name: 'IKEA',            logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Ikea_logo.svg',   link: 'https://www.ikea.com.tr/' },
            { name: 'Kelebek',         logo: '',                                                                    link: 'https://kelebek.com/' },
            { name: 'Doğtaş',          logo: '',                                                                    link: 'https://dogtas.com/' },
            { name: 'Bois Mobilya',    logo: '',                                                                    link: 'http://www.boismobilya.net/' },
            { name: 'Fabello Mobilya', logo: '',                                                                    link: 'http://www.fabellomobilya.com/' },
            { name: 'Berrak Mobilya',  logo: '',                                                                    link: 'https://berrakmobilya.com/' },
        ],
    },
];

const comingSoon = [
    { flag: '🇸🇦', label: 'المملكة العربية السعودية' },
    { flag: '🇦🇪', label: 'الإمارات العربية المتحدة' },
    { flag: '🇪🇬', label: 'جمهورية مصر العربية' },
];

export default function Estore() {
    return (
        <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh', direction: 'rtl', pb: 10 }}>

            <Box sx={{ py: 10, bgcolor: '#1a1a1a', color: '#fff', textAlign: 'center' }}>
                <Container>
                    <Typography variant="h2" sx={{
                        ...font, fontWeight: 900, mb: 3,
                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                    }}>
                        تسوق من أشهر المتاجر في العالم
                        <br />
                        <span style={{ color: '#db262a' }}>ونوصلك لبابك في ليبيا</span>
                    </Typography>
                    <Typography variant="h6" sx={{
                        ...font, opacity: 0.8, maxWidth: '800px',
                        mx: 'auto', fontWeight: 300, mb: 5, lineHeight: 1.9,
                    }}>
                        منصة طلبك تتيح لك الشراء من شي إن ومن أشهر المتاجر التركية،
                        ادفع بالدينار الليبي، وتتبع شحنتك خطوة بخطوة حتى توصلك لباب حوشك.
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button
                            variant="contained"
                            size="large"
                            href={SHEIN_URL}
                            sx={{
                                ...font, bgcolor: '#db262a', px: 6, py: 2,
                                borderRadius: 3, fontWeight: 'bold', fontSize: '1.1rem',
                                '&:hover': { bgcolor: '#b81e22' },
                            }}
                        >
                            تسوق من شي إن
                        </Button>

                        <Button
                            variant="outlined"
                            size="large"
                            href={TURKEY_LIVE ? TURKEY_URL : undefined}
                            disabled={!TURKEY_LIVE}
                            sx={{
                                ...font, color: '#fff', borderColor: 'rgba(255,255,255,0.6)',
                                px: 6, py: 2, borderRadius: 3,
                                fontWeight: 'bold', fontSize: '1.1rem',
                                '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.1)' },
                                '&.Mui-disabled': {
                                    color: 'rgba(255,255,255,0.7)',
                                    borderColor: 'rgba(255,255,255,0.35)',
                                },
                            }}
                        >
                            {TURKEY_LIVE ? 'تسوق من تركيا' : 'متجر تركيا — قريبا'}
                        </Button>
                    </Box>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 10 } }}>

                <Box sx={{ textAlign: 'center', mb: 7 }}>
                    <Typography variant="h3" sx={{ ...font, fontWeight: 900, color: BRAND_DARK, mb: 1.5 }}>
                        كيف تعمل المنصة؟
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={font}>
                        ست خطوات بسيطة من التسجيل حتى استلام طلبك
                    </Typography>
                </Box>

<Box sx={{ mb: 12 }}>
    <Box
        sx={{
            display: 'flex',
            gap: 3,
            flexDirection: 'row',
            flexWrap: { xs: 'nowrap', md: 'wrap' },
            justifyContent: { xs: 'flex-start', md: 'center' },
            overflowX: { xs: 'auto', md: 'visible' },
            // room for the whileHover lift so it isn't clipped by the scroll container
            py: 1.5,
            px: { xs: 1, md: 0 },
            scrollSnapType: { xs: 'x mandatory', md: 'none' },
            WebkitOverflowScrolling: 'touch',
            '&::-webkit-scrollbar': { display: 'none' },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
        }}
    >
        {processSteps.map((step, index) => (
            <Box
                key={index}
                sx={{
                    flex: {
                        xs: '0 0 82%',
                        sm: '0 0 46%',
                        md: '0 0 calc(33.333% - 16px)',
                    },
                    scrollSnapAlign: 'start',
                    display: 'flex',
                }}
            >
                <motion.div whileHover={{ y: -8 }} style={{ height: '100%', width: '100%' }}>
                    <Box sx={{
                        textAlign: 'center', bgcolor: '#fff',
                        p: 3.5, borderRadius: 4,
                        border: '1px solid #f0f0f0', height: '100%',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                        position: 'relative', overflow: 'hidden',
                    }}>
                        <Typography sx={{
                            position: 'absolute', top: 8, left: 16,
                            fontSize: '4rem', fontWeight: 900,
                            color: `${step.color}12`, lineHeight: 1,
                            fontFamily: 'Arial',
                        }}>
                            {index + 1}
                        </Typography>
                        <Avatar sx={{
                            width: 72, height: 72,
                            bgcolor: `${step.color}15`, color: step.color,
                            margin: '0 auto', mb: 2.5,
                        }}>
                            {step.icon}
                        </Avatar>
                        <Typography variant="h6" sx={{ ...font, fontWeight: 800, color: BRAND_DARK, mb: 1.5 }}>
                            {step.title}
                        </Typography>
                        <Typography variant="body2" sx={{ ...font, color: '#636e72', lineHeight: 1.9 }}>
                            {step.desc}
                        </Typography>
                    </Box>
                </motion.div>
            </Box>
        ))}
    </Box>

    {/* swipe hint, mobile only */}
    <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', mt: 1 }}>
        <Typography variant="caption" sx={{ ...font, color: '#bbb' }}>
            اسحب لليمين لرؤية باقي الخطوات
        </Typography>
    </Box>
</Box>
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h3" sx={{ ...font, fontWeight: 900, color: BRAND_DARK, mb: 1.5 }}>
                        قائمة المتاجر المضمونة والمميزة
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={font}>
                        أفضل المواقع العالمية من حيث السعر، الجودة، وسرعة التوصيل
                    </Typography>
                </Box>

                {storeCategories.map((category, catIndex) => (
                    <Box key={catIndex} sx={{ mb: 8 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4, justifyContent: 'center' }}>
                            <Box sx={{ flex: 1, height: '1px', bgcolor: '#e0e0e0' }} />
                            <Typography variant="h6" sx={{
                                ...font, fontWeight: 800, color: BRAND_RED, whiteSpace: 'nowrap', px: 1,
                            }}>
                                {category.cat}
                            </Typography>
                            <Box sx={{ flex: 1, height: '1px', bgcolor: '#e0e0e0' }} />
                        </Box>

                        <Box
            sx={{
                display: 'flex',
                gap: 3,
                flexDirection: 'row',
                flexWrap: { xs: 'nowrap', md: 'wrap' },
                justifyContent: category.items.length > 2
                    ? { xs: 'flex-start', md: 'center' }
                    : 'center',
                overflowX: { xs: 'auto', md: 'visible' },
                py: 1.5,
                px: { xs: 1, md: 0 },
                scrollSnapType: { xs: 'x mandatory', md: 'none' },
                WebkitOverflowScrolling: 'touch',
                '&::-webkit-scrollbar': { display: 'none' },
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
            }}
        >
            {category.items.map((store, i) => (
                <Box
                    key={i}
                    sx={{
                        flex: {
                            xs: '0 0 160px',
                            sm: '0 0 200px',
                            md: '0 0 calc(25% - 18px)',
                        },
                        scrollSnapAlign: 'start',
                        display: 'flex',
                    }}
                >
                    <MotionPaper
                        elevation={0}
                        whileHover={{ scale: 1.04, boxShadow: '0 12px 28px rgba(0,0,0,0.07)' }}
                        sx={{
                            p: 3, textAlign: 'center', borderRadius: 4,
                            border: '1px solid #e8e8e8', width: '100%',
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'center', justifyContent: 'space-between',
                            gap: 2, transition: 'border-color 0.2s',
                            '&:hover': { borderColor: BRAND_RED },
                        }}
                    >
                        <Box sx={{ height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                            <StoreImage store={store} />
                        </Box>
                        <Button
                            href={store.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outlined"
                            fullWidth
                            sx={{
                                ...font, borderRadius: 2, fontWeight: 700,
                                color: BRAND_DARK, borderColor: '#ddd',
                                '&:hover': { borderColor: BRAND_RED, color: BRAND_RED, bgcolor: `${BRAND_RED}05` },
                            }}
                        >
                            تصفح الموقع
                        </Button>
                    </MotionPaper>
                </Box>
            ))}
        </Box>

        {category.items.length > 2 && (
            <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', mt: 1 }}>
                <Typography variant="caption" sx={{ ...font, color: '#bbb' }}>
                    اسحب لليمين لرؤية المزيد من المتاجر
                </Typography>
            </Box>
        )}
    </Box>
))}

                <Divider sx={{ my: 8 }} />

                <Box sx={{ textAlign: 'center', mb: 5 }}>
                    <Chip
                        icon={<AccessTimeIcon sx={{ color: `${BRAND_RED} !important` }} />}
                        label="قريبا"
                        sx={{
                            ...font, mb: 2,
                            bgcolor: `${BRAND_RED}10`,
                            color: BRAND_RED,
                            border: `1px solid ${BRAND_RED}30`,
                            fontWeight: 700, px: 1,
                        }}
                    />
                    <Typography variant="h4" sx={{ ...font, fontWeight: 900, color: BRAND_DARK, mb: 1.5 }}>
                        طلبك يتوسع حول العالم
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ ...font, maxWidth: 600, mx: 'auto', lineHeight: 1.9 }}>
                    نعمل على توسيع خدماتنا لتشمل أسواقا جديدة — ترقبوا إطلاق التسوق من هذه الوجهات قريبا.
                    </Typography>
                </Box>

                <Grid container spacing={3} justifyContent="center" sx={{ mb: 10 }}>
                    {comingSoon.map((market, i) => (
                        <Grid item xs={6} sm={3} key={i}>
                            <motion.div whileHover={{ y: -6 }}>
                                <Paper elevation={0} sx={{
                                    p: 3, textAlign: 'center', borderRadius: 4,
                                    border: `1px dashed ${BRAND_RED}40`,
                                    bgcolor: `${BRAND_RED}04`,
                                }}>
                                    <Typography variant="h2" sx={{ mb: 1 }}>
                                        {market.flag}
                                    </Typography>
                                    <Typography variant="body2" sx={{ ...font, fontWeight: 700, color: BRAND_DARK, mb: 1 }}>
                                        {market.label}
                                    </Typography>
                                    <Chip
                                        label="قريبا"
                                        size="small"
                                        sx={{
                                            ...font,
                                            bgcolor: `${BRAND_RED}12`,
                                            color: BRAND_RED,
                                            fontWeight: 700, fontSize: '0.7rem',
                                        }}
                                    />
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                <Divider sx={{ mb: 8 }} />

                <Paper elevation={0} sx={{
                    p: { xs: 3, md: 5 }, borderRadius: 4,
                    bgcolor: `${BRAND_RED}06`,
                    border: `1px solid ${BRAND_RED}20`,
                    textAlign: 'center',
                }}>
                    <StorefrontIcon sx={{ fontSize: 48, color: BRAND_RED, mb: 2, opacity: 0.8 }} />
                    <Typography variant="h5" sx={{ ...font, fontWeight: 800, color: BRAND_DARK, mb: 1.5 }}>
                        هل تبحث عن متجر آخر؟
                    </Typography>
                    <Typography variant="body1" sx={{ ...font, color: '#555', maxWidth: 700, mx: 'auto', lineHeight: 1.9, mb: 3 }}>
                        في متجر تركيا  يمكنك إضافة رابط أي منتج من أي متجر تركي غير مذكور هنا،
                        وفريقنا سيفحصه ويشتريه لك بنفس الآلية.
                    </Typography>
                    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
                        <Button
                            variant="contained"
                            size="large"
                            href={TURKEY_URL}
                            sx={{
                                ...font, bgcolor: BRAND_RED, fontWeight: 800,
                                px: 5, py: 1.5, borderRadius: 3,
                                boxShadow: `0 8px 24px ${BRAND_RED}40`,
                                '&:hover': { bgcolor: '#a01222' },
                            }}
                        >
                            ابدأ التسوق الان
                        </Button>
                    </motion.div>
                </Paper>

            </Container>
        </Box>
    );
}