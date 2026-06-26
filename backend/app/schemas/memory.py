from pydantic import BaseModel


class Memory(BaseModel):
    title: str
    content: str
    category: str = "General"
    tags: str = ""