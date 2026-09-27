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

const MotionPaper = motion(Paper);


const HERO_IMAGE = 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&w=1600&q=80';

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

// ── Process steps ──
const processSteps = [
    { title: 'أنشئ حسابك',       icon: <AccountCircleIcon fontSize="large" />,        color: '#ff7675',
      desc: 'سجّل في منصة طلبك خلال دقيقة وأكمل بيانات ملفك الشخصي لنتمكن من توصيل طلبك.' },
    { title: 'اشحن محفظتك',      icon: <AccountBalanceWalletIcon fontSize="large" />, color: '#fdcb6e',
      desc: 'حوّل المبلغ بالدينار الليبي لحسابنا وارفع إيصال التحويل — رصيدك يظهر بالليرة التركية بعد الموافقة.' },
    { title: 'أضف رابط المنتج',  icon: <LinkIcon fontSize="large" />,                color: '#74b9ff',
      desc: 'انسخ رابط أي منتج من المتاجر التركية وأضفه في طلب جديد مع المقاس واللون والكمية.' },
    { title: 'نراجع ونوافق',     icon: <VerifiedIcon fontSize="large" />,            color: '#a29bfe',
      desc: 'فريقنا يفحص المنتج، يتأكد من توفره وصحة البيانات، ثم يخصم قيمته من رصيدك ويؤكد الطلب.' },
    { title: 'الشراء من تركيا',  icon: <FlightTakeoffIcon fontSize="large" />,       color: '#55efc4',
      desc: 'يشتري فريقنا في إسطنبول المنتج فوراً بعد الموافقة ويشحنه نحو ليبيا.' },
    { title: 'التسليم لبابك',    icon: <LocalShippingIcon fontSize="large" />,       color: '#fd79a8',
      desc: 'بمجرد وصول الشحنة لمخازننا في ليبيا نتواصل معك لتحديد موعد التسليم لأقرب نقطة منك.' },
];

// ── Store list — two categories ──
const storeCategories = [
    {
        cat: 'أزياء وملابس',
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
        cat: 'أثاث ومفروشات',
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
    { flag: '🛍️',  label: 'SHEIN' },
];

export default function Estore() {
    return (
        <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh', direction: 'rtl', pb: 10 }}>

            {/* ── Hero — Istanbul background image with overlay ── */}
            <Box sx={{
                position: 'relative',
                color: '#fff',
                pt: { xs: 12, md: 16 },
                pb: { xs: 10, md: 14 },
                overflow: 'hidden',
                textAlign: 'center',
            }}>
                {/* Background image */}
                <Box sx={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `url(${HERO_IMAGE})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                }} />
                <Box sx={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(135deg, rgba(26,26,26,0.88) 0%, rgba(58,0,0,0.82) 100%)',
                    zIndex: 1,
                }} />

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                    {/*<Chip
                        icon={<PublicIcon sx={{ color: '#fff !important' }} />}
                        label="طلبك من حول العالم"
                        variant="outlined"
                        sx={{
                            ...font, color: '#fff',
                            borderColor: 'rgba(255,255,255,0.35)',
                            mb: 3, fontWeight: 700, px: 2,
                        }}
                    />*/}
                    <Typography variant="h2" sx={{
                        ...font, fontWeight: 900,
                        fontSize: { xs: '2.2rem', md: '3.8rem' },
                        mb: 2, lineHeight: 1.35,
                    }}>
                        تسوق من أشهر المتاجر في العالم
                        <br />
                        <Box component="span" sx={{ color: BRAND_RED }}>
                            ونوصلك لبابك في ليبيا
                        </Box>
                    </Typography>
                    <Typography variant="h6" sx={{
                        ...font, fontWeight: 400,
                        color: 'rgba(255,255,255,0.75)',
                        maxWidth: 780, mx: 'auto', mb: 5, lineHeight: 1.9,
                    }}>
                        منصة طلبك تتيح لك اختيار منتجاتك من أشهر المتاجر التركية والعالمية،
                        الدفع بالدينار الليبي، وتتبع شحنتك خطوة بخطوة حتى تصلك لأي مدينة في ليبيا.
                    </Typography>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                        <Button
                            variant="contained"
                            size="large"
                            href="https://shopfrmturkey.talabk.ly"
                            sx={{
                                ...font, bgcolor: BRAND_RED,
                                fontWeight: 800, px: 6, py: 1.8,
                                borderRadius: 3, fontSize: '1.1rem',
                                boxShadow: `0 10px 30px ${BRAND_RED}60`,
                                '&:hover': { bgcolor: '#a01222' },
                            }}
                        >
                        سجل معنا الان
                        </Button>
                    </motion.div>

                    
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

                <Grid container spacing={3} justifyContent="center" sx={{ mb: 12 }}>
                    {processSteps.map((step, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <motion.div whileHover={{ y: -8 }} style={{ height: '100%' }}>
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
                        </Grid>
                    ))}
                </Grid>

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

                        <Grid container spacing={3} justifyContent="center">
                            {category.items.map((store, i) => (
                                <Grid item xs={6} sm={4} md={3} key={i}>
                                    <MotionPaper
                                        elevation={0}
                                        whileHover={{ scale: 1.04, boxShadow: '0 12px 28px rgba(0,0,0,0.07)' }}
                                        sx={{
                                            p: 3, textAlign: 'center', borderRadius: 4,
                                            border: '1px solid #e8e8e8', height: '100%',
                                            display: 'flex', flexDirection: 'column',
                                            alignItems: 'center', justifyContent: 'space-between',
                                            gap: 2, transition: 'border-color 0.2s',
                                            '&:hover': { borderColor: BRAND_RED },
                                        }}
                                    >
                                        <Box sx={{
                                            height: 64, display: 'flex',
                                            alignItems: 'center', justifyContent: 'center', width: '100%',
                                        }}>
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
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                ))}

                <Divider sx={{ my: 8 }} />

                {/* ── Coming Soon markets ── */}
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
                                        label="قريباً"
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

                {/* ── Any store CTA ── */}
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
                        لا تقلق — يمكنك إضافة رابط أي منتج من أي متجر تركي آخر غير مذكور هنا،
                        وفريقنا سيفحصه ويشتريه لك بنفس الآلية.
                    </Typography>
                    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
                        <Button
                            variant="contained"
                            size="large"
                            href="https://shopfrmturkey.talabk.ly"
                            sx={{
                                ...font, bgcolor: BRAND_RED, fontWeight: 800,
                                px: 5, py: 1.5, borderRadius: 3,
                                boxShadow: `0 8px 24px ${BRAND_RED}40`,
                                '&:hover': { bgcolor: '#a01222' },
                            }}
                        >
                            ابدأ التسوق الآن 
                        </Button>
                    </motion.div>
                </Paper>

            </Container>
        </Box>
    );
}
