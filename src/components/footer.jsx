import { Box, Container, Typography, Link, Stack, Divider ,Grid , IconButton} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsappIcon from '@mui/icons-material/WhatsApp';
import Email from '@mui/icons-material/Email';
import Phone from '@mui/icons-material/Phone';
function Footer() {
    return (
        <Box sx={{ bgcolor: '#ffffff', py: 6, borderTop: '1px solid #eee', direction: 'rtl' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between">
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" fontWeight="bold" sx={{ color: 'rgb(219, 38, 42)', mb: 2, fontFamily: 'Almarai' }}>
                    طلبك - Talabk
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', fontFamily: 'Almarai', lineHeight: 1.8 }}>
                    الشركة الرائدة في مجال الخدمات اللوجستية والتوصيل داخل ليبيا. نصلك أينما كنت بأمان وسرعة.
                    </Typography>
                </Grid>
                
                <Grid item xs={6} md={2}>
                    <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2, fontFamily: 'Almarai' }}>روابط سريعة</Typography>
                    <Stack spacing={1}>
                    <Link href="#" sx={{ color: '#777', textDecoration: 'none', fontFamily: 'Almarai', '&:hover': { color: 'rgb(219, 38, 42)' } }}>الرئيسية</Link>
                    <Link href="#" sx={{ color: '#777', textDecoration: 'none', fontFamily: 'Almarai', '&:hover': { color: 'rgb(219, 38, 42)' } }}>خدماتنا</Link>
                    <Link href="#" sx={{ color: '#777', textDecoration: 'none', fontFamily: 'Almarai', '&:hover': { color: 'rgb(219, 38, 42)' } }}>اتصل بنا</Link>
                    </Stack>
                </Grid>

                <Grid item xs={6} md={3}>
                    <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2, fontFamily: 'Almarai' }}>تواصل معنا على</Typography>
                    <Stack direction="row" spacing={2}>
                    <IconButton sx={{ color: '#3b5998' }} href='https://www.facebook.com/talabk.Libya' target='_blank'><FacebookIcon /></IconButton>
                    <IconButton sx={{ color: '#4be865' }} href='https://api.whatsapp.com/send?phone=%2B218927716601&fbclid=IwY2xjawQBkTNleHRuA2FlbQIxMABicmlkETFvMWU5R0t2eVVaQ2xSajFsc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHtJSgqofpNbWxIzmQgALWGx2NKQPSzr3lSecl-59H0AKydBSd39y4WCv9GZx_aem_E8X6GOnPNozjcIP_GX99DQ' target='_blank'><WhatsappIcon /></IconButton>
                    <a href="mailto:info@talabk.ly" target="_blank" rel="noopener noreferrer">
                    <IconButton sx={{ color: '#e04d43' }}>
                        <Email />
                    </IconButton>
                    </a>
                    <a href="tel:0927716601" target="_blank" rel="noopener noreferrer">
                    <IconButton sx={{ color: '#736f6f' }}>
                        <Phone />
                    </IconButton>
                    </a>
                    </Stack>
                </Grid>
                </Grid>

                <Divider sx={{ my: 4 }} />

                <Typography variant="body2" color="textSecondary" align="center" sx={{ fontFamily: 'Almarai' }}>
                {'جميع الحقوق محفوظة © '} {new Date().getFullYear()} {' شركة طلبك للخدمات اللوجستية'}
                </Typography>
            </Container>
        </Box>
    );
}
export default Footer;