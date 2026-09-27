import type { Book, Booking, User } from '../types/book';

export const mockUsers: User[] = [
  { id: 'u1', name: 'Анна Петрова', email: 'anna@example.com' },
  { id: 'u2', name: 'Иван Смирнов', email: 'ivan@example.com' },
  { id: 'u3', name: 'Ольга Кузнецова', email: 'olga@example.com' },
];

export const mockBooks: Book[] = [
  {
    id: 'b1',
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    year: 1967,
    isbn: '978-5-04-116041-5',
    description: 'Роман о добре и зле, любви и трусости. Состояние хорошее, без пометок.',
    condition: 'good',
    status: 'available',
    ownerId: 'u1',
    pickupPoint: 'м. Чистые пруды, кафе «Пирожковая»',
    createdAt: '2025-09-01T10:00:00Z',
  },
  {
    id: 'b2',
    title: 'Преступление и наказание',
    author: 'Фёдор Достоевский',
    year: 1866,
    description: 'Классика русской литературы. Мягкая обложка, немного потрёпана.',
    condition: 'fair',
    status: 'available',
    ownerId: 'u2',
    pickupPoint: 'м. Площадь Восстания',
    createdAt: '2025-09-02T12:30:00Z',
  },
  {
    id: 'b3',
    title: 'Дюна',
    author: 'Фрэнк Герберт',
    year: 1965,
    isbn: '978-5-17-118933-1',
    description: 'Научная фантастика. Твёрдый переплёт, как новая.',
    condition: 'new',
    status: 'reserved',
    ownerId: 'u1',
    pickupPoint: 'м. Чистые пруды, кафе «Пирожковая»',
    createdAt: '2025-09-03T09:15:00Z',
  },
  {
    id: 'b4',
    title: 'Чистый код',
    author: 'Роберт Мартин',
    year: 2008,
    description: 'Практики написания хорошего кода. Есть подчёркивания карандашом.',
    condition: 'good',
    status: 'available',
    ownerId: 'u3',
    pickupPoint: 'м. Технологический институт',
    createdAt: '2025-09-04T18:45:00Z',
  },
  {
    id: 'b5',
    title: 'Три товарища',
    author: 'Эрих Мария Ремарк',
    year: 1936,
    description: 'История дружбы и любви в послевоенной Германии. Мягкая обложка.',
    condition: 'fair',
    status: 'given',
    ownerId: 'u2',
    pickupPoint: 'м. Площадь Восстания',
    createdAt: '2025-09-05T20:10:00Z',
  },
  {
    id: 'b6',
    title: 'Sapiens. Краткая история человечества',
    author: 'Юваль Ной Харари',
    year: 2011,
    description: 'От каменного века до наших дней. В отличном состоянии.',
    condition: 'new',
    status: 'available',
    ownerId: 'u3',
    pickupPoint: 'м. Технологический институт',
    createdAt: '2025-09-06T08:20:00Z',
  },
];

export const mockBookings: Booking[] = [
  {
    id: 'bk1',
    bookId: 'b3',
    borrowerId: 'u3',
    startDate: '2025-09-10',
    endDate: '2025-09-24',
    status: 'approved',
    createdAt: '2025-09-07T10:00:00Z',
  },
  {
    id: 'bk2',
    bookId: 'b5',
    borrowerId: 'u1',
    startDate: '2025-09-01',
    endDate: '2025-09-15',
    status: 'active',
    createdAt: '2025-08-30T14:00:00Z',
  },
];


export const CURRENT_USER_ID = 'u1';