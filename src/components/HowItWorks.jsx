import { Box, Container, Grid, Typography } from '@mui/material';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import SectionHeading from './SectionHeading';
import { howItWorks } from '../content';

/**
 * ILLUSTRATION PLACEHOLDERS.
 * Cards without an `image` show a large glyph in a rounded panel. Give a card an
 * `image` in content.js to use a real product shot instead (see the Live
 * Notification card / public/notification.png); ideal asset ~800×640 PNG @2x.
 */
const ART = {
  people: BadgeRoundedIcon,
  vehicle: LocalShippingRoundedIcon,
  payroll: PaymentsRoundedIcon,
  alerts: NotificationsActiveRoundedIcon,
};

function ArtPanel({ art, image, alt, zoom = 1 }) {
  const Icon = ART[art];
  return (
    <Box
      aria-hidden={!image}
      sx={{
        position: 'relative',
        height: { xs: 220, md: 280 },
        borderRadius: 5,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'brand.border',
        display: 'grid',
        placeItems: 'center',
        overflow: 'hidden',
        // Soft tinted halo behind the glyph
        '&::before': {
          content: '""',
          position: 'absolute',
          width: 220,
          height: 220,
          borderRadius: '50%',
          background: (theme) =>
            `radial-gradient(closest-side, ${theme.palette.brand.glow}, transparent)`,
        },
      }}
    >
      {image ? (
        <>
          <Box
            component="img"
            src={image}
            alt={alt}
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              // Dense shots (wide tables) need enlarging to stay legible
              transform: `scale(${zoom})`,
              transformOrigin: 'left top',
            }}
          />
          {/* Softens the bottom crop so the shot fades out instead of being sliced */}
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              inset: 'auto 0 0 0',
              height: '38%',
              background: (theme) =>
                `linear-gradient(to bottom, transparent, ${theme.palette.background.paper})`,
            }}
          />
        </>
      ) : (
        <Box
          sx={{
            position: 'relative',
            width: { xs: 84, md: 100 },
            height: { xs: 84, md: 100 },
            borderRadius: 7,
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            display: 'grid',
            placeItems: 'center',
            boxShadow: (theme) => `0 26px 46px -20px ${theme.palette.brand.glow}`,
          }}
        >
          <Icon sx={{ fontSize: { xs: 40, md: 48 } }} />
        </Box>
      )}
    </Box>
  );
}

export default function HowItWorks() {
  return (
    <Box component="section" id="how-it-works" sx={{ py: { xs: 8, md: 14 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          label={howItWorks.label}
          headingTop={howItWorks.headingTop}
          headingAccent={howItWorks.headingAccent}
          subheading={howItWorks.subheading}
          sx={{ mb: { xs: 5, md: 8 } }}
        />

        <Grid container spacing={{ xs: 2.5, md: 3 }}>
          {howItWorks.cards.map((card) => (
            <Grid key={card.title} size={{ xs: 12, sm: 6 }}>
              <Box
                sx={{
                  height: '100%',
                  bgcolor: 'brand.card',
                  border: '1px solid',
                  borderColor: 'brand.border',
                  borderRadius: 6,
                  p: { xs: 2, md: 2.5 },
                  transition: 'transform .2s ease, box-shadow .2s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 30px 60px -40px rgba(14, 23, 42, 0.5)',
                  },
                }}
              >
                <ArtPanel
                  art={card.art}
                  image={card.image}
                  alt={card.imageAlt}
                  zoom={card.imageZoom}
                />
                <Box sx={{ px: { xs: 1, md: 1.5 }, pt: 3, pb: 1.5 }}>
                  <Typography variant="h5" sx={{ mb: 1 }}>
                    {card.title}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{card.description}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
