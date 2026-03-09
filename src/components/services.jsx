import React from 'react';
import { Box, Container, Grid, Typography, Paper, Stack,useTheme,useMediaQuery } from '@mui/material';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import BusinessIcon from '@mui/icons-material/Business';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CampaignIcon from '@mui/icons-material/Campaign';
import SavingsIcon from '@mui/icons-material/Savings';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

const talabkServices = [
    { 
        title: "خدمات الشحن السريع", 
        desc: "نوفر خدمات الشحن والتوصيل السريع لجميع المدن الليبية وخارجها من الطرود الصغيرة والمتوسطة والكبيرة الأحجام بما يتناسب مع عملائنا.",
        icon: <FlashOnIcon fontSize="large" />, 
        color: "#db262a" 
    },
    { 
        title: "خدمات الشحن التجاري", 
        desc: "توفر شركة طلبك لأصحاب النشاطات التجارية شحناً آمناً لبضائعهم بين الفروع أو إلى عملائهم مع خاصية الاستلام والتسليم من وإلى المخازن بأسعار منافسة.",
        icon: <BusinessIcon fontSize="large" />, 
        color: "#1a1a1a" 
    },
    { 
        title: "خدمات المساحات التخزينية", 
        desc: "توفّر خدمة التخزين في طلبك حلولاً مساحية تخدم نظام تخزينك المستقل ومتطلبات عملك مع ضمان السرعة والأمان في المناولة.",
        icon: <WarehouseIcon fontSize="large" />, 
        color: "#db262a" 
    },
    { 
        title: "خدمة المساحات المباشرة Talabk showroom", 
        desc: "خدمة حصرية توفر صالة عرض مشتركة لأصحاب المتاجر الإلكترونية لتمكينهم من البيع المباشر لزبائنهم بتكاليف شهرية رمزية.",
        icon: <StorefrontIcon fontSize="large" />, 
        color: "#1a1a1a" 
    },
    { 
        title: "خدمات تسويقية", 
        desc: "حلول تسويقية وخطط زمنية مدروسة عبر فريق مختص في التسويق الإلكتروني أو من خلال مندوبينا الموزعين في كافة المدن الليبية.",
        icon: <CampaignIcon fontSize="large" />, 
        color: "#db262a" 
    },
    { 
        title: "خدمة توفير", 
        desc: "تمنحكم عناوين في مدن مختلفة مع إمكانية شحن محفظتكم، لتتسوقوا من بنغازي وأنت في طرابلس أو العكس بكل سهولة.",
        icon: <SavingsIcon fontSize="large" />, 
        color: "#1a1a1a" 
    },
    { 
        title: "دعم مستمر 24/24", 
        desc: "فريقنا متوفر على مدار الساعة للإجابة على استفساراتكم وحل المشاكل التي تواجهكم لتقريب المسافة وتقديم الحلول الفورية.",
        icon: <SupportAgentIcon fontSize="large" />, 
        color: "#db262a" 
    },
    { 
        title: "منظومة عمل بسيطة ومريحة", 
        desc: "آلية عمل تلبي رغباتكم بسلاسة، من إنشاء الشحنة وحتى وصولها للعميل، عبر واجهات تقنية سهلة الاستخدام.",
        icon: <SettingsSuggestIcon fontSize="large" />, 
        color: "#1a1a1a" 
    },
    { 
        title: "تطوير خدماتنا", 
        desc: "نسعى دائماً لدراسة كافة العراقيل التي تواجه عملائنا بدقة عبر فريق مختص لتقديم خدمات جديدة تساهم في نجاح تجارتكم.",
        icon: <AutoGraphIcon fontSize="large" />, 
        color: "#db262a" 
    },
];

function Services() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{ py: 10, bgcolor: '#fbfbfb', direction: 'rtl' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 10 }}>
                    <Typography 
                        variant="h3" 
                        sx={{ 
                            fontFamily: 'Almarai', 
                            fontWeight: 900, 
                            color: '#1a1a1a',
                            mb: 2,
                            fontSize: { xs: '1.8rem', md: '2.5rem' }
                        }}
                    >  
                        حلول لوجستية متكاملة لنمو أعمالك      
                </Typography>
                    <Box sx={{ width: 60, height: 4, bgcolor: '#db262a', mx: 'auto' }} />
                </Box>

                <Grid container spacing={4} justifyContent="center">
                    {talabkServices.map((service, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    borderRadius: 4,
                                    border: '1px solid #f0f0f0',
                                    display: 'flex',
                                    gap: 3, 
                                    alignItems: 'flex-start',
                                    transition: 'all 0.3s ease',
                                    backgroundColor: '#fff',
                                    '&:hover': {
                                        boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
                                        borderColor: '#db262a',
                                        '& .icon-container': {
                                            transform: 'scale(1.1) rotate(-5deg)',
                                            bgcolor: '#db262a',
                                            color: '#fff'
                                        }
                                    }
                                }}
                            >
                                <Box 
                                    className="icon-container"
                                    sx={{ 
                                        p: 2, 
                                        borderRadius: 3, 
                                        color: service.color,
                                        bgcolor: '#f8f8f8',
                                        transition: 'all 0.3s ease',
                                        display: 'flex'
                                    }}
                                >
                                    {service.icon}
                                </Box>

                                <Box sx={{ flex: 1 }}>
                                    <Typography 
                                        variant="h6" 
                                        sx={{ 
                                            fontFamily: 'Almarai', 
                                            fontWeight: 800, 
                                            mb: 1.5,
                                            color: '#1a1a1a'
                                        }}
                                    >
                                        {service.title}
                                    </Typography>
                                    <Typography 
                                        variant="body1" 
                                        sx={{ 
                                            fontFamily: 'Almarai', 
                                            color: '#555',
                                            lineHeight: 1.8,
                                            fontSize: '0.95rem',
                                            textAlign: 'justify' 
                                        }}
                                    >
                                        {service.desc}
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
export default Services;