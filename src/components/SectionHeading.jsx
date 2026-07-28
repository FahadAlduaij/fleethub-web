import { Box, Chip, Typography } from '@mui/material';

/** Small rounded pill that sits above every section heading. */
export function PillLabel({ label, sx }) {
  return (
    <Chip
      label={label}
      sx={{
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'brand.border',
        color: 'text.primary',
        fontWeight: 600,
        fontSize: '0.8125rem',
        height: 32,
        px: 0.5,
        boxShadow: '0 2px 10px -6px rgba(14, 23, 42, 0.18)',
        ...sx,
      }}
    />
  );
}

/**
 * Pill label + two-tone centered heading + subheading.
 * `headingTop` renders in the dark text colour, `headingAccent` in primary blue.
 */
export default function SectionHeading({
  label,
  headingTop,
  headingAccent,
  subheading,
  maxWidth = 720,
  sx,
}) {
  return (
    <Box sx={{ textAlign: 'center', ...sx }}>
      {label && <PillLabel label={label} sx={{ mb: 2.5 }} />}
      <Typography variant="h2" component="h2" sx={{ mx: 'auto', maxWidth: 900 }}>
        {headingTop}{' '}
        <Box component="span" sx={{ color: 'primary.main' }}>
          {headingAccent}
        </Box>
      </Typography>
      {subheading && (
        <Typography
          variant="subtitle1"
          sx={{ color: 'text.secondary', mt: 2, mx: 'auto', maxWidth }}
        >
          {subheading}
        </Typography>
      )}
    </Box>
  );
}
