import { Box, Typography, Button, Container, Grid, colors } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BackImg from '../images/web-2.webp'
function Hero({MainRef}) {
    return (
        <Box sx={{ 
        backgroundImage: `
        linear-gradient(rgba(255, 255, 255, 0.28), rgba(255, 247, 247, 0.19)),

            url('${BackImg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: { xs: 8, md: 12 }, 
        direction: 'rtl',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        }}>
        <Container>
            <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
                <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
                <Typography 
                    variant="h2" 
                    fontWeight="800" 
                    sx={{ 
                    color: '#333', 
                    fontFamily: 'Almarai',
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    lineHeight: 1.2,
                    mb: 2
                    }}
                >
                    وصل شحناتك <br />
                    <span style={{ color: 'rgb(219, 38, 42)' }}>بأمان وسرعة</span>
                </Typography>
                
                <Typography 
                    variant="h6" 
                    sx={{ 
                    color: '#020202',
                    mb: 4, 
                    fontFamily: 'Almarai', 
                    fontWeight: 600,
                    lineHeight: 1.6
                    }}
                >
                        في <span style={{color: 'rgb(173, 1, 4)'}}>"طلبك"</span>
، نحن لا ننقل الطرود فقط، بل نبني جسور الثقة بينك وبين عملائك. خدمات توصيل احترافية تغطي كافة المدن الليبية بمعايير عالمية.
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                    <Button 
                    variant="contained" 
                    size="large"
                    sx={{ 
                        borderRadius: '8px', 
                        px: 4, 
                        py: 1.5,
                        backgroundColor: 'rgb(219, 38, 42)',
                        fontFamily: 'Almarai',
                        fontSize: '18px',
                        '&:hover': { backgroundColor: '#a31b1f' }
                    }}
                    href='https://talabksys.ly' rel='noreferrer'
                    endIcon={<ArrowForwardIcon sx={{ transform: 'rotate(180deg)' }} />}
                    >
                    ابدأ معنا الآن
                    </Button>
                </Box>
                </Box>
            </Grid>

            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box 

                />
            </Grid>
            </Grid>
        </Container>
        </Box>
    );
}
export default Hero;