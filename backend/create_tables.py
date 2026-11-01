from app.database import engine, Base
from app import models

print("Создаем таблицы...")
Base.metadata.create_all(bind=engine)
print("Таблицы успешно созданы!")