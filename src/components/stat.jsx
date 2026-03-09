import { Box, Container, Grid, Typography } from '@mui/material';

const stats = [
    { label: 'شحنة سنويا', value: '100K+' },
    { label: 'مدن نغطيها', value: '10+' },
    { label: 'متجر يثق بنا', value: '1000+' },
    { label: 'مندوب محترف', value: '200+' },
];

function StatsSection() {
    return (
        <Box sx={{ py: 6, backgroundColor: '#fdfdfd', borderBottom: '1px solid #eee' }}>
        <Container>
            <Grid container spacing={3} justifyContent="center">
            {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index} sx={{ textAlign: 'center' }}>
                <Typography variant="h4" fontWeight="800" sx={{ color: 'rgb(219, 38, 42)', fontFamily: 'Almarai' }}>
                    {stat.value}
                </Typography>
                <Typography variant="body1" sx={{ color: '#666', fontFamily: 'Almarai', fontWeight: 'bold' }}>
                    {stat.label}
                </Typography>
                </Grid>
            ))}
            </Grid>
        </Container>
        </Box>
    );
}
export default StatsSection;