from fastapi import FastAPI
from app.routes import task
from app.database import engine, Base

# Create tables on startup
# In production, use Alembic migrations instead of this
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Task Management Tool",
    description="A FastAPI backend for managing tasks.",
    version="1.0.0",
)

app.include_router(task.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to Task Management Tool API"}
