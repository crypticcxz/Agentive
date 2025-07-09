from fastapi import FastAPI, Request, HTTPException
from pydantic import BaseModel
from limiter import RateLimiter
from chat_handler import get_bot_response
from extract_info import extract_lead_details
from config import MAX_REQUESTS_PER_MINUTE

app = FastAPI()
limiter = RateLimiter(MAX_REQUESTS_PER_MINUTE, per_seconds=60)

class ChatRequest(BaseModel):
    history: list[str]

class ExtractRequest(BaseModel):
    transcript: str

@app.post("/chat")
def chat(input_data: ChatRequest):
    if not limiter.allow():
        raise HTTPException(status_code=429, detail="Too many requests. Please wait.")
    reply = get_bot_response(input_data.history)
    return {"reply": reply}

@app.post("/extract")
def extract(input_data: ExtractRequest):
    extracted_json = extract_lead_details(input_data.transcript)
    return {"lead": extracted_json}
