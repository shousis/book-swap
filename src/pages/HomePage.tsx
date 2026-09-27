import { useMemo, useState } from 'react';
import { Box, Typography, Grid, TextField, MenuItem, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link as RouterLink } from 'react-router-dom';
import { mockBooks } from '../mocks/data';
import BookCard from '../components/ui/BookCard';
import { BOOK_STATUS_LABELS, type BookStatus } from '../types/book';

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<BookStatus | 'all'>('all');

  const filtered = useMemo(() => {
    return mockBooks.filter((b) => {
      const matchesQuery =
        query.trim() === '' ||
        b.title.toLowerCase().includes(query.toLowerCase()) ||
        b.author.toLowerCase().includes(query.toLowerCase());
      const matchesStatus = status === 'all' || b.status === status;
      return matchesQuery && matchesStatus;
    });
  }, [query, status]);

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Box>
          <Typography variant="h4">Каталог книг</Typography>
          <Typography variant="body2" color="text.secondary">
            Найдено: {filtered.length} из {mockBooks.length}
          </Typography>
        </Box>
        <Button variant="contained" startIcon={<AddIcon />} component={RouterLink} to="/books/new">
          Добавить книгу
        </Button>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
        <TextField
          label="Поиск по названию или автору"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          size="small"
          sx={{ minWidth: 280, flexGrow: 1 }}
        />
        <TextField
          select
          label="Статус"
          value={status}
          onChange={(e) => setStatus(e.target.value as BookStatus | 'all')}
          size="small"
          sx={{ minWidth: 200 }}
        >
          <MenuItem value="all">Все</MenuItem>
          {(Object.keys(BOOK_STATUS_LABELS) as BookStatus[]).map((s) => (
            <MenuItem key={s} value={s}>
              {BOOK_STATUS_LABELS[s]}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      {filtered.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 6 }}>
          <Typography variant="h6" color="text.secondary">
            Ничего не найдено
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Попробуйте изменить условия поиска
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={2}>
          {filtered.map((book) => (
            <Grid item xs={12} sm={6} md={4} key={book.id}>
              <BookCard book={book} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}