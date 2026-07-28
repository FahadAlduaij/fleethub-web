import { Box, Container, Divider, Grid, Link, Stack, Typography } from '@mui/material';
import { brand, footer } from '../content';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        pt: { xs: 6, md: 9 },
        pb: { xs: 4, md: 5 },
        mt: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 4 }}>
          {/* Brand block — text wordmark only, no logo mark */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800 }}>
              {brand.name}
            </Typography>
            <Typography sx={{ mt: 1.5, opacity: 0.75, fontSize: '0.9375rem' }}>
              {brand.maker}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Grid container spacing={{ xs: 4, md: 3 }}>
              {footer.columns.map((column) => (
                <Grid key={column.title} size={{ xs: 6, sm: 4 }}>
                  <Typography
                    sx={{
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      opacity: 0.65,
                      mb: 2,
                    }}
                  >
                    {column.title}
                  </Typography>
                  <Stack spacing={1.5}>
                    {column.links.map((label) => (
                      <Link
                        key={label}
                        href="#"
                        sx={{
                          color: 'inherit',
                          fontSize: '0.9375rem',
                          opacity: 0.92,
                          width: 'fit-content',
                          '&:hover': { opacity: 1, textDecoration: 'underline' },
                        }}
                      >
                        {label}
                      </Link>
                    ))}
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.22)', my: { xs: 4, md: 5 } }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
          }}
        >
          <Typography sx={{ fontSize: '0.875rem', opacity: 0.75 }}>
            {footer.copyright}
          </Typography>
          <Stack direction="row" spacing={3}>
            {footer.legal.map((label) => (
              <Link
                key={label}
                href="#"
                sx={{
                  color: 'inherit',
                  fontSize: '0.875rem',
                  opacity: 0.85,
                  '&:hover': { opacity: 1, textDecoration: 'underline' },
                }}
              >
                {label}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
