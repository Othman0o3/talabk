import react from "react";
import Hero from "../components/Hero";
import StatsSection from "../components/stat";
import Footer from "../components/footer";
import { Box } from "@mui/material";
import Services from "../components/services";
import PriceCalculator from "../components/calculator";
function Main({MainRef, servicesRef, ratesRef, contactRef }){
    return(
        <Box>
            <Box ref={MainRef}>
                <Hero sx={{ minHeight: '80vh', py: 10 }} /> 
                <StatsSection/>

            </Box>

            <Box ref={servicesRef} sx={{ minHeight: '80vh', py: 10 }}>
                <Services />
            </Box>

            <Box ref={ratesRef} sx={{ minHeight: '80vh', py: 10, bgcolor: '#f9f9f9' }}>
                <PriceCalculator/>
            </Box>

            <Box ref={contactRef} sx={{ py: 10 }}>
            </Box>
        </Box>
    )
}
export default Main;