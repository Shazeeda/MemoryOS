from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:5174", "http://localhost:5175", "http://localhost:5176"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Memory(BaseModel):
    title: str
    content: str

memories = []

@app.get("/")
def home():
    return {"message": "MemoryOS API Running"}

@app.post("/memories")
def create_memory(memory: Memory):
    memories.append(memory)
    return {
        "message": "Memory saved successfully",
        "memory": memory
    }

@app.get("/memories")
def get_memories():
    return memories