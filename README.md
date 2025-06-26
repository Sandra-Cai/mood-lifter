# Mood Lifter: AI-Powered Emotional Support

## Overview
Mood Lifter is an AI-powered application designed to provide emotional value and support to lonely, successful women. The goal is to create a safe, uplifting, and engaging digital companion that understands, empathizes, and helps users navigate moments of loneliness or emotional need.

## Vision
To empower successful women by offering meaningful, AI-driven emotional support that enhances well-being, confidence, and happiness.

## Why This Project?
Many successful women face unique challenges: high expectations, social isolation, and the pressure to always appear strong. Mood Lifter aims to:
- Offer a non-judgmental space for emotional expression
- Provide personalized, uplifting interactions
- Encourage self-care and positive thinking
- Reduce feelings of loneliness and isolation

## Key Features (Planned)
- **Conversational AI:** Engages in empathetic, supportive conversations tailored to the user's mood and needs.
- **Mood Tracking:** Helps users identify emotional patterns and triggers.
- **Personalized Uplift:** Delivers affirmations, motivational content, and actionable self-care suggestions.
- **Privacy First:** All interactions are confidential and user data is protected.

## Who Is This For?
- Successful women who may feel lonely or emotionally unsupported
- Anyone seeking a digital companion for emotional well-being

## How It Works (Planned)
1. **User Check-In:** The user shares how she feels.
2. **AI Response:** The AI listens, empathizes, and offers tailored support or uplifting content.
3. **Follow-Up:** The app checks in regularly and adapts to the user's emotional journey.

## Getting Started
*This project is in its early stages. Stay tuned for updates on setup, usage, and contribution guidelines!*

## Contributing
We welcome ideas, feedback, and collaboration from those passionate about emotional well-being and AI. Please open an issue or pull request to get involved.

## License
*To be determined.*

## How to Run the Backend

1. **Navigate to the project root directory** (where you see `backend/` and `frontend/` folders):
   ```bash
   cd path/to/your/mood-lifter
   ```

2. **Add your OpenAI API key**
   - Create a file named `.env` inside the `backend/` folder with this content:
     ```
     OPENAI_API_KEY=sk-...
     ```

3. **Install Python dependencies**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

4. **Start the backend server**
   ```bash
   uvicorn main:app --reload
   ```
   - The server will run at [http://localhost:8000](http://localhost:8000)

5. **(Optional) Test the API**
   - Open [http://localhost:8000/docs](http://localhost:8000/docs) in your browser to access the FastAPI interactive docs and test the `/chat` endpoint.

---

*Created with the vision of making every woman feel seen, heard, and uplifted.*