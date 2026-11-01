from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import router
from app.database import engine, Base
from app import models

app = FastAPI(
    title="BookSwap API",
    description="API для платформы обмена книгами",
    version="1.0.0"
)

# Разрешаем запросы с фронтенда (чтобы React мог общаться с FastAPI)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], # Адрес нашего React-приложения
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Подключаем наши маршруты (книги и брони)
app.include_router(router, prefix="/api")

# Простой маршрут для проверки, что сервер жив
@app.get("/")
def root():
    return {"message": "BookSwap API работает!"}