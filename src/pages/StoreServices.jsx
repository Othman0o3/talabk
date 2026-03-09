import React from 'react';
import { 
    Box, Container, Grid, Typography, Paper, 
    Button, Stack, useTheme, useMediaQuery 
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TodayIcon from '@mui/icons-material/Today';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const stats = [
    { label: "إجمالي الطلبيات", icon: <AssessmentIcon fontSize="small"/>, color: "#f8f9fa", iconCol: "#1a1a1a" },
    { label: "طلبات اليوم", icon: <TodayIcon fontSize="small"/>, color: "#fff5f5", iconCol: "#db262a" },
    { label: "تم تسليمها", icon: <LocalShippingIcon fontSize="small"/>, color: "#f1f8e9", iconCol: "#2e7d32" },
    { label: "تم ترجيعها", icon: <AssignmentReturnIcon fontSize="small"/>, color: "#ffebee", iconCol: "#d32f2f" },
    { label: "تحت الإجراء", icon: <PendingActionsIcon fontSize="small"/>, color: "#fff3e0", iconCol: "#ed6c02" },
    { label: "تم تسويتها", icon: <AccountBalanceWalletIcon fontSize="small"/>, color: "#e1f5fe", iconCol: "#0288d1" },
];

function MerchantServices() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{ direction: 'rtl', bgcolor: '#fff' }}>
            <Box sx={{ py: 10, bgcolor: '#1a1a1a', color: '#fff', textAlign: 'center' }}>
                <Container>
                    <Typography variant="h2" sx={{ fontFamily: 'Almarai', fontWeight: 900, mb: 3, fontSize: {xs: '2.5rem', md: '3.5rem'} }}>
                        حلول ذكية لنمو <span style={{ color: '#db262a' }}>تجارتك</span>
                    </Typography>
                    <Typography variant="h6" sx={{ fontFamily: 'Almarai', opacity: 0.8, maxWidth: '800px', mx: 'auto', fontWeight: 300 }}>
                        نحن نوفر لك المنظومة التقنية واللوجستية التي تتيح لك التركيز على تطوير منتجاتك، بينما نتولى نحن مسؤولية التوصيل، التخزين، والتحصيل.
                    </Typography>
                </Container>
            </Box>

            <Container sx={{ mt: -6, mb: 10 }}>
                <Grid container spacing={4} alignItems="center">
                    
                    <Grid item xs={12} md={7}>
                        <Paper elevation={4} sx={{ p: 4, borderRadius: 4, height: '100%' }}>
                            <Typography variant="h5" sx={{ fontFamily: 'Almarai', fontWeight: 800, mb: 4, color: '#db262a' }}>
                                لماذا يختار التجار "طلبك"؟
                            </Typography>
                            
                            <Stack spacing={4}>
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <ReceiptLongIcon sx={{ color: '#db262a', fontSize: 35 }} />
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: 'Almarai' }}>شفافية مالية مطلقة</Typography>
                                        <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Almarai' }}>نظام تسوية مالي دقيق يضمن لك استلام أموال مبيعاتك بشكل دوري مع كشوفات حساب تفصيلية.</Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <InventoryIcon sx={{ color: '#db262a', fontSize: 35 }} />
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: 'Almarai' }}>إدارة وجرد المخزون</Typography>
                                        <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Almarai' }}>تقدر تدير جرد كامل لبضاعة متجرك في مخازننا لحظة بلحظة، وتعرف النواقص والكميات المتوفرة بضغطة زر.</Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <DashboardIcon sx={{ color: '#db262a', fontSize: 35 }} />
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: 'Almarai' }}>لوحة تحكم احترافية</Typography>
                                        <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Almarai' }}>واجهة متكاملة تمنحك رؤية كاملة لعملياتك، من إضافة الطلبات إلى تتبع حالة التسليم المباشر.</Typography>
                                    </Box>
                                </Box>
                            </Stack>

                            <Button 
                                variant="contained" 
                                size="large" 
                                fullWidth 
                                sx={{ mt: 6, bgcolor: '#db262a', py: 2, borderRadius: 3, fontWeight: 'bold', fontSize: '1.1rem', fontFamily: 'Almarai', '&:hover': {bgcolor: '#1a1a1a'} }}
                                href='https://talabksys.ly'
                                rel='noreferrer'
                            >
                                سجل كتاجر الآن
                            </Button>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Paper 
                            elevation={10} 
                            sx={{ 
                                width: '290px', 
                                borderRadius: '45px', 
                                border: '12px solid #1a1a1a', 
                                position: 'relative',
                                bgcolor: '#f4f4f4',
                                overflow: 'hidden',
                                boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
                            }}
                        >
                            <Box sx={{ p: 2, pt: 4 }}>
                                <Typography align="center" variant="caption" sx={{ display: 'block', mb: 2, fontWeight: 900, color: '#1a1a1a', fontFamily: 'Almarai' }}>
                                    مثال عن خدمات تطبيق التاجر
                                </Typography>
                                <Grid container spacing={1.5}>
                                    {stats.map((item, i) => (
                                        <Grid item xs={6} key={i}>
                                            <Paper 
                                                elevation={0} 
                                                sx={{ 
                                                    p: 1.5, 
                                                    textAlign: 'center', 
                                                    borderRadius: 3, 
                                                    bgcolor: item.color,
                                                    border: '1px solid #eee'
                                                }}
                                            >
                                                <Box sx={{ color: item.iconCol, mb: 0.5, display: 'flex', justifyContent: 'center' }}>{item.icon}</Box>
                                                <Typography variant="caption" sx={{ fontWeight: 800, display: 'block', mb: 0.5, fontSize: '0.65rem', fontFamily: 'Almarai' }}>
                                                    {item.label}
                                                </Typography>
                                                <Typography variant="h6" sx={{ fontWeight: 900, fontSize: '1rem' }}>0</Typography>
                                            </Paper>
                                        </Grid>
                                    ))}
                                    <Grid item xs={12}>
                                    </Grid>
                                </Grid>
                            </Box>
                            
                            <Box sx={{ mt: 3, py: 2, display: 'flex', justifyContent: 'space-around', bgcolor: '#fff', borderTop: '1px solid #eee' }}>
                                <InventoryIcon fontSize="small" sx={{color: '#ccc'}} />
                                <DashboardIcon fontSize="small" sx={{color: '#db262a'}} />
                                <AssignmentReturnIcon fontSize="small" sx={{color: '#ccc'}} />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            <Box sx={{ py: 8, textAlign: 'center', borderTop: '1px solid #eee', bgcolor: '#fbfbfb' }}>
                <Typography variant="h5" sx={{ fontFamily: 'Almarai', fontWeight: 800, mb: 2 }}>
                    حقك مضمون، وبضاعتك في أمان
                </Typography>
                <Typography variant="body1" sx={{ color: '#666', fontFamily: 'Almarai' }}>
                    نحن نؤمن بأن الصدق والدقة هما أساس استمرار أي عمل ناجح.
                </Typography>
            </Box>
        </Box>
    );
}

export default MerchantServices;