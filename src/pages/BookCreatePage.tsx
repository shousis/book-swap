import { useState } from 'react';
import { Box, Typography, TextField, Button, MenuItem, Paper, Stack } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import type { BookCondition } from '../types/book';
import { CONDITION_LABELS } from '../types/book';

export default function BookCreatePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [isbn, setIsbn] = useState('');
  const [description, setDescription] = useState('');
  const [condition, setCondition] = useState<BookCondition>('good');
  const [pickupPoint, setPickupPoint] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, author, year, isbn, description, condition, pickupPoint });
    alert('На лабе №1 форма только верстается. Сохранение появится в лабе №5.');
    navigate('/');
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Добавить книгу
      </Typography>
      <Paper sx={{ p: { xs: 2, md: 3 }, maxWidth: 640 }}>
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Название"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              fullWidth
            />
            <TextField
              label="Автор"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              fullWidth
            />
            <TextField
              label="Год издания"
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              fullWidth
            />
            <TextField
              label="ISBN"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              fullWidth
            />
            <TextField
              label="Описание"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              multiline
              rows={4}
              fullWidth
            />
            <TextField
              select
              label="Состояние"
              value={condition}
              onChange={(e) => setCondition(e.target.value as BookCondition)}
              fullWidth
            >
              {(Object.keys(CONDITION_LABELS) as BookCondition[]).map((c) => (
                <MenuItem key={c} value={c}>
                  {CONDITION_LABELS[c]}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Место выдачи"
              value={pickupPoint}
              onChange={(e) => setPickupPoint(e.target.value)}
              fullWidth
            />
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button type="submit" variant="contained">
                Сохранить
              </Button>
              <Button component={RouterLink} to="/" variant="outlined">
                Отмена
              </Button>
            </Box>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}