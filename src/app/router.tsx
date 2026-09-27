import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HomePage from '../pages/HomePage';
import BookDetailPage from '../pages/BookDetailPage';
import BookCreatePage from '../pages/BookCreatePage';
import BookEditPage from '../pages/BookEditPage';
import MyBooksPage from '../pages/MyBooksPage';
import MyBookingsPage from '../pages/MyBookingsPage';
import BookingCreatePage from '../pages/BookingCreatePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import AboutPage from '../pages/AboutPage';
import NotFoundPage from '../pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'books/new', element: <BookCreatePage /> },
      { path: 'books/:id', element: <BookDetailPage /> },
      { path: 'books/:id/edit', element: <BookEditPage /> },
      { path: 'my/books', element: <MyBooksPage /> },
      { path: 'my/bookings', element: <MyBookingsPage /> },
      { path: 'bookings/new', element: <BookingCreatePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);