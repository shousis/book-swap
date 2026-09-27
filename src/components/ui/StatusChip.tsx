import { Chip } from '@mui/material';
import type { BookStatus, BookingStatus } from '../../types/book';
import {
  BOOK_STATUS_COLORS,
  BOOK_STATUS_LABELS,
  BOOKING_STATUS_COLORS,
  BOOKING_STATUS_LABELS,
} from '../../types/book';

export function BookStatusChip({ status }: { status: BookStatus }) {
  return <Chip label={BOOK_STATUS_LABELS[status]} color={BOOK_STATUS_COLORS[status]} size="small" />;
}

export function BookingStatusChip({ status }: { status: BookingStatus }) {
  return <Chip label={BOOKING_STATUS_LABELS[status]} color={BOOKING_STATUS_COLORS[status]} size="small" />;
}