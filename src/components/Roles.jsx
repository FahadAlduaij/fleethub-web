import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import RouteRoundedIcon from '@mui/icons-material/RouteRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import SectionHeading from './SectionHeading';
import { useContent } from '../i18n.jsx';

const ART = {
  ops: RouteRoundedIcon,
  hr: BadgeRoundedIcon,
  accounts: ReceiptRoundedIcon,
};

function CheckPoint({ children }) {
  return (
    <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
      <Box
        sx={{
          width: 22,
          height: 22,
          flexShrink: 0,
          borderRadius: '50%',
          bgcolor: 'brand.softPrimaryStrong',
          color: 'primary.main',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <CheckRoundedIcon sx={{ fontSize: 14 }} />
      </Box>
      <Typography sx={{ fontSize: '0.9375rem', color: 'text.secondary' }}>
        {children}
      </Typography>
    </Stack>
  );
}

export default function Roles() {
  const { roles } = useContent();

  return (
    <Box component="section" id="roles" sx={{ py: { xs: 8, md: 14 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          label={roles.label}
          headingTop={roles.headingTop}
          headingAccent={roles.headingAccent}
          subheading={roles.subheading}
          sx={{ mb: { xs: 5, md: 8 } }}
        />

        <Grid container spacing={{ xs: 2.5, md: 3 }}>
          {roles.cards.map((card) => {
            const Icon = ART[card.art];
            return (
              <Grid key={card.title} size={{ xs: 12, md: 4 }}>
                <Stack
                  sx={{
                    height: '100%',
                    bgcolor: 'brand.card',
                    border: '1px solid',
                    borderColor: 'brand.border',
                    borderRadius: 6,
                    p: { xs: 3, md: 3.5 },
                    transition: 'transform .2s ease, box-shadow .2s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 30px 60px -40px rgba(14, 23, 42, 0.5)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: 4,
                      bgcolor: 'primary.main',
                      color: 'primary.contrastText',
                      display: 'grid',
                      placeItems: 'center',
                      boxShadow: (theme) =>
                        `0 18px 34px -18px ${theme.palette.brand.glow}`,
                    }}
                  >
                    <Icon sx={{ fontSize: 26 }} />
                  </Box>

                  <Typography variant="h5" sx={{ mt: 2.5 }}>
                    {card.title}
                  </Typography>
                  <Typography
                    sx={{ color: 'text.secondary', mt: 1, flexGrow: 1 }}
                  >
                    {card.description}
                  </Typography>

                  <Divider sx={{ my: { xs: 3, md: 3.5 } }} />

                  <Stack spacing={1.75}>
                    {card.points.map((point) => (
                      <CheckPoint key={point}>{point}</CheckPoint>
                    ))}
                  </Stack>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
