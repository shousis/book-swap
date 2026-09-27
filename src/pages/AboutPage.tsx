import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

export default function AboutPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        О проекте
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1" paragraph>
          <b>BookSwap</b> — учебное fullstack-приложение для обмена книгами между людьми,
          разрабатываемое в рамках курса «Fullstack» (1 семестр).
        </Typography>

        <Typography variant="h6" gutterBottom>
          Реализовано в лабе №1
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="Каркас frontend на React + TypeScript (Vite)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Клиентская маршрутизация (react-router-dom)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="UI-библиотека MUI, единая тема оформления" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Адаптивная вёрстка основных экранов" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Демонстрационные данные (моки)" />
          </ListItem>
        </List>

        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Планы по семестру
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="Лаба №2: FastAPI + PostgreSQL + SQLAlchemy" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Лаба №3: FSD-структура, интерактив, валидация форм" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Лаба №4: JWT-аутентификация (access + refresh)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Лаба №5: интеграция frontend и backend" />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
}