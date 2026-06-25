from pydantic import BaseModel


class Memory(BaseModel):
    title: str
    content: str