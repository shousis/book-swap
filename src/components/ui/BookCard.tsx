import { Card, CardActionArea, CardContent, Typography, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import type { Book } from '../../types/book';
import { CONDITION_LABELS } from '../../types/book';
import { BookStatusChip } from './StatusChip';

export default function BookCard({ book }: { book: Book }) {
  return (
    <Card
      sx={{
        height: '100%',
        transition: 'transform 0.15s, box-shadow 0.15s',
        '&:hover': { transform: 'translateY(-3px)', boxShadow: 4 },
      }}
    >
      <CardActionArea
        component={RouterLink}
        to={`/books/${book.id}`}
        sx={{ height: '100%', display: 'flex', alignItems: 'stretch' }}
      >
        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 1 }}>
            <Typography variant="h6" sx={{ wordBreak: 'break-word' }}>
              {book.title}
            </Typography>
            <BookStatusChip status={book.status} />
          </Box>
          <Typography variant="body2" color="text.secondary">
            {book.author}, {book.year}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {book.description}
          </Typography>
          <Box sx={{ mt: 'auto', pt: 1 }}>
            <Typography variant="caption" color="text.secondary">
              Состояние: {CONDITION_LABELS[book.condition]}
            </Typography>
            {book.pickupPoint && (
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                Место: {book.pickupPoint}
              </Typography>
            )}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}