import React from "react";
import { Box, Typography } from "@mui/material";

function Contain() {
    return (
        <Box
        sx={{
            minHeight: "calc(100vh - 80px)", 
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",    
            backgroundColor: "#f9f9f9",
            direction: "rtl"
        }}
        >
        <Typography
            variant="h2" 
            sx={{
            fontWeight: "bold",
            color: "#db262a", 
            fontFamily: "Almarai, sans-serif",
            textAlign: "center",
            animation: "fadeIn 2s ease-in-out",
            "@keyframes fadeIn": {
                from: { opacity: 0 },
                to: { opacity: 1 },
            },
            }}
        >
            قريباً<span style={{color:"black"}}>...</span>
        </Typography>
        
        <Typography sx={{ color: '#666', mt: 2, fontFamily: 'Almarai' }}>
            متجر طلبك الإلكتروني تحت الإنشاء حالياً
        </Typography>
        </Box>
    );
}
export default Contain;