import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import SectionHeading from './SectionHeading';
import { useContent } from '../i18n.jsx';

function CheckPoint({ children }) {
  return (
    <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
      <Box
        sx={{
          width: 24,
          height: 24,
          flexShrink: 0,
          borderRadius: '50%',
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          display: 'grid',
          placeItems: 'center',
          boxShadow: (theme) => `0 6px 14px -6px ${theme.palette.brand.glow}`,
        }}
      >
        <CheckRoundedIcon sx={{ fontSize: 15 }} />
      </Box>
      <Typography sx={{ fontSize: '0.9375rem', color: 'text.primary' }}>
        {children}
      </Typography>
    </Stack>
  );
}

export default function Stats() {
  const { stats } = useContent();

  return (
    <Box component="section" id="features" sx={{ py: { xs: 8, md: 14 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          label={stats.label}
          headingTop={stats.headingTop}
          headingAccent={stats.headingAccent}
          subheading={stats.subheading}
          sx={{ mb: { xs: 5, md: 8 } }}
        />

        <Grid container spacing={{ xs: 2.5, md: 3 }}>
          {stats.cards.map((card) => (
            <Grid key={card.stat} size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  height: '100%',
                  bgcolor: 'brand.card',
                  border: '1px solid',
                  borderColor: 'brand.border',
                  borderRadius: 6,
                  p: { xs: 3, md: 4 },
                  transition: 'transform .2s ease, box-shadow .2s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 30px 60px -40px rgba(14, 23, 42, 0.5)',
                  },
                }}
              >
                <Typography
                  variant="h3"
                  component="p"
                  sx={{ fontSize: { xs: '1.9rem', md: '2.15rem' } }}
                >
                  {card.stat}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mt: 1 }}>
                  {card.caption}
                </Typography>

                <Divider sx={{ my: { xs: 3, md: 3.5 } }} />

                <Stack spacing={1.75}>
                  {card.points.map((point) => (
                    <CheckPoint key={point}>{point}</CheckPoint>
                  ))}
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
