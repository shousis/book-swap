import { useParams, useNavigate, Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Button, Paper, Divider, Stack, Chip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { mockBooks, mockUsers, CURRENT_USER_ID } from '../mocks/data';
import { BookStatusChip } from '../components/ui/StatusChip';
import { CONDITION_LABELS } from '../types/book';

export default function BookDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const book = mockBooks.find((b) => b.id === id);

  if (!book) {
    return (
      <Box>
        <Typography variant="h5" gutterBottom>
          Книга не найдена
        </Typography>
        <Button component={RouterLink} to="/" startIcon={<ArrowBackIcon />}>
          В каталог
        </Button>
      </Box>
    );
  }

  const owner = mockUsers.find((u) => u.id === book.ownerId);
  const isOwner = book.ownerId === CURRENT_USER_ID;
  const canBook = !isOwner && book.status === 'available';

  return (
    <Box>
      <Button component={RouterLink} to="/" startIcon={<ArrowBackIcon />} sx={{ mb: 2 }}>
        Назад в каталог
      </Button>

      <Paper sx={{ p: { xs: 2, md: 3 } }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          <Box>
            <Typography variant="h4" gutterBottom>
              {book.title}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {book.author}, {book.year}
            </Typography>
          </Box>
          <BookStatusChip status={book.status} />
        </Box>

        <Divider sx={{ my: 2 }} />

        <Stack spacing={0.5}>
          <Typography variant="body2" color="text.secondary">
            Состояние: {CONDITION_LABELS[book.condition]}
          </Typography>
          {book.isbn && (
            <Typography variant="body2" color="text.secondary">
              ISBN: {book.isbn}
            </Typography>
          )}
          {book.pickupPoint && (
            <Typography variant="body2" color="text.secondary">
              Место выдачи: {book.pickupPoint}
            </Typography>
          )}
          <Typography variant="body2" color="text.secondary">
            Владелец: {owner?.name ?? 'Неизвестен'}
          </Typography>
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
          {book.description || 'Описание отсутствует'}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          {canBook && (
            <Button
              variant="contained"
              startIcon={<EventAvailableIcon />}
              onClick={() => navigate(`/bookings/new?bookId=${book.id}`)}
            >
              Забронировать
            </Button>
          )}
          {isOwner && (
            <>
              <Button
                variant="contained"
                startIcon={<EditIcon />}
                onClick={() => navigate(`/books/${book.id}/edit`)}
              >
                Редактировать
              </Button>
              <Button
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => alert('Удаление будет доступно в лабе №5 (интеграция с API)')}
              >
                Удалить
              </Button>
            </>
          )}
          {!canBook && !isOwner && <Chip label="Бронирование недоступно" color="default" />}
        </Box>
      </Paper>
    </Box>
  );
}