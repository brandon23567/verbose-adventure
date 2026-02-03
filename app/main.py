from fastapi import FastAPI
from app.routes import task

app = FastAPI(
    title="Task Management Tool",
    description="A FastAPI backend for managing tasks.",
    version="1.0.0",
)

from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://verbose-adventure-uau8.onrender.com",
    "https://verbose-adventure.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(task.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to Task Management Tool API"}
