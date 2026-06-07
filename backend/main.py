from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "MemoryOS API Running"}

@app.get("/health")
def health():
    return {"status": "healthy"}

@app.get("/notes")
def get_notes():
    return [
        {
            "id": 1,
            "title": "First Memory",
            "content": "Welcome to MemoryOS"
        }
    ]