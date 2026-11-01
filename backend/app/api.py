from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from app import crud, schemas
from app.database import get_db
from app.schemas.book import BookCreate, BookUpdate, BookRead
from app.schemas.booking import BookingCreate, BookingUpdate, BookingRead

router = APIRouter()

# --- МАРШРУТЫ ДЛЯ КНИГ ---

@router.get("/books/", response_model=List[BookRead])
def read_books(skip: int = 0, limit: int = 100, status: str = None, db: Session = Depends(get_db)):
    return crud.book.get_books(db, skip=skip, limit=limit, status=status)

@router.post("/books/", response_model=BookRead)
def create_book(book: BookCreate, db: Session = Depends(get_db)):
    return crud.book.create_book(db=db, book=book, owner_id=1) # Пока жестко 1 (заглушка вместо авторизации)

@router.get("/books/{book_id}", response_model=BookRead)
def read_book(book_id: int, db: Session = Depends(get_db)):
    db_book = crud.book.get_book(db, book_id=book_id)
    if db_book is None:
        raise HTTPException(status_code=404, detail="Книга не найдена")
    return db_book

@router.put("/books/{book_id}", response_model=BookRead)
def update_book(book_id: int, book: BookUpdate, db: Session = Depends(get_db)):
    db_book = crud.book.get_book(db, book_id=book_id)
    if db_book is None:
        raise HTTPException(status_code=404, detail="Книга не найдена")
    return crud.book.update_book(db=db, db_book=db_book, book_update=book)

@router.delete("/books/{book_id}")
def delete_book(book_id: int, db: Session = Depends(get_db)):
    db_book = crud.book.get_book(db, book_id=book_id)
    if db_book is None:
        raise HTTPException(status_code=404, detail="Книга не найдена")
    crud.book.delete_book(db=db, db_book=db_book)
    return {"message": "Книга удалена"}

# --- МАРШРУТЫ ДЛЯ БРОНЕЙ ---

@router.post("/bookings/", response_model=BookingRead)
def create_booking(booking: BookingCreate, db: Session = Depends(get_db)):
    return crud.booking.create_booking(db=db, booking=booking, borrower_id=1) # Пока жестко 1

@router.get("/bookings/my", response_model=List[BookingRead])
def read_my_bookings(db: Session = Depends(get_db)):
    return crud.booking.get_bookings_by_borrower(db, borrower_id=1)