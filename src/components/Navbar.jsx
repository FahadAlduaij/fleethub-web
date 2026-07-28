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
import { brand, nav } from '../content';

/** Floating pill navbar — text wordmark only, no logo mark. */
export default function Navbar() {
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
            sx={{ fontWeight: 800, letterSpacing: '-0.02em', mr: 'auto' }}
          >
            {brand.name}
          </Typography>

          {/* Desktop anchor links */}
          <Stack
            direction="row"
            spacing={3.5}
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 'auto' }}
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
            <ActionButton href="#cta" sx={{ display: { xs: 'none', sm: 'inline-flex' } }}>
              {nav.cta}
            </ActionButton>
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

      {/* Mobile navigation drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          paper: {
            sx: { width: '100vw', maxWidth: '100%', bgcolor: 'background.default', p: 2 },
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
