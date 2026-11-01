from pydantic import BaseModel
from typing import Optional
from datetime import datetime, date
from app.models import BookingStatus

class BookingBase(BaseModel):
    start_date: date
    end_date: date
    status: BookingStatus = BookingStatus.pending

class BookingCreate(BookingBase):
    book_id: int

class BookingUpdate(BaseModel):
    status: BookingStatus

class BookingRead(BookingBase):
    id: int
    book_id: int
    borrower_id: int
    created_at: datetime

    class Config:
        from_attributes = True