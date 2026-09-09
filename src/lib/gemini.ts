// Google Gemini API integration

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

export interface GeminiMessage {
  text: string;
}

export interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: GeminiMessage[];
    };
  }>;
}

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!GEMINI_API_KEY) {
    return 'Gemini API key not configured';
  }

  try {
    const response = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: message,
              },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const data: GeminiResponse = await response.json();
    return data.candidates[0]?.content.parts[0]?.text || 'No response';
  } catch (error) {
    console.error('Gemini API error:', error);
    throw error;
  }
};
