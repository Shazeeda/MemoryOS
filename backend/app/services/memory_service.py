from sqlalchemy.orm import Session

from app.models.memory import Memory as MemoryModel
from app.schemas.memory import Memory


def create_memory(db: Session, memory: Memory):
    new_memory = MemoryModel(
        title=memory.title,
        content=memory.content,
        category=memory.category,
    )

    db.add(new_memory)
    db.commit()
    db.refresh(new_memory)

    return new_memory


def get_memories(db: Session):
    return db.query(MemoryModel).all()


def update_memory(db: Session, memory_id: int, memory: Memory):
    existing_memory = (
        db.query(MemoryModel)
        .filter(MemoryModel.id == memory_id)
        .first()
    )

    if not existing_memory:
        return None

    existing_memory.title = memory.title
    existing_memory.content = memory.content
    existing_memory.category = memory.category

    db.commit()
    db.refresh(existing_memory)

    return existing_memory


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