import { Box, Button } from '@mui/material';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import { useLanguage } from '../i18n.jsx';

/**
 * Pill CTA button with a trailing circular arrow badge.
 *
 * variant="solid" — solid primary fill, soft white arrow badge (main CTA)
 * variant="soft"  — soft tinted surface, solid primary arrow badge (secondary CTA)
 */
export default function ActionButton({
  children,
  variant = 'solid',
  size = 'medium',
  href,
  sx,
  ...props
}) {
  const { isAr } = useLanguage();
  const solid = variant === 'solid';
  const large = size === 'large';

  return (
    <Button
      href={href}
      sx={{
        position: 'relative',
        paddingInlineStart: large ? 3.25 : 2.75,
        paddingInlineEnd: 0.75,
        py: 0.75,
        gap: large ? 1.75 : 1.25,
        fontSize: large ? '1rem' : '0.9375rem',
        color: solid ? 'primary.contrastText' : 'text.primary',
        bgcolor: solid ? 'primary.main' : 'brand.card',
        border: '1px solid',
        borderColor: solid ? 'primary.main' : 'brand.border',
        boxShadow: solid
          ? (theme) => `0 12px 28px -10px ${theme.palette.brand.glow}`
          : 'none',
        transition:
          'transform .18s ease, box-shadow .18s ease, background-color .18s ease',
        '&:hover': {
          bgcolor: solid ? 'primary.main' : 'brand.softPrimary',
          transform: 'translateY(-1px)',
          boxShadow: (theme) =>
            `0 16px 32px -12px ${
              solid ? theme.palette.brand.glow : 'rgba(14, 23, 42, 0.12)'
            }`,
        },
        ...sx,
      }}
      {...props}
    >
      {children}
      <Box
        component="span"
        sx={{
          width: large ? 36 : 32,
          height: large ? 36 : 32,
          borderRadius: '50%',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          bgcolor: solid ? 'rgba(255,255,255,0.24)' : 'primary.main',
          color: solid ? 'primary.contrastText' : 'primary.contrastText',
        }}
      >
        {/* Mirrored in RTL so the arrow points north-west, with the text flow */}
        <NorthEastRoundedIcon
          sx={{
            fontSize: large ? 18 : 16,
            transform: isAr ? 'scaleX(-1)' : 'none',
          }}
        />
      </Box>
    </Button>
  );
}
