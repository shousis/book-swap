import { Box, Typography, Grid, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link as RouterLink } from 'react-router-dom';
import { mockBooks, CURRENT_USER_ID } from '../mocks/data';
import BookCard from '../components/ui/BookCard';

export default function MyBooksPage() {
  const myBooks = mockBooks.filter((b) => b.ownerId === CURRENT_USER_ID);

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
          <Typography variant="h4">Мои книги</Typography>
          <Typography variant="body2" color="text.secondary">
            Всего: {myBooks.length}
          </Typography>
        </Box>
        <Button variant="contained" startIcon={<AddIcon />} component={RouterLink} to="/books/new">
          Добавить книгу
        </Button>
      </Box>

      {myBooks.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 6 }}>
          <Typography variant="h6" color="text.secondary">
            У вас пока нет книг
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Добавьте первую книгу, чтобы ей могли пользоваться другие
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={2}>
          {myBooks.map((book) => (
            <Grid item xs={12} sm={6} md={4} key={book.id}>
              <BookCard book={book} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}