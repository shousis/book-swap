import { Box, Typography, Paper, Stack, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { mockBooks, mockBookings, CURRENT_USER_ID } from '../mocks/data';
import { BookingStatusChip } from '../components/ui/StatusChip';

export default function MyBookingsPage() {
  const myBookings = mockBookings.filter((b) => b.borrowerId === CURRENT_USER_ID);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Мои брони
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Всего: {myBookings.length}
      </Typography>

      {myBookings.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 6 }}>
          <Typography variant="h6" color="text.secondary">
            У вас пока нет броней
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Найдите книгу в каталоге и забронируйте её
          </Typography>
        </Box>
      ) : (
        <Stack spacing={2}>
          {myBookings.map((booking) => {
            const book = mockBooks.find((b) => b.id === booking.bookId);
            return (
              <Paper key={booking.id} sx={{ p: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 2,
                    flexWrap: 'wrap',
                  }}
                >
                  <Box>
                    <Typography variant="h6">
                      {book ? (
                        <RouterLink to={`/books/${book.id}`}>{book.title}</RouterLink>
                      ) : (
                        'Книга удалена'
                      )}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {book?.author ?? '—'}
                    </Typography>
                  </Box>
                  <BookingStatusChip status={booking.status} />
                </Box>
                <Divider sx={{ my: 1.5 }} />
                <Stack spacing={0.5}>
                  <Typography variant="body2" color="text.secondary">
                    Период: {booking.startDate} — {booking.endDate}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Создана: {new Date(booking.createdAt).toLocaleString('ru-RU')}
                  </Typography>
                </Stack>
              </Paper>
            );
          })}
        </Stack>
      )}
    </Box>
  );
}