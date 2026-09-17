import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import SectionHeading from './SectionHeading';
import { useContent } from '../i18n.jsx';

export default function FAQ() {
  const { faq } = useContent();

  return (
    <Box component="section" id="faq" sx={{ py: { xs: 8, md: 14 } }}>
      <Container maxWidth="md">
        <SectionHeading
          label={faq.label}
          headingTop={faq.headingTop}
          headingAccent={faq.headingAccent}
          subheading={faq.subheading}
          sx={{ mb: { xs: 5, md: 8 } }}
        />

        {faq.items.map((item) => (
          <Accordion key={item.question}>
            <AccordionSummary
              expandIcon={
                <Box
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: '50%',
                    bgcolor: 'brand.softPrimary',
                    color: 'primary.main',
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  <AddRoundedIcon sx={{ fontSize: 18 }} />
                </Box>
              }
              sx={{
                '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                  transform: 'rotate(45deg)',
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: '1.0625rem',
                  paddingInlineEnd: 2,
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: 'text.secondary' }}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
