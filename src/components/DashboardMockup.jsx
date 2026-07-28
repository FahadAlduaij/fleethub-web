import { Box } from '@mui/material';

/**
 * Hero dashboard shot.
 * Asset: /public/dashboard.png (1600×1000). Swap the file — or point `src` at a
 * new one — to update; keep the same aspect ratio so the frame stays balanced.
 *
 * The source screenshot has the browser scrollbar baked into its right edge, so
 * the frame is 16px narrower than the image and anchored left — object-fit
 * crops that strip off. Drop this aspect ratio back to 1600/1000 if the asset is
 * ever recaptured without a scrollbar.
 */
export default function DashboardMockup() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'brand.border',
        borderRadius: { xs: 5, md: 8 },
        p: { xs: 1, md: 1.5 },
        boxShadow: '0 60px 120px -60px rgba(14, 23, 42, 0.45)',
      }}
    >
      <Box
        component="img"
        src="/dashboard.png"
        alt="FleetHub dashboard showing driver, vehicle, expense, and net profit stats"
        sx={{
          display: 'block',
          width: '100%',
          aspectRatio: '1584 / 1000',
          objectFit: 'cover',
          objectPosition: 'left center',
          borderRadius: { xs: 4, md: 6 },
        }}
      />
    </Box>
  );
}
