import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Каталог', to: '/' },
  { label: 'Мои книги', to: '/my/books' },
  { label: 'Мои брони', to: '/my/bookings' },
  { label: 'О проекте', to: '/about' },
];

export default function Header() {
  const location = useLocation();

  return (
    <AppBar position="sticky" elevation={1} color="default">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <IconButton
            component={RouterLink}
            to="/"
            edge="start"
            color="primary"
            sx={{ mr: 1 }}
            aria-label="На главную"
          >
            <MenuBookIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              mr: 3,
              display: { xs: 'none', sm: 'block' },
            }}
          >
            BookSwap
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.5, flexGrow: 1, overflowX: 'auto' }}>
            {navItems.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Button
                  key={item.to}
                  component={RouterLink}
                  to={item.to}
                  color={active ? 'primary' : 'inherit'}
                  sx={{ fontWeight: active ? 700 : 500, whiteSpace: 'nowrap' }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
            <Button component={RouterLink} to="/login" variant="outlined" size="small">
              Войти
            </Button>
            <Button component={RouterLink} to="/register" variant="contained" size="small">
              Регистрация
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}