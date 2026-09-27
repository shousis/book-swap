import { Box, Typography, TextField, Button, Paper, Stack, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function LoginPage() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper sx={{ p: 4, width: '100%', maxWidth: 420 }}>
        <Typography variant="h5" gutterBottom>
          Вход
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Заглушка. Реальная аутентификация — в лабе №4.
        </Typography>
        <Box component="form" onSubmit={(e) => e.preventDefault()}>
          <Stack spacing={2}>
            <TextField label="Email" type="email" fullWidth />
            <TextField label="Пароль" type="password" fullWidth />
            <Button type="submit" variant="contained" fullWidth>
              Войти
            </Button>
            <Typography variant="body2" align="center">
              Нет аккаунта?{' '}
              <Link component={RouterLink} to="/register">
                Зарегистрироваться
              </Link>
            </Typography>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}