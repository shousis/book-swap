from sqlalchemy.orm import Session
from app import models
from app.schemas.booking import BookingCreate, BookingUpdate

def get_booking(db: Session, booking_id: int):
    return db.query(models.Booking).filter(models.Booking.id == booking_id).first()

def get_bookings_by_borrower(db: Session, borrower_id: int):
    return db.query(models.Booking).filter(models.Booking.borrower_id == borrower_id).all()

def create_booking(db: Session, booking: BookingCreate, borrower_id: int):
    db_booking = models.Booking(**booking.model_dump(), borrower_id=borrower_id)
    db.add(db_booking)
    db.commit()
    db.refresh(db_booking)
    
    # Меняем статус книги на "забронирована"
    book = db.query(models.Book).filter(models.Book.id == booking.book_id).first()
    if book:
        book.status = models.BookStatus.reserved
        db.commit()
        
    return db_booking

def update_booking_status(db: Session, db_booking: models.Booking, booking_update: BookingUpdate):
    db_booking.status = booking_update.status
    db.commit()
    db.refresh(db_booking)
    
    # Если бронь отменена или возвращена, возвращаем книге статус "доступна"
    if booking_update.status in [models.BookingStatus.cancelled, models.BookingStatus.returned]:
        book = db.query(models.Book).filter(models.Book.id == db_booking.book_id).first()
        if book:
            book.status = models.BookStatus.available
            db.commit()
            
    return db_booking