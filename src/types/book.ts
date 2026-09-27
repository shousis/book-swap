export type BookCondition = 'new' | 'good' | 'fair' | 'poor';
export type BookStatus = 'available' | 'reserved' | 'given' | 'unavailable';
export type BookingStatus = 'pending' | 'approved' | 'active' | 'returned' | 'cancelled';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  isbn?: string;
  description: string;
  condition: BookCondition;
  status: BookStatus;
  ownerId: string;
  pickupPoint?: string;
  createdAt: string;
}

export interface Booking {
  id: string;
  bookId: string;
  borrowerId: string;
  startDate: string;
  endDate: string;
  status: BookingStatus;
  createdAt: string;
}

export const CONDITION_LABELS: Record<BookCondition, string> = {
  new: 'Новая',
  good: 'Хорошая',
  fair: 'Удовлетворительная',
  poor: 'Плохая',
};

export const BOOK_STATUS_LABELS: Record<BookStatus, string> = {
  available: 'Доступна',
  reserved: 'Забронирована',
  given: 'Выдана',
  unavailable: 'Недоступна',
};

export const BOOKING_STATUS_LABELS: Record<BookingStatus, string> = {
  pending: 'Ожидает подтверждения',
  approved: 'Подтверждена',
  active: 'Активна',
  returned: 'Возвращена',
  cancelled: 'Отменена',
};

export const BOOK_STATUS_COLORS: Record<BookStatus, 'success' | 'warning' | 'info' | 'default'> = {
  available: 'success',
  reserved: 'warning',
  given: 'info',
  unavailable: 'default',
};

export const BOOKING_STATUS_COLORS: Record<
  BookingStatus,
  'warning' | 'success' | 'info' | 'default' | 'error'
> = {
  pending: 'warning',
  approved: 'success',
  active: 'info',
  returned: 'default',
  cancelled: 'error',
};