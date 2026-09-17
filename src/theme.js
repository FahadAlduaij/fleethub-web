import { createTheme, alpha } from '@mui/material/styles';

/**
 * Single source of truth for every FleetHub brand colour.
 * Nothing in /src/components should hardcode a hex value — pull from here.
 */
const BRAND = {
  background: '#F9FAFC',
  primary: '#116FEB',
  textPrimary: '#0E172A',
  card: '#F0F5F9',
};

const base = {
  palette: {
    mode: 'light',
    background: {
      default: BRAND.background,
      paper: '#FFFFFF',
    },
    primary: {
      main: BRAND.primary,
      light: alpha(BRAND.primary, 0.12),
      contrastText: '#FFFFFF',
    },
    text: {
      primary: BRAND.textPrimary,
      secondary: '#5C6880',
    },
    divider: '#E3EAF3',
    // Custom brand tokens — used via theme.palette.brand.*
    brand: {
      card: BRAND.card,
      // Soft tinted primary: secondary/outlined buttons, icon backgrounds, pills
      softPrimary: alpha(BRAND.primary, 0.08),
      softPrimaryStrong: alpha(BRAND.primary, 0.16),
      border: '#E6ECF4',
      glow: alpha(BRAND.primary, 0.16),
    },
  },

  // Base unit for the sx `borderRadius` prop — sx values are multiplied by this
  // (borderRadius: 6 → 24px). Keep at 4 so radii read like the rest of MUI.
  shape: { borderRadius: 4 },

  typography: {
    fontFamily:
      "'Plus Jakarta Sans', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.05,
      fontSize: 'clamp(2.25rem, 5.1vw, 4rem)',
    },
    h2: {
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.1,
      fontSize: 'clamp(2rem, 4.6vw, 3.4rem)',
    },
    h3: {
      fontWeight: 800,
      letterSpacing: '-0.025em',
      lineHeight: 1.15,
      fontSize: 'clamp(1.75rem, 3.6vw, 2.6rem)',
    },
    h4: { fontWeight: 800, letterSpacing: '-0.02em' },
    h5: { fontWeight: 700, letterSpacing: '-0.01em' },
    h6: { fontWeight: 700, letterSpacing: '-0.01em' },
    subtitle1: { fontSize: '1.125rem', lineHeight: 1.6 },
    body1: { lineHeight: 1.65 },
    body2: { lineHeight: 1.65 },
    button: { textTransform: 'none', fontWeight: 600 },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
          // Offset for the floating navbar when jumping to an anchor
          scrollPaddingTop: 120,
        },
        body: { backgroundColor: BRAND.background },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 999 },
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: { root: { backgroundImage: 'none' } },
    },
    MuiAccordion: {
      defaultProps: { disableGutters: true, elevation: 0, square: false },
      styleOverrides: {
        root: {
          backgroundColor: BRAND.card,
          borderRadius: 20,
          border: '1px solid #E6ECF4',
          '&:before': { display: 'none' },
          '& + &': { marginTop: 12 },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: { padding: '8px 24px' },
        content: { margin: '12px 0' },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: { root: { padding: '0 24px 24px' } },
    },
    MuiLink: {
      defaultProps: { underline: 'none' },
    },
    MuiStack: {
      // Stack's default spacing is a physical `margin-left` on row layouts,
      // which lands on the wrong side in RTL. `gap` is direction-agnostic.
      defaultProps: { useFlexGap: true },
    },
  },
};

/**
 * Arabic overrides on top of `base`. Only direction and typography change —
 * the palette, shape and component overrides are shared.
 *
 * Negative letter-spacing breaks Arabic letter joins, so tracking goes to 0,
 * and Cairo's tall ascenders need a little more leading on the display sizes.
 */
const AR_TYPOGRAPHY = {
  fontFamily:
    "'Cairo', 'Plus Jakarta Sans', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  h1: { letterSpacing: 0, lineHeight: 1.25 },
  h2: { letterSpacing: 0, lineHeight: 1.25 },
  h3: { letterSpacing: 0, lineHeight: 1.3 },
  h4: { letterSpacing: 0 },
  h5: { letterSpacing: 0 },
  h6: { letterSpacing: 0 },
};

/** Builds the MUI theme for a language — 'en' (LTR) or 'ar' (RTL). */
export function createAppTheme(lang) {
  if (lang !== 'ar') {
    return createTheme(base);
  }

  return createTheme({
    ...base,
    direction: 'rtl',
    typography: {
      ...base.typography,
      fontFamily: AR_TYPOGRAPHY.fontFamily,
      h1: { ...base.typography.h1, ...AR_TYPOGRAPHY.h1 },
      h2: { ...base.typography.h2, ...AR_TYPOGRAPHY.h2 },
      h3: { ...base.typography.h3, ...AR_TYPOGRAPHY.h3 },
      h4: { ...base.typography.h4, ...AR_TYPOGRAPHY.h4 },
      h5: { ...base.typography.h5, ...AR_TYPOGRAPHY.h5 },
      h6: { ...base.typography.h6, ...AR_TYPOGRAPHY.h6 },
    },
  });
}

export default createAppTheme('en');
