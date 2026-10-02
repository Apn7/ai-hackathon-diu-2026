from pathlib import Path

from fastapi import FastAPI
from fastapi.responses import FileResponse

STATIC = Path(__file__).parent / "static"

app = FastAPI(title="AI Hackathon 2026")


@app.get("/api/health")
def health():
    return {"status": "ok"}


@app.get("/")
def index():
    return FileResponse(STATIC / "index.html")
