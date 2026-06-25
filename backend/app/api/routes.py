from fastapi import APIRouter

from app.schemas.memory import Memory
from app.services.memory_service import memories

router = APIRouter()


@router.get("/")
def home():
    return {"message": "MemoryOS API Running"}


@router.post("/memories")
def create_memory(memory: Memory):
    memories.append(memory)

    return {
        "message": "Memory saved successfully",
        "memory": memory
    }


@router.get("/memories")
def get_memories():
    return memories