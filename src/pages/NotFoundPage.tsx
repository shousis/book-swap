import { Box, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <Box sx={{ textAlign: 'center', py: 8 }}>
      <Typography
        variant="h1"
        sx={{ fontSize: { xs: 72, md: 120 }, fontWeight: 700, color: 'primary.main' }}
      >
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Страница не найдена
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Возможно, адрес указан неверно или страница была удалена.
      </Typography>
      <Button variant="contained" component={RouterLink} to="/">
        На главную
      </Button>
    </Box>
  );
}