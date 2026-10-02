from fastapi import FastAPI

app = FastAPI(title="AI Hackathon 2026")


@app.get("/api/health")
def health():
    return {"status": "ok"}
