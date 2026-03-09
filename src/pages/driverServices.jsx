import React from 'react';
import { 
    Box, Container, Grid, Typography, Paper, 
    Button, Stack, Divider 
} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

const driverFeatures = [
    { 
        title: "إدارة المحفظة المالية", 
        desc: "تتبع أرباحك وعمولتك من كل توصيلة لحظة بلحظة مع نظام مالي دقيق وشفاف.", 
        icon: <AccountBalanceWalletIcon sx={{ color: '#db262a', fontSize: 40 }} /> 
    },
    { 
        title: "تتبع الشحنات والطلبات", 
        desc: "نظام ذكي لفرز الطلبات (قيد الشحن، تم التسليم، المرجعات) يسهل عليك تنظيم يومك.", 
        icon: <QueryStatsIcon sx={{ color: '#db262a', fontSize: 40 }} /> 
    },
    { 
        title: "نظام الماسح الضوئي (QR)", 
        desc: "سرعة في تسليم واستلام الشحنات من خلال تقنية الـ QR Code المتوفرة في تطبيقك.", 
        icon: <QrCodeScannerIcon sx={{ color: '#db262a', fontSize: 40 }} /> 
    }
];

function DriverServices() {
    return (
        <Box sx={{ direction: 'rtl', bgcolor: '#fff' }}>
            <Box sx={{ py: 10, bgcolor: '#db262a', color: '#fff', textAlign: 'center' }}>
                <Container>
                    <Typography variant="h2" sx={{ fontFamily: 'Almarai', fontWeight: 900, mb: 2 }}>
                        كن شريكاً في <span style={{ color: '#1a1a1a' }}>النجاح</span>
                    </Typography>
                    <Typography variant="h6" sx={{ fontFamily: 'Almarai', opacity: 0.9, maxWidth: '700px', mx: 'auto' }}>
                        انضم إلى أسطول "طلبك" وتمتع بمرونة العمل مع نظام تقني متطور يضمن لك حقوقك المالية وينظم مهامك اليومية.
                    </Typography>
                </Container>
            </Box>

            <Container sx={{ mt: -5, mb: 10 }}>
                <Grid container spacing={4} alignItems="center">
                    
                    <Grid item xs={12} md={5}>
                        <Paper 
                            elevation={15} 
                            sx={{ 
                                p: 1, 
                                borderRadius: '30px', 
                                border: '10px solid #1a1a1a', 
                                bgcolor: '#f0f0f0',
                                minHeight: '500px'
                            }}
                        >
                            <Box sx={{ bgcolor: '#db262a', p: 2, borderRadius: '20px 20px 0 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <QrCodeScannerIcon sx={{ color: '#fff' }} />
                                <Typography sx={{ color: '#fff', fontWeight: 'bold' }}>TALABK DRIVER</Typography>
                                <Box sx={{ width: 24 }} /> 
                            </Box>

                            <Box sx={{ p: 2 }}>
                                <Stack spacing={1}>
                                    <Paper sx={{ p: 2, bgcolor: '#db262a', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography sx={{ fontWeight: 'bold' }}>إجمالي الأرباح</Typography>
                                        <Typography variant="h6">0.000 LYD</Typography>
                                    </Paper>
                                    
                                    <Grid container spacing={1}>
                                        <Grid item xs={6}>
                                            <Paper sx={{ p: 1.5, textAlign: 'center', borderTop: '4px solid #db262a' }}>
                                                <DoneAllIcon color="success" />
                                                <Typography variant="caption" sx={{ display: 'block' }}>تم تسليمها</Typography>
                                                <Typography sx={{ fontWeight: 900 }}>0</Typography>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Paper sx={{ p: 1.5, textAlign: 'center', borderTop: '4px solid #ed6c02' }}>
                                                <LocalShippingIcon color="warning" />
                                                <Typography variant="caption" sx={{ display: 'block' }}>قيد الشحن</Typography>
                                                <Typography sx={{ fontWeight: 900 }}>0</Typography>
                                            </Paper>
                                        </Grid>
                                    </Grid>

                                    <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, borderRight: '5px solid #db262a' }}>
                                        <AssignmentReturnIcon color="error" />
                                        <Box>
                                            <Typography variant="caption" sx={{ display: 'block', fontWeight: 'bold' }}>طلبات تم إرجاعها</Typography>
                                            <Typography variant="h6">0</Typography>
                                        </Box>
                                    </Paper>
                                </Stack>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <Box sx={{ pr: { md: 4 } }}>
                            <Typography variant="h4" sx={{ fontFamily: 'Almarai', fontWeight: 800, mb: 4 }}>
                                لماذا توصل مع "طلبك"؟
                            </Typography>
                            
                            <Stack spacing={4}>
                                {driverFeatures.map((f, i) => (
                                    <Box key={i} sx={{ display: 'flex', gap: 3 }}>
                                        <Box sx={{ mt: 1 }}>{f.icon}</Box>
                                        <Box>
                                            <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: 'Almarai', mb: 1 }}>
                                                {f.title}
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary">
                                                {f.desc}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Stack>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default DriverServices;