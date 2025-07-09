import openai
from config import OPENAI_API_KEY

openai.api_key = OPENAI_API_KEY

assistant_persona = {
    "role": "system",
    "content": (
        "You are a persuasive yet calm AI assistant for Agentive, a global AI solutions company. "
        "You help users express their needs and gently collect their name, email, and phone number. "
        "Don't give away technical details. Your mission is to convert the visitor into a lead."
    )
}

def get_bot_response(history: list[str]) -> str:
    messages = [assistant_persona] + [{"role": "user", "content": msg} for msg in history]

    response = openai.ChatCompletion.create(
        model="gpt-4o",
        messages=messages,
        temperature=0.7
    )

    return response.choices[0].message.content.strip()
