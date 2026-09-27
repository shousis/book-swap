import { Box, Typography, TextField, Button, Paper, Stack, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper sx={{ p: 4, width: '100%', maxWidth: 420 }}>
        <Typography variant="h5" gutterBottom>
          Регистрация
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Заглушка. Реальная регистрация — в лабе №4.
        </Typography>
        <Box component="form" onSubmit={(e) => e.preventDefault()}>
          <Stack spacing={2}>
            <TextField label="Имя" fullWidth />
            <TextField label="Email" type="email" fullWidth />
            <TextField label="Пароль" type="password" fullWidth />
            <TextField label="Повторите пароль" type="password" fullWidth />
            <Button type="submit" variant="contained" fullWidth>
              Создать аккаунт
            </Button>
            <Typography variant="body2" align="center">
              Уже есть аккаунт?{' '}
              <Link component={RouterLink} to="/login">
                Войти
              </Link>
            </Typography>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}
