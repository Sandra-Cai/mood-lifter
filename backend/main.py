import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import openai

load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str
    mood: str

class ChatResponse(BaseModel):
    reply: str

SYSTEM_PROMPT = (
    "You are an empathetic, uplifting AI companion for successful women who may feel lonely. "
    "Your goal is to provide emotional support, encouragement, and positive affirmations. "
    "Always respond with warmth, understanding, and actionable self-care suggestions."
)

@app.post("/chat", response_model=ChatResponse)
async def chat_endpoint(req: ChatRequest):
    try:
        user_prompt = f"User mood: {req.mood}\nUser message: {req.message}"
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": user_prompt},
            ],
            max_tokens=300,
            temperature=0.8,
        )
        reply = response.choices[0].message["content"].strip()
        return ChatResponse(reply=reply)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 