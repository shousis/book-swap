import enum
from datetime import datetime
from sqlalchemy import Column, Integer, String, Text, ForeignKey, DateTime, Date, Enum
from sqlalchemy.orm import relationship
from app.database import Base

class BookCondition(str, enum.Enum):
    new = "new"
    good = "good"
    fair = "fair"
    poor = "poor"

class BookStatus(str, enum.Enum):
    available = "available"
    reserved = "reserved"
    given = "given"
    unavailable = "unavailable"

class BookingStatus(str, enum.Enum):
    pending = "pending"
    approved = "approved"
    active = "active"
    returned = "returned"
    cancelled = "cancelled"

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    password_hash = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    books = relationship("Book", back_populates="owner", cascade="all, delete-orphan")
    bookings = relationship("Booking", back_populates="borrower", cascade="all, delete-orphan")

class Book(Base):
    __tablename__ = "books"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True, nullable=False)
    author = Column(String, index=True, nullable=False)
    year = Column(Integer, nullable=True)
    isbn = Column(String, nullable=True)
    description = Column(Text, nullable=True)
    condition = Column(Enum(BookCondition), default=BookCondition.good)
    status = Column(Enum(BookStatus), default=BookStatus.available)
    pickup_point = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    owner_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    owner = relationship("User", back_populates="books")
    bookings = relationship("Booking", back_populates="book", cascade="all, delete-orphan")

class Booking(Base):
    __tablename__ = "bookings"
    id = Column(Integer, primary_key=True, index=True)
    start_date = Column(Date, nullable=False)
    end_date = Column(Date, nullable=False)
    status = Column(Enum(BookingStatus), default=BookingStatus.pending)
    created_at = Column(DateTime, default=datetime.utcnow)
    book_id = Column(Integer, ForeignKey("books.id"), nullable=False)
    borrower_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    book = relationship("Book", back_populates="bookings")
    borrower = relationship("User", back_populates="bookings")
    