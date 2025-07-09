import openai
from config import OPENAI_API_KEY

openai.api_key = OPENAI_API_KEY

def extract_lead_details(chat_history: str) -> dict:
    prompt = f"""
You are a backend assistant. Extract the following fields from the conversation:

- "name": full name of the user (if mentioned)
- "email": valid email address (if mentioned)
- "phone": phone number (any format)
- "summary": 2-3 line summary of what the user needs

Return JSON ONLY.

Transcript:
{chat_history}
"""

    response = openai.ChatCompletion.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.3
    )

    return response.choices[0].message.content.strip()
