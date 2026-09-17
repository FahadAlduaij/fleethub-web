import { Box, Container, Stack, Typography } from '@mui/material';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import RouteRoundedIcon from '@mui/icons-material/RouteRounded';
import ActionButton from './ActionButton';
import DashboardMockup from './DashboardMockup';
import { useContent } from '../i18n.jsx';

/**
 * DECORATIVE ICON SQUARES — placeholders.
 * Each is a soft white rounded square holding a MUI glyph. Swap the `Icon` for a
 * real brand/integration mark (SVG, or 96×96 PNG @2x rendered at 48px).
 * `pos` values are relative to the hero text block, so they frame the headline
 * and stay clear of the dashboard screenshot below it.
 */
const FLOATING_ICONS = [
  { Icon: BadgeRoundedIcon, pos: { top: '12%', left: '-10%' }, rotate: -8 },
  {
    Icon: LocalShippingRoundedIcon,
    pos: { top: '62%', left: '-5%' },
    rotate: 6,
  },
  { Icon: RouteRoundedIcon, pos: { top: '10%', right: '-10%' }, rotate: 7 },
  {
    Icon: ReceiptLongRoundedIcon,
    pos: { top: '60%', right: '-5%' },
    rotate: -6,
  },
];

function FloatingIcon({ Icon, pos, rotate }) {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        ...pos,
        display: { xs: 'none', lg: 'grid' },
        placeItems: 'center',
        width: 84,
        height: 84,
        borderRadius: 6,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'brand.border',
        color: 'primary.main',
        boxShadow: '0 24px 48px -24px rgba(14, 23, 42, 0.35)',
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <Icon sx={{ fontSize: 34 }} />
    </Box>
  );
}

export default function Hero() {
  const { hero } = useContent();

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        pt: { xs: 9, md: 14 },
        pb: { xs: 11, md: 17 },
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        {/* Text block — the floating icons are positioned against this box */}
        <Box sx={{ position: 'relative' }}>
          {FLOATING_ICONS.map((icon, i) => (
            <FloatingIcon key={i} {...icon} />
          ))}

          <Stack spacing={3} sx={{ alignItems: 'center', textAlign: 'center' }}>
            {/* Trust badge */}
            <Typography
              sx={{
                fontSize: { xs: '0.8125rem', sm: '0.875rem' },
                fontWeight: 600,
              }}
            >
              {hero.badge}
            </Typography>

            <Typography variant="h1" component="h1" sx={{ maxWidth: 1120 }}>
              <Box
                component="span"
                sx={{ display: { xs: 'none', sm: 'inline' } }}
              >
                {hero.headlineTop}
              </Box>
              <Box
                component="span"
                sx={{ display: { xs: 'inline', sm: 'none' } }}
              >
                {hero.headlineTopMobile}
              </Box>
              <Box
                component="br"
                sx={{ display: { xs: 'none', sm: 'block' } }}
              />{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                {hero.headlineAccent}
              </Box>
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{ color: 'text.secondary', maxWidth: 680, mx: 'auto' }}
            >
              {hero.subhead}
            </Typography>

            {/* One action only — everything points at booking a demo */}
            <Box sx={{ pt: 1 }}>
              <ActionButton href="#cta" size="large">
                {hero.primaryCta}
              </ActionButton>
            </Box>
          </Stack>
        </Box>

        <Box sx={{ mt: { xs: 6, md: 9 } }}>
          <DashboardMockup />
        </Box>
      </Container>
    </Box>
  );
}
