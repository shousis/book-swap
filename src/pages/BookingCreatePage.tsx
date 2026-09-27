import { useState } from 'react';
import { useSearchParams, useNavigate, Link as RouterLink } from 'react-router-dom';
import { Box, Typography, TextField, Button, Paper, Stack, Alert } from '@mui/material';
import { mockBooks } from '../mocks/data';

export default function BookingCreatePage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const bookId = params.get('bookId');
  const book = mockBooks.find((b) => b.id === bookId);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  if (!book) {
    return (
      <Box>
        <Alert severity="error" sx={{ mb: 2 }}>
          Книга не найдена
        </Alert>
        <Button component={RouterLink} to="/">
          В каталог
        </Button>
      </Box>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ bookId, startDate, endDate });
    alert('На лабе №1 форма только верстается. Сохранение появится в лабе №5.');
    navigate(`/books/${bookId}`);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Забронировать книгу
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        «{book.title}», {book.author}
      </Typography>
      <Paper sx={{ p: { xs: 2, md: 3 }, maxWidth: 640 }}>
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Дата начала"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
              required
              fullWidth
            />
            <TextField
              label="Дата окончания"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
              required
              fullWidth
            />
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button type="submit" variant="contained">
                Отправить заявку
              </Button>
              <Button component={RouterLink} to={`/books/${bookId}`} variant="outlined">
                Отмена
              </Button>
            </Box>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}