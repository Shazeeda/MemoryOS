from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.memory import Memory
from app.services.memory_service import create_memory, get_memories

router = APIRouter()


@router.get("/")
def home():
    return {"message": "MemoryOS API Running"}


@router.post("/memories")
def add_memory(
    memory: Memory,
    db: Session = Depends(get_db)
):
    return create_memory(db, memory)


@router.get("/memories")
def read_memories(
    db: Session = Depends(get_db)
):
    return get_memories(db)