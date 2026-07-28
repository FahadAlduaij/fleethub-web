import { Avatar, Box, Container, Grid, Stack, Typography } from '@mui/material';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SectionHeading from './SectionHeading';
import { testimonials } from '../content';

export default function Testimonials() {
  return (
    <Box component="section" id="testimonials" sx={{ py: { xs: 8, md: 14 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          label={testimonials.label}
          headingTop={testimonials.headingTop}
          headingAccent={testimonials.headingAccent}
          subheading={testimonials.subheading}
          sx={{ mb: { xs: 5, md: 8 } }}
        />

        <Grid container spacing={{ xs: 2.5, md: 3 }}>
          {testimonials.cards.map((card, i) => (
            <Grid key={i} size={{ xs: 12, md: 4 }}>
              <Stack
                sx={{
                  height: '100%',
                  bgcolor: 'brand.card',
                  border: '1px solid',
                  borderColor: 'brand.border',
                  borderRadius: 6,
                  p: { xs: 3, md: 3.5 },
                }}
              >
                <FormatQuoteRoundedIcon
                  sx={{ fontSize: 34, color: 'primary.main', opacity: 0.5, mb: 1 }}
                />
                <Typography sx={{ color: 'text.primary', flexGrow: 1 }}>
                  “{card.quote}”
                </Typography>

                <Stack direction="row" spacing={1.75} sx={{ alignItems: 'center', mt: 3 }}>
                  {/* AVATAR PLACEHOLDER — swap for a real headshot:
                      <Avatar src="/testimonials/name.jpg" />, 128×128 square crop */}
                  <Avatar
                    alt=""
                    sx={{
                      width: 48,
                      height: 48,
                      bgcolor: 'brand.softPrimaryStrong',
                      color: 'primary.main',
                    }}
                  >
                    <PersonRoundedIcon />
                  </Avatar>
                  <Box>
                    <Typography sx={{ fontWeight: 700 }}>{card.name}</Typography>
                    <Typography sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>
                      {card.role}
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
