from sqlalchemy.orm import Session

from app.models.memory import Memory as MemoryModel
from app.schemas.memory import Memory


def create_memory(db: Session, memory: Memory):
    new_memory = MemoryModel(
        title=memory.title,
        content=memory.content,
    )

    db.add(new_memory)
    db.commit()
    db.refresh(new_memory)

    return new_memory


def get_memories(db: Session):
    return db.query(MemoryModel).all()


def delete_memory(db: Session, memory_id: int):
    memory = (
        db.query(MemoryModel)
        .filter(MemoryModel.id == memory_id)
        .first()
    )

    if memory:
        db.delete(memory)
        db.commit()

    return memory