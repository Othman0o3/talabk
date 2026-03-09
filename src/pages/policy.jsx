import React, { useState } from 'react';
import { Box, Container, Grid, Typography, List, ListItemButton, ListItemText, Paper, Divider, Stack } from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';

function Policy() {
    const [activeTab, setActiveTab] = useState('shipping');

    const ShippingContent = () => (
        <Box>
            <Typography variant="h5" sx={{ fontFamily: 'Almarai', fontWeight: 800, mb: 3, color: '#db262a' }}>
                سياسات ومدد الشحن
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontFamily: 'Almarai', lineHeight: 1.8 }}>
                يوفر موقع "طلبك" خدمات الشحن والتوصيل لأغلب مناطق ليبيا، مع الالتزام بأعلى معايير السرعة والدقة.
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 3, mb: 1 }}>• مدة تجهيز الشحنة:</Typography>
            <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
                يتم تجهيز الطلبات فور استلامها من العميل سواء في مقر الشركة أو عبر طلب مندوبنا. تُجمع الشحنات في مستودعاتنا لإعادة توجيهها حسب وجهتها النهائية.
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 3, mb: 1 }}>• الجدول الزمني للتوصيل:</Typography>
            <Stack spacing={2} sx={{ pr: 2, borderRight: '3px solid #db262a' }}>
                <Box>
                    <Typography variant="body2" sx={{ fontWeight: 800 }}>- طرابلس:</Typography>
                    <Typography variant="body2" color="text.secondary">خلال 24 ساعة بعد استلام البضاعة.</Typography>
                </Box>
                <Box>
                    <Typography variant="body2" sx={{ fontWeight: 800 }}>- المنطقة الغربية (الزاوية إلى زوارة):</Typography>
                    <Typography variant="body2" color="text.secondary">من 48 إلى 72 ساعة عمل من تاريخ الاستلام.</Typography>
                </Box>
                <Box>
                    <Typography variant="body2" sx={{ fontWeight: 800 }}>- المنطقة الشرقية 1 (حتى حدود مصراتة):</Typography>
                    <Typography variant="body2" color="text.secondary">من 48 إلى 72 ساعة عمل من تاريخ الاستلام.</Typography>
                </Box>
                <Box>
                    <Typography variant="body2" sx={{ fontWeight: 800 }}>- المنطقة الشرقية 2 (بنغازي، البيضاء، شحات، طبرق):</Typography>
                    <Typography variant="body2" color="text.secondary">من 5 إلى 7 أيام عمل من تاريخ الاستلام.</Typography>
                </Box>
            </Stack>

            <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 4, mb: 1 }}>• نطاق خدماتنا:</Typography>
            <Typography variant="body2" color="text.secondary">
                نغطي طرابلس الكبرى، مصراتة، الزاوية، بنغازي والمدن المجاورة لها.
            </Typography>
        </Box>
    );

    const PrivacyContent = () => (
        <Box>
            <Typography variant="h5" sx={{ fontFamily: 'Almarai', fontWeight: 800, mb: 3, color: '#db262a' }}>
                الخصوصية ونظام تتبع الشحنات
            </Typography>
            <Stack spacing={3}>
                <Box sx={{ p: 2, bgcolor: '#f9f9f9', borderRadius: 2, borderRight: '4px solid #db262a' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 900, mb: 1 }}>تتبع الطلب إلكترونياً</Typography>
                    <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                        نعمل بنظام إدارة إلكتروني متكامل. سيتم مراسلتك عبر البريد الإلكتروني بتفاصيل الطلب، رقم الشحنة، وتكاليف الشحن. يمكن متابعة حالة الشحنة مباشرة عبر حسابك (تتبع شحنة).
                    </Typography>
                </Box>
                <Box sx={{ p: 2, bgcolor: '#f9f9f9', borderRadius: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 900, mb: 1 }}>أمان المعلومات</Typography>
                    <Typography variant="body2">
                        نلتزم بحماية بياناتك الشخصية وبيانات العملاء. استخدام المعلومات يقتصر على تحسين جودة التوصيل والتسويات المالية فقط.
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );

    const TermsContent = () => {
        const clauses = [
            "تكون البضاعة المستلمة من قبل موظفينا بعد تسجيلها إلكترونياً واستلامها فعلياً تحت مسؤولية خدمة طلبك.",
            "في حالة رفض الاستلام، يجب على العميل استلام الشحنة المستردة خلال 5 أيام، وإلا تخلي الإدارة مسؤوليتها عن أي ضرر أو ضياع.",
            "يجب ألا تحتوي الشحنة على مواد محظورة، خطرة، أو ذات قيمة غير معتادة كالأحجار الكريمة، الذهب، والأسلحة.",
            "تخلي الإدارة مسؤوليتها القانونية عن المواد التي تشكل خطراً على الإنسان أو وسائل النقل أو التي يحظرها القانون.",
            "يتحمل المرسل مسؤولية دقة البيانات المسجلة إلكترونياً، وأي خطأ يخلي مسؤولية الشركة عن التأخير أو الأخطاء المالية.",
            "يحق لخدمة طلبك فتح وتفتيش أي شحنة بالمسح الضوئي أو التفتيش العادي في أي وقت تراه مناسباً.",
            "إخلاء مسؤولية في الظروف القاهرة: (عمليات السطو، الأوبئة، الكوارث الطبيعية، الحروب، والحرائق).",
            "المطالبات المالية الناتجة عن التلف يجب تقديمها بطلب رسمي خلال يومين فقط من تاريخ معاينة الشحنة بعد الاسترداد.",
            "لا يحق استلام التسويات المالية إلا عن طريق 'مالك المتجر' أو الشخص المفوض منه رسمياً.",
            "يحق للشركة تحديد الأسعار بناءً على السوق، وتفرض ضريبة رواجع لا تتجاوز 20% إذا تجاوزت نسبة المرجوعات 50%.",
            "الأسعار تشمل الطرود الصغيرة (حتى 25×25×30 سم)، وما يتجاوز ذلك يسعر بناءً على حجم الطرد."
        ];

        return (
            <Box>
                <Typography variant="h5" sx={{ fontFamily: 'Almarai', fontWeight: 800, mb: 3, color: '#db262a' }}>
                    اتفاقية استخدام الخدمة
                </Typography>
                <Typography variant="body2" paragraph sx={{ mb: 3 }}>
                    نظرة عامة: يتم إدارة هذا الموقع من قبل فريق "طلبك". باستخدامك لخدماتنا، فإنك توافق على الالتزام بالشروط التالية:
                </Typography>
                
                <Stack spacing={1.5}>
                    {clauses.map((clause, index) => (
                        <Paper key={index} elevation={0} sx={{ p: 2, bgcolor: '#fcfcfc', border: '1px solid #eee', display: 'flex', gap: 2 }}>
                            <Typography sx={{ fontWeight: 900, color: '#db262a' }}>{index + 1}</Typography>
                            <Typography variant="body2" sx={{ fontFamily: 'Almarai', lineHeight: 1.6 }}>{clause}</Typography>
                        </Paper>
                    ))}
                </Stack>

                <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 4, mb: 2 }}>فروعنا الحالية:</Typography>
                <Grid container spacing={2}>
                    {['طرابلس', 'مصراتة', 'بنغازي', 'غريان', 'سبها'].map((city) => (
                        <Grid item xs={6} sm={4} key={city}>
                            <Paper variant="outlined" sx={{ p: 1.5, textAlign: 'center', fontFamily: 'Almarai', fontWeight: 700, color: '#555' }}>
                                {city}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        );
    };

    return (
        <Box sx={{ direction: 'rtl', py: 8, bgcolor: '#fbfbfb', minHeight: '100vh' }}>
            <Container maxWidth="lg">
                <Typography variant="h4" sx={{ fontFamily: 'Almarai', fontWeight: 900, mb: 5, textAlign: 'center' }}>
                    المركز القانوني و <span style={{ color: '#db262a' }}>السياسات</span>
                </Typography>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={0} sx={{ borderRadius: 3, border: '1px solid #eee', overflow: 'hidden', position: 'sticky', top: 100 }}>
                            <List component="nav" sx={{ p: 0 }}>
                                <ListItemButton selected={activeTab === 'shipping'} onClick={() => setActiveTab('shipping')} sx={{ py: 2 }}>
                                    <LocalShippingIcon sx={{ ml: 2, color: activeTab === 'shipping' ? '#db262a' : '#666' }} />
                                    <ListItemText primary="سياسات الشحن والتوصيل" sx={{ textAlign: 'right' }} />
                                </ListItemButton>
                                <Divider />
                                <ListItemButton selected={activeTab === 'privacy'} onClick={() => setActiveTab('privacy')} sx={{ py: 2 }}>
                                    <SecurityIcon sx={{ ml: 2, color: activeTab === 'privacy' ? '#db262a' : '#666' }} />
                                    <ListItemText primary="سياسة الخصوصية وتتبع الشحنات" sx={{ textAlign: 'right' }} />
                                </ListItemButton>
                                <Divider />
                                <ListItemButton selected={activeTab === 'terms'} onClick={() => setActiveTab('terms')} sx={{ py: 2 }}>
                                    <GavelIcon sx={{ ml: 2, color: activeTab === 'terms' ? '#db262a' : '#666' }} />
                                    <ListItemText primary="اتفاقية الخدمة (11 بند)" sx={{ textAlign: 'right' }} />
                                </ListItemButton>
                            </List>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={0} sx={{ p: { xs: 2, md: 4 }, borderRadius: 3, border: '1px solid #eee', minHeight: 500 }}>
                            {activeTab === 'shipping' && <ShippingContent />}
                            {activeTab === 'privacy' && <PrivacyContent />}
                            {activeTab === 'terms' && <TermsContent />}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Policy;