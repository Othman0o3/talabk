import React, { useState, useMemo } from 'react';
import { Box, Typography, TextField, Autocomplete, Paper, Grid, Card, CardContent } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FemaleOutlinedIcon from '@mui/icons-material/FemaleOutlined';
import Badge from '@mui/material/Badge';
import StoreIcon from '@mui/icons-material/Storefront';
import { deliveryData } from '../utils/deliveryData'; 

function PriceCalculator() {
    const [selectedBranch, setSelectedBranch] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    const branches = deliveryData.map(item => item.branch);

    const availableCities = useMemo(() => {
        const branchData = deliveryData.find(b => b.branch === selectedBranch);
        return branchData ? branchData.destinations : [];
    }, [selectedBranch]);

    const deliveryInfo = useMemo(() => {
        return availableCities.find(d => d.city === selectedCity);
    }, [selectedCity, availableCities]);

    return (
        <Box sx={{ maxWidth: 900, mx: 'auto', p: 4, direction: 'rtl' }}>
            <Typography variant="h4" align="center" sx={{ mb: 4, fontFamily: 'Almarai', fontWeight: 'bold', color: '#1a1a1a' }}>
                حاسبة تكاليف الشحن 
            </Typography>

            <Paper elevation={4} sx={{ p: { xs: 2, md: 5 }, borderRadius: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Autocomplete
                            options={branches}
                            value={selectedBranch}
                            onChange={(e, newValue) => {
                                setSelectedBranch(newValue);
                                setSelectedCity(null); 
                            }}
                            renderInput={(params) => <TextField {...params} label="من فرع (نقطة الانطلاق)" variant="outlined" />}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Autocomplete
                            options={availableCities.map(d => d.city)}
                            value={selectedCity}
                            disabled={!selectedBranch}
                            onChange={(e, newValue) => setSelectedCity(newValue)}
                            renderInput={(params) => <TextField {...params} label="إلى مدينة (وجهة الوصول)" variant="outlined" />}
                        />
                    </Grid>
                </Grid>

                {deliveryInfo && (
                    <Box sx={{ mt: 6 }}>
                        <Typography variant="h6" align="center" sx={{ mb: 4, color: '#555' }}>
                            تفاصيل الشحن من {selectedBranch} إلى {selectedCity}
                        </Typography>
                        
                        <Grid container spacing={3} justifyContent="center">
                            <Grid item xs={12} sm={6}>
                                <Card sx={{ height: '100%', borderTop: '5px solid #db262a', boxShadow: 3 }}>
                                    <CardContent sx={{ textAlign: 'center', py: 4 }}>
                                        <LocalShippingIcon sx={{ fontSize: 50, color: '#db262a', mb: 2 }} />
                                        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>توصيل لباب البيت</Typography>
                                        <Typography variant="h3" color="primary" sx={{ fontWeight: '900', my: 2 }}>
                                            {deliveryInfo.homeDelivery} <small style={{ fontSize: '3rem' }}>د.ل</small>
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            المدة التقديرية: {deliveryInfo.time}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            {deliveryInfo.hasOwnProperty('branchPickup') && (
                                <Grid item xs={12} sm={6}>
                                    <Card sx={{ height: '100%', borderTop: '5px solid #2e7d32', boxShadow: 3 }}>
                                        <CardContent sx={{ textAlign: 'center', py: 4 }}>
                                            <StoreIcon sx={{ fontSize: 50, color: '#2e7d32', mb: 2 }} />
                                            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>استلام من المكتب</Typography>
                                            <Typography variant="h3" sx={{ fontWeight: '900', my: 2, color: '#2e7d32' }}>
                                                {!deliveryInfo.branchPickup ? "لايوجد" : `${deliveryInfo.branchPickup} د.ل`}
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary">
                                                المدة التقديرية: {deliveryInfo.time}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )}
                            {deliveryInfo.hasOwnProperty('female') && (
                                <Grid item xs={12} sm={6}>
                                    <Card sx={{ height: '100%', borderTop: '5px solid #9c27b0', boxShadow: 3 }}>
                                        <CardContent sx={{ textAlign: 'center', py: 4 }}>
                                            <Badge
                                                overlap="circular"
                                                badgeContent={<FemaleOutlinedIcon fontSize="small" />}
                                                sx={{
                                                    '& .MuiBadge-badge': {
                                                        backgroundColor: '#9c27b0',
                                                        color: '#fff'
                                                    }
                                                }}
                                            >
                                                <LocalShippingIcon sx={{ fontSize: 50, color: '#9c27b0', mb: 2 }} />
                                            </Badge>
                                            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>توصيل نسائي</Typography>
                                            <Typography variant="h3" sx={{ fontWeight: '900', my: 2, color: '#9c27b0' }}>
                                                {!deliveryInfo.female ? "لايوجد" : `${deliveryInfo.female} د.ل`}
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary">
                                                المدة التقديرية: {deliveryInfo.time}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )}
                        </Grid>
                    </Box>
                )}
            </Paper>
            <Typography sx={{fontWeight:'bold' , color: '#db262a'}} variant='h6' align='center'>
                الأسعار تشمل الطرود الصغيرة (حتى 25×25×30 سم)، وما يتجاوز ذلك يسعر بناءً على حجم الطرد.
            </Typography>
        </Box>
    );
}

export default PriceCalculator;