import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import HowItWorks from './components/HowItWorks';
import Roles from './components/Roles';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      <Navbar />
      <Box component="main">
        <Hero />
        <Stats />
        <HowItWorks />
        <Roles />
        <FAQ />
        <CTA />
      </Box>
      <Footer />
    </Box>
  );
}
