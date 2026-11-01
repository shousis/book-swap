from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
from app.models import BookCondition, BookStatus

class BookBase(BaseModel):
    title: str = Field(..., min_length=1, max_length=255)
    author: str = Field(..., min_length=1, max_length=255)
    year: Optional[int] = Field(None, ge=1000, le=2100)
    isbn: Optional[str] = None
    description: Optional[str] = None
    condition: BookCondition = BookCondition.good
    status: BookStatus = BookStatus.available
    pickup_point: Optional[str] = None

class BookCreate(BookBase):
    pass

class BookUpdate(BookBase):
    title: Optional[str] = None
    author: Optional[str] = None

class BookRead(BookBase):
    id: int
    owner_id: int
    created_at: datetime

    class Config:
        from_attributes = True