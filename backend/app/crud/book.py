from sqlalchemy.orm import Session
from app import models, schemas
from app.schemas.book import BookCreate, BookUpdate

def get_book(db: Session, book_id: int):
    return db.query(models.Book).filter(models.Book.id == book_id).first()

def get_books(db: Session, skip: int = 0, limit: int = 100, status: str = None):
    query = db.query(models.Book)
    if status:
        query = query.filter(models.Book.status == status)
    return query.offset(skip).limit(limit).all()

def get_books_by_owner(db: Session, owner_id: int):
    return db.query(models.Book).filter(models.Book.owner_id == owner_id).all()

def create_book(db: Session, book: BookCreate, owner_id: int):
    db_book = models.Book(**book.model_dump(), owner_id=owner_id)
    db.add(db_book)
    db.commit()
    db.refresh(db_book)
    return db_book

def update_book(db: Session, db_book: models.Book, book_update: BookUpdate):
    update_data = book_update.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_book, key, value)
    db.commit()
    db.refresh(db_book)
    return db_book

def delete_book(db: Session, db_book: models.Book):
    db.delete(db_book)
    db.commit()