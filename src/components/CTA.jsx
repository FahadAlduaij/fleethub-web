import { Box, Container, Stack, Typography } from '@mui/material';
import ActionButton from './ActionButton';
import { PillLabel } from './SectionHeading';
import { useContent } from '../i18n.jsx';

export default function CTA() {
  const { contact, cta } = useContent();

  return (
    <Box component="section" id="cta" sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            bgcolor: 'brand.card',
            border: '1px solid',
            borderColor: 'brand.border',
            borderRadius: { xs: 6, md: 9 },
            px: { xs: 3, md: 8 },
            py: { xs: 6, md: 10 },
            textAlign: 'center',
            // Soft primary glow behind the headline
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '-40%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 780,
              height: 520,
              borderRadius: '50%',
              background: (theme) =>
                `radial-gradient(closest-side, ${theme.palette.brand.glow}, transparent)`,
              pointerEvents: 'none',
            },
          }}
        >
          <Stack
            spacing={3}
            sx={{ alignItems: 'center', position: 'relative' }}
          >
            <PillLabel label={cta.label} />

            <Typography variant="h2" component="h2" sx={{ maxWidth: 900 }}>
              {cta.headlineTop}{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                {cta.headlineAccent}
              </Box>
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.5}
              sx={{ alignItems: 'center', pt: 1 }}
            >
              <ActionButton
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                size="large"
                variant="soft"
                sx={{ bgcolor: 'background.paper' }}
              >
                {cta.secondaryCta}
              </ActionButton>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
