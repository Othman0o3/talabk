import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
    Box, Container, Paper, Typography, Stepper, Step, StepLabel, 
    Divider, Grid, Avatar, Chip, CircularProgress, Button 
} from '@mui/material';
import { 
    Storefront, Inventory, LocalShipping, CheckCircle, 
    ErrorOutline, Phone, SearchOff, Person 
} from '@mui/icons-material';

const steps = [
    { label: 'تحت الإجراء', icon: <Storefront /> }, 
    { label: 'قيد التنفيذ', icon: <Inventory /> },    
    { label: 'قيد الشحن', icon: <LocalShipping /> }, 
    { label: 'مكتمل', icon: <CheckCircle /> }       
];

const mapStatusToStep = (rawStatus) => {
    if (!rawStatus) return 0;
    const status = rawStatus.trim();

    if (status === 'تحت الاجراء') return 0;
    if (status === 'قيد التنفيذ') return 1;
    if (status === 'قيد الشحن') return 2;
    if (status === 'مكتمل' || status === 'تم التسليم' || status === 'تمت التسوية') return 3;

    if (status.includes('راجع') || status.includes('استرداد')) return 7;
    if (status.includes('الالغاء') || status.includes('الغاء')) return 8;
    if (status.includes('تأجيل')) return 9;

    return 0; 
};
const PhoneLink = (phone) => {
    const cleanPhone = phone ? phone.toString().replace(/[^\d+]/g, '') : '';
    return `tel:${cleanPhone}`;
};
const TrackingView = () => {
    const { OrderID } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://fvtion.com/API/talabk/get/OrderTracking.php?OrderID=${OrderID}`)
        .then(res => res.json())
        .then(json => {
            if (!json || json.length === 0) {
                setData(null);
            } else {
                const lastUpdate = json[json.length - 1]; 
                
                const mappedData = {
                    fullHistory: json, 
                    order_id: lastUpdate.OrderID,
                    store_name: lastUpdate.StoreName || "غير محدد", 
                    status_text: lastUpdate.Status, 
                    status_code: mapStatusToStep(lastUpdate.Status), 
                    delegate_name: lastUpdate.Delegate || "جاري التعيين",
                    delegate_phone: (lastUpdate.Phone) || "",
                    total_price: parseFloat(lastUpdate.TotalAmount || 0).toFixed(2), 
                    return_reason: lastUpdate.ReturnReason || ""
                };
                setData(mappedData);
            }
            setLoading(false);
        })
        .catch(err => {
            console.error("Fetch error:", err);
            setData(null);
            setLoading(false);
        });
    }, [OrderID]);

    if (loading) {
        return (
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mt={15}>
                <CircularProgress sx={{ color: '#d32f2f' }} size={60} />
                <Typography sx={{ mt: 2, color: '#000', fontWeight: 'bold' }}>جاري جلب بيانات الشحنة...</Typography>
            </Box>
        );
    }

    if (!data) {
        return (
            <Container maxWidth="sm" sx={{ mt: 10, textAlign: 'center', direction: 'rtl' }}>
                <Paper elevation={0} sx={{ p: 5, borderRadius: 4, border: '2px dashed #ccc', bgcolor: '#fafafa' }}>
                    <Box sx={{ color: '#d32f2f', mb: 2 }}>
                        <SearchOff sx={{ fontSize: 100, opacity: 0.5 }} />
                    </Box>
                    <Typography variant="h5" fontWeight="bold" gutterBottom>رقم الشحنة غير صحيح</Typography>
                    <Typography color="textSecondary" sx={{ mb: 3 }}>
                        عذراً، لم نجد أي بيانات للشحنة رقم (<strong>{OrderID}</strong>).
                    </Typography>
                    <Button 
                        variant="contained" 
                        onClick={() => navigate('/')} 
                        sx={{ bgcolor: '#000', px: 4, '&:hover': { bgcolor: '#d32f2f' } }}
                    >العودة للرئيسية</Button>
                </Paper>
            </Container>
        );
    }

    const activeStep = data.status_code;
    const isReturned = data.status_code === 7;

    return (
        <Container maxWidth="md" sx={{ mt: 4, mb: 4, direction: 'rtl' }}>
            <Paper elevation={4} sx={{ p: { xs: 2, md: 4 }, borderRadius: 3, borderTop: '8px solid #d32f2f' }}>
                
                <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={3} flexWrap="wrap">
                    <Box mb={{ xs: 2, md: 0 }}>
                        <Typography variant="h4" fontWeight="bold" color="#000">طلب رقم #{data.order_id}</Typography>
                        <Typography variant="h6" color="textSecondary" sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                            <Storefront sx={{ ml: 1, color: '#d32f2f' }} /> متجر: {data.store_name}
                        </Typography>
                    </Box>
                    <Chip 
                        label={data.status_text} 
                        sx={{ bgcolor: isReturned ? '#000' : '#d32f2f', color: '#fff', fontWeight: 'bold', fontSize: '1rem', p: 2 }} 
                    />
                </Box>

                <Divider sx={{ mb: 5 }} />

                {!isReturned ? (
                    <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 6 }}>
                        {steps.map((step, index) => {
                            const historyItem = data.fullHistory.find(h => mapStatusToStep(h.Status) === index);

                            return (
                                <Step key={step.label}>
                                    <StepLabel 
                                        StepIconComponent={() => (
                                            <Avatar sx={{ 
                                                width: 50, height: 50,
                                                bgcolor: index <= activeStep ? '#d32f2f' : '#e0e0e0',
                                                color: '#fff',
                                                boxShadow: index === activeStep ? '0 0 15px rgba(211, 47, 47, 0.5)' : 'none',
                                                transition: 'all 0.3s ease',
                                                animation: index === activeStep ? 'pulse 2s infinite' : 'none'
                                            }}>
                                                {step.icon}
                                            </Avatar>
                                        )}
                                    >
                                        <Typography fontWeight={index === activeStep ? "bold" : "normal"} color={index <= activeStep ? "#000" : "textSecondary"}>
                                            {step.label}
                                        </Typography>
                                        {historyItem && (
                                            <Typography variant="caption" display="block" sx={{ color: 'textSecondary', mt: 0.5, fontSize: '0.75rem' }}>
                                                {historyItem.Date} <br/> {historyItem.Time}
                                            </Typography>
                                        )}
                                    </StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                ) : (
                    <Box textAlign="center" sx={{ bgcolor: '#fff0f0', p: 3, borderRadius: 2, mb: 4, border: '1px solid #d32f2f' }}>
                        <ErrorOutline sx={{ fontSize: 60, color: '#d32f2f', mb: 1 }} />
                        <Typography variant="h5" color="#d32f2f" fontWeight="bold">تم إرجاع الطلب</Typography>
                        <Typography variant="h6" mt={1}>سبب الارجاع: {data.return_reason || "غير مذكور"}</Typography>
                    </Box>
                )}

                {activeStep >= 1 && !isReturned && (
                    <Paper variant="outlined" sx={{ p: 3, border: '2px solid #000', borderRadius: 3, mb: 4, bgcolor: '#fafafa' }}>
                        <Grid container alignItems="center" spacing={3}>
                            <Grid item>
                                <Avatar sx={{ width: 70, height: 70, bgcolor: '#000', border: '3px solid #d32f2f' }}>
                                    <Person sx={{ fontSize: 40, color: '#fff' }} />
                                </Avatar>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="subtitle2" color="#d32f2f" fontWeight="bold">مندوب التوصيل الحالي</Typography>
                                <Typography variant="h5" fontWeight="bold" color="#000">{data.delegate_name}</Typography>
                            {data.delegate_phone && (
                                <Button 
                                    variant="outlined" 
                                    startIcon={<Phone sx={{ ml: 1 }} />}
                                    href={PhoneLink(data.delegate_phone)} 
                                    sx={{ mt: 1, color: '#000', borderColor: '#000' }}
                                >
                                    {data.delegate_phone}
                                </Button>
                                )}
                            </Grid>
                        </Grid>
                    </Paper>
                )}

                <Box sx={{ p: 3, bgcolor: '#f9f9f9', borderRadius: 2 }}>
                    
                    <Typography variant="h6" fontWeight="bold" gutterBottom color="#000">تكلفة الشحنة (بدون التوصيل):</Typography>
                    <Typography variant="h5" fontWeight="bold" color="#d32f2f">{data.total_price} دل</Typography>
                </Box>
            </Paper>

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes pulse {
                    0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(211, 47, 47, 0.4); }
                    70% { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(211, 47, 47, 0); }
                    100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(211, 47, 47, 0); }
                }
            `}} />
        </Container>
    );
};

export default TrackingView;