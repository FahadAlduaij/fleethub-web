import { useState } from 'react';
import {
  Box,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ActionButton from './ActionButton';
import { LANG_TOGGLE_LABEL, useContent, useLanguage } from '../i18n.jsx';

/** Floating pill navbar — text wordmark only, no logo mark. */
export default function Navbar() {
  const { brand, nav } = useContent();
  const { isAr, toggle } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: (theme) => theme.zIndex.appBar,
        pt: { xs: 2, md: 3 },
        pb: 1,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          sx={{
            alignItems: 'center',
            bgcolor: 'rgba(255,255,255,0.75)',
            border: '1px solid',
            borderColor: 'brand.border',
            borderRadius: 999,
            px: { xs: 1.5, md: 2.5 },
            py: 1,
            boxShadow: '0 12px 32px -22px rgba(14, 23, 42, 0.45)',
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Wordmark only — no logo mark in the navbar */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginInlineEnd: 'auto',
            }}
          >
            {brand.name}
          </Typography>

          {/* Desktop anchor links */}
          <Stack
            direction="row"
            spacing={3.5}
            sx={{
              display: { xs: 'none', md: 'flex' },
              marginInlineEnd: 'auto',
            }}
          >
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                sx={{
                  color: 'text.secondary',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  transition: 'color .18s ease',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {link.label}
              </Link>
            ))}
          </Stack>

          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            {/* Soft so the hero's solid CTA stays the one visual primary */}
            <ActionButton
              href="#cta"
              variant="soft"
              sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
            >
              {nav.cta}
            </ActionButton>
            {/* Always visible — the CTA hides on xs, the language switch does not */}
            <Box
              component="button"
              type="button"
              onClick={toggle}
              aria-label={isAr ? 'Switch to English' : 'Switch to Arabic'}
              lang={isAr ? 'en' : 'ar'}
              sx={{
                height: 42,
                px: 2,
                borderRadius: 999,
                border: '1px solid',
                borderColor: 'brand.border',
                bgcolor: 'background.paper',
                color: 'text.primary',
                fontFamily: isAr ? 'inherit' : "'Cairo', sans-serif",
                fontWeight: 700,
                fontSize: '0.875rem',
                lineHeight: 1,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'background-color .18s ease',
                '&:hover': { bgcolor: 'brand.softPrimary' },
              }}
            >
              {LANG_TOGGLE_LABEL[isAr ? 'en' : 'ar']}
            </Box>
            <IconButton
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              sx={{
                display: { xs: 'inline-flex', md: 'none' },
                width: 42,
                height: 42,
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                '&:hover': { bgcolor: 'primary.main', opacity: 0.9 },
              }}
            >
              <MenuRoundedIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>

      {/* Mobile navigation drawer.
          MUI mirrors the slide-in direction for `anchor="right"` when the theme
          is RTL, but the paper itself is pinned with a physical `right: 0` that
          only a stylis RTL plugin would flip — so pin it by hand in Arabic. */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 280,
              maxWidth: '80%',
              bgcolor: 'background.default',
              p: 2,
              ...(isAr && { left: 0, right: 'auto' }),
            },
          },
        }}
      >
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 2 }}
        >
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            {brand.name}
          </Typography>
          <IconButton onClick={() => setOpen(false)} aria-label="Close menu">
            <CloseRoundedIcon />
          </IconButton>
        </Stack>
        <List>
          {nav.links.map((link) => (
            <ListItemButton
              key={link.href}
              component="a"
              href={link.href}
              onClick={() => setOpen(false)}
              sx={{ borderRadius: 3 }}
            >
              <ListItemText
                primary={link.label}
                slotProps={{ primary: { sx: { fontWeight: 600 } } }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
